import { useParams, useNavigate, ScrollRestoration } from "react-router-dom";
import { useState, useEffect } from "react";
import { Author, Book } from "../../types";
import { authors, books } from "../../constants";
import { FaArrowLeft } from "react-icons/fa6";
import BookCard from "../books/bookCard";
import AuthorCard from "./authorCard";

export default function AuthorDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [author, setAuthor] = useState<Author | null>(null);
  const [authorBooks, setAuthorBooks] = useState<Book[]>([]);
  const [relatedAuthors, setRelatedAuthors] = useState<Author[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate API call to find the author by ID
    const foundAuthor = authors.find((a) => a.id === id) || null;
    setAuthor(foundAuthor);

    // Find books by this author
    const booksByAuthor = books.filter((b) => b.author === foundAuthor?.name);
    setAuthorBooks(booksByAuthor);

    // Simulate finding related authors (same genre as author's books)
    const authorGenres = [...new Set(booksByAuthor.map((b) => b.genre))];
    const related = authors
      .filter(
        (a) =>
          a.id !== id &&
          books.some(
            (b) => b.author === a.name && authorGenres.includes(b.genre)
          )
      )
      .slice(0, 3);
    setRelatedAuthors(related);
  }, [id]);

  if (!author) {
    return (
      <div className="min-h-screen bg-background text-text flex items-center justify-center">
        Author not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-text px-6 py-12 max-w-7xl mx-auto mt-32">
      <ScrollRestoration />
      <button
        onClick={() => navigate(-1)}
        className="text-primary hover:text-blue-600 mb-6 items-center flex gap-2 cursor-pointer"
      >
        <FaArrowLeft />
        <span>Back</span>
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Author Profile */}
        <div className="w-full md:w-1/3">
          <img
            src={author.imageUrl}
            alt={`${author.name} profile`}
            className="w-full h-auto rounded-lg shadow-md"
          />
          <h1 className="text-3xl font-bold text-primary mt-4">
            {author.name}
          </h1>
        </div>

        {/* Author Details */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Biography
          </h2>
          <p className="text-gray-600 mb-6">{author.bio}</p>

          {/* Author Books */}
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Books by {author.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {authorBooks.map((book) => (
              <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                genre={book.genre}
                imageUrl={book.imageUrl}
                variant="simple"
              />
            ))}
          </div>

          {/* Related Authors */}
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
            Related Authors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedAuthors.map((relatedAuthor) => (
              <AuthorCard
                key={relatedAuthor.id}
                id={relatedAuthor.id}
                name={relatedAuthor.name}
                bio={relatedAuthor.bio}
                imageUrl={relatedAuthor.imageUrl}
                variant="simple"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
