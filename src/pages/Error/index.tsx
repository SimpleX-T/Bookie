import { Link, ScrollRestoration } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      <ScrollRestoration />
      <div className="text-center p-8 max-w-md w-full mx-4 z-10">
        <img
          src="https://media.istockphoto.com/id/1373078047/vector/book-with-torn-page-404-error-concept-page-not-found.jpg?s=170667a&w=0&k=20&c=l5VhJpkLjZT1Oag4GGzWwUU5cJcBKVM71mJt5XaKpg4="
          alt="404 not found"
          className="w-full h-auto mb-8 mix-blend-plus-darker"
        />
        {/* <h1 className="text-6xl font-bold text-primary">404</h1>
        <p className="text-2xl font-semibold text-secondary mb-6">
          Oops! Page Not Found
        </p>
        <p className="text-lg text-text/70 mb-8">
          It seems you've wandered into uncharted territory. The page you're
          looking for might have been misplaced in the digital cosmos.
        </p> */}

        <Link
          to="/"
          className="inline-block bg-primary text-secondary hover:text-text px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-all duration-300"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
}
