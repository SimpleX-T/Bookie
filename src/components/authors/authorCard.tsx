import { Link } from "react-router-dom";
import { FaStar, FaTwitter, FaInstagram } from "react-icons/fa";

interface AuthorCardProps {
  id: string;
  name: string;
  bio: string;
  imageUrl: string;
  variant?: "futuristic" | "simple";
}

export default function AuthorCard({
  id,
  name,
  bio,
  imageUrl,
  variant = "futuristic",
}: AuthorCardProps) {
  const baseClasses =
    "group border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1";

  const getVariantClasses = () => {
    switch (variant) {
      case "futuristic":
        return {
          container: "bg-white/5 backdrop-blur-sm border-white/10",
          image: "rounded-t-xl object-cover w-full h-64",
          name: "text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500",
          bio: "text-sm text-gray-300",
          link: "text-blue-300 hover:text-white",
          rating: "text-yellow-400",
          social: "text-gray-300 hover:text-white",
        };
      case "simple":
        return {
          container: "bg-white border-gray-200",
          image: "rounded-t-xl object-cover w-full h-64",
          name: "text-xl font-bold text-primary",
          bio: "text-sm text-secondary",
          link: "text-primary hover:text-blue-600",
          rating: "text-yellow-500",
          social: "text-secondary hover:text-primary",
        };
      default:
        return {
          container: "bg-white/5 backdrop-blur-sm border-white/10",
          image: "rounded-t-xl object-cover w-full h-64",
          name: "text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500",
          bio: "text-sm text-gray-300",
          link: "text-blue-300 hover:text-white",
          rating: "text-yellow-400",
          social: "text-gray-300 hover:text-white",
        };
    }
  };

  const classes = getVariantClasses();

  return (
    <Link
      to={`/authors/${id}`}
      className={`${baseClasses} ${classes.container} overflow-hidden`}
    >
      {/* Image Section */}
      <div className="relative">
        <img src={imageUrl} alt={`${name} profile`} className={classes.image} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="absolute bottom-2 left-2 text-white text-sm font-semibold bg-black/60 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Profile
        </span>
      </div>

      {/* Details Section */}
      <div className="p-4">
        <h3 className={classes.name}>{name}</h3>
        <p className={classes.bio}>{bio}</p>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center">
            <FaStar className={classes.rating} />
            <span className="ml-1 text-sm text-gray-400">
              4.8 (1.2k reviews)
            </span>
          </div>
          <div className="flex space-x-2">
            <a href="https://twitter.com/author" className={classes.social}>
              <FaTwitter />
            </a>
            <a href="https://instagram.com/author" className={classes.social}>
              <FaInstagram />
            </a>
          </div>
        </div>
        <span
          className={`inline-block mt-2 text-sm ${classes.link} underline-animation`}
        >
          Learn More
        </span>
      </div>
    </Link>
  );
}
