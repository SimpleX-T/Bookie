import { useState } from "react";
import { authors } from "../../constants";
import AuthorCard from "../../components/authors/authorCard";

export default function AuthorsListingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const authorsPerPage = 6;

  // Filter authors based on search term
  const filteredAuthors = authors.filter(
    (author) =>
      author.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      author.bio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastAuthor = currentPage * authorsPerPage;
  const indexOfFirstAuthor = indexOfLastAuthor - authorsPerPage;
  const currentAuthors = filteredAuthors.slice(
    indexOfFirstAuthor,
    indexOfLastAuthor
  );
  const totalPages = Math.ceil(filteredAuthors.length / authorsPerPage);

  return (
    <div className="min-h-screen bg-background text-text px-6 py-12 max-w-7xl mx-auto mt-32 pb-12">
      <h1 className="text-3xl font-bold text-primary mb-8">All Authors</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name or bio..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Authors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentAuthors.map((author) => (
          <AuthorCard
            key={author.id}
            id={author.id}
            name={author.name}
            bio={author.bio}
            imageUrl={author.imageUrl}
            variant="simple" // Use simple style for listing page
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-80 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="py-2">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-80 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}
