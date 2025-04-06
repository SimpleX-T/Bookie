import { FaBook } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center h-[68px] px-6 md:px-12 border border-secondary fixed max-w-7xl w-full rounded-full top-4 left-1/2 transform -translate-x-1/2 bg-primary/20 backdrop-blur-md z-50">
      <div className="mr-auto">
        <Link
          to="/"
          className="font-['Bricolage_Grotesque',_sans-serif] font-semibold text-xl flex items-center gap-2 text-primary transition-transform duration-300 select-none"
        >
          <FaBook className="text-2xl" />
          <span>Bookie</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center gap-6 text-sm font-medium text-gray-300">
          <li>
            <Link
              to="/books"
              className="hover:text-blue-400 transition-colors duration-200 hover:underline underline-offset-4 text-text"
            >
              Books
            </Link>
          </li>
          <li>
            <Link
              to="/authors"
              className="hover:text-purple-400 transition-colors duration-200 hover:underline underline-offset-4 text-text"
            >
              Authors
            </Link>
          </li>
          <li>
            <Link
              to="/auth/login"
              className="hover:text-green-400 transition-colors duration-200 hover:underline underline-offset-4 text-text"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
