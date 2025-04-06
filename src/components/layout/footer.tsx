import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-text text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Footer Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 relative z-10">
          <div>
            <h3 className="font-semibold text-lg mb-4 text-blue-300">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-400 transition-colors duration-200 text-gray-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-400 transition-colors duration-200 text-gray-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-400 transition-colors duration-200 text-gray-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-blue-400 transition-colors duration-200 text-gray-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-purple-300">
              Follow Us
            </h3>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400 transition-colors duration-200 text-gray-300 hover:scale-110"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400 transition-colors duration-200 text-gray-300 hover:scale-110"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400 transition-colors duration-200 text-gray-300 hover:scale-110"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-green-300">
              Contact Info
            </h3>
            <ul>
              <li className="mb-2">
                Email:{" "}
                <a
                  href="mailto:support@bookie.com"
                  className="hover:text-blue-400 transition-colors duration-200 text-gray-300"
                >
                  support@bookie.com
                </a>
              </li>
              <li>
                Phone: <span className="text-gray-400">(123) 456-7890</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-blue-300">
              Subscribe
            </h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 rounded-md text-md border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button
                type="submit"
                className="w-full bg-primary text-secondary p-3 rounded-md hover:bg-secondary hover:text-primary cursor-pointer transition-all duration-300"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 relative z-10">
          <p>© {new Date().getFullYear()} Bookie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
