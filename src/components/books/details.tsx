import { useParams, useNavigate, ScrollRestoration } from "react-router-dom";
import { useState, useEffect } from "react";
import { Book } from "../../types";
import { books } from "../../constants";
import BookCard from "./bookCard";
import { FaArrowLeft } from "react-icons/fa6";

export default function BookDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const [relatedBooks, setRelatedBooks] = useState<Book[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate API call to find the book by ID
    const foundBook = books.find((b) => b.id === id) || null;
    setBook(foundBook);

    // Simulate finding related books (same genre)
    const related = books
      .filter((b) => b.genre === foundBook?.genre && b.id !== id)
      .slice(0, 4);
    setRelatedBooks(related);
  }, [id]);

  if (!book) {
    return (
      <div className="min-h-screen bg-background text-text flex items-center justify-center">
        Book not found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-background text-text px-6 py-12 max-w-7xl mx-auto mt-24">
      <ScrollRestoration />
      <button
        onClick={() => navigate(-1)}
        className="text-primary hover:text-blue-600 mb-6 items-center flex gap-2 cursor-pointer"
      >
        <FaArrowLeft />
        <span>Back</span>
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Book Cover and Basic Info */}
        <div className="w-full md:w-1/3">
          <img
            src={book.imageUrl}
            alt={`${book.title} cover`}
            className="w-full h-auto rounded-lg shadow-md"
          />
          <h1 className="text-3xl font-bold text-primary mt-4">{book.title}</h1>
          <p className="text-lg text-secondary mt-2">By {book.author}</p>
          <p className="text-md text-secondary mt-1">Genre: {book.genre}</p>
        </div>

        {/* Book Details */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Description
          </h2>
          <p className="text-gray-600 mb-6">{book.description}</p>

          {/* Reviews (Simulated) */}
          {/* <h2 className="text-2xl font-semibold text-primary mb-4">Reviews</h2>
          <div className="space-y-4">
            <div className="bg-white/10 p-4 rounded-md">
              <p className="text-secondary">"A must-read!" - Reader</p>
            </div>
            <div className="bg-white/10 p-4 rounded-md">
              <p className="text-secondary">"Incredible insights." - Critic</p>
            </div>
          </div> */}

          {/* Add to Cart or Wishlist Button */}
          <button className="mt-6 px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-80">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Books */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-primary mb-6">
          Related Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedBooks.map((relatedBook) => (
            <BookCard
              key={relatedBook.id}
              id={relatedBook.id}
              title={relatedBook.title}
              author={relatedBook.author}
              genre={relatedBook.genre}
              imageUrl={relatedBook.imageUrl}
              variant="simple"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
