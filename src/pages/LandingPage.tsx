import { Link } from "react-router-dom";
import ParticleField from "../components/animations/ParticlesField";
import AuthorCard from "../components/authors/authorCard";
import BookCard from "../components/books/bookCard";
import { authors, books, genres } from "../constants";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-text px-6 pt-24 pb-12 overflow-hidden">
      {/* Hero Section */}
      <section className="text-center mb-16 relative min-h-screen flex items-center justify-center">
        <ParticleField />
        <div>
          <h1 className="text-5xl font-extrabold mb-6 relative z-10">
            Welcome to Bookie 📚
            <span className="block text-primary mt-2">
              Your Futuristic Bookstore
            </span>
          </h1>
          <p className="text-lg text-text/50 max-w-3xl mx-auto relative z-10">
            Dive into a universe of knowledge with Bookie. Explore books,
            authors, and genres with cutting-edge CRUD functionality. Your
            literary journey starts here.
          </p>
          <Link
            to="/auth"
            className="mt-8 px-6 py-3 bg-primary text-secondary rounded-full shadow-lg cursor-pointer hover:bg-secondary hover:text-text transition-all duration-300 relative z-10 inline-block"
          >
            Start Exploring
          </Link>
        </div>
      </section>

      {/* Book Listing */}
      <section className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-primary mb-6 flex items-center">
          Featured Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
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
      </section>

      {/* Author Listing */}
      <section className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-primary mb-6 flex items-center">
          Featured Authors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {authors.map((author) => (
            <AuthorCard
              key={author.id}
              id={author.id}
              name={author.name}
              bio={author.bio}
              imageUrl={author.imageUrl}
              variant="simple"
            />
          ))}
        </div>
      </section>

      {/* Genre Listing */}
      <section className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-primary mb-6 flex items-center">
          Explore Genres
        </h2>
        <div className="flex flex-wrap gap-4">
          {genres.map((genre) => (
            <span
              key={genre}
              className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-primary hover:bg-secondary/40 transition-colors duration-300 cursor-pointer"
            >
              {genre}
            </span>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-secondary/20">
        <h2 className="text-3xl font-bold text-text mb-4">Ready to Dive In?</h2>
        <p className="text-text/50 mb-6 max-w-xl mx-auto">
          Join thousands of readers discovering their next favorite book.
        </p>
        <button className="px-8 py-4 bg-primary cursor-pointer text-secondary rounded-full shadow-lg hover:text-text hover:bg-secondary transition-all duration-300">
          Sign Up Now
        </button>
      </section>
    </div>
  );
}
