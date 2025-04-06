import { motion, MotionProps } from "motion/react";
import { Link } from "react-router-dom";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  genre: string;
  imageUrl: string;
  variant?: "futuristic" | "simple";
}

export default function BookCard({
  id,
  title,
  author,
  genre,
  imageUrl,
  variant = "futuristic",
}: BookCardProps) {
  const baseClasses =
    "group border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1";

  const getVariantClasses = () => {
    switch (variant) {
      case "futuristic":
        return {
          container: "bg-white/5 backdrop-blur-sm border-border",
          image: "rounded-t-xl object-cover w-full h-64",
          title:
            "text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500",
          details: "text-sm text-gray-300",
          link: "text-blue-300 hover:text-white",
        };
      case "simple":
        return {
          container: "bg-white border-border",
          image: "rounded-t-xl object-cover w-full h-64",
          title: "text-xl font-bold text-primary",
          details: "text-sm text-secondary",
          link: "text-primary hover:text-blue-600",
        };
      default:
        return {
          container: "bg-white/5 backdrop-blur-sm border-white/10",
          image: "rounded-t-xl object-cover w-full h-64",
          title:
            "text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500",
          details: "text-sm text-gray-300",
          link: "text-blue-300 hover:text-white",
        };
    }
  };

  const classes = getVariantClasses();

  const animationProps: MotionProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div
      {...animationProps}
      className={`${baseClasses} ${classes.container} overflow-hidden`}
    >
      <Link to={`/books/${id}`}>
        {/* Image Section */}
        <div className="relative">
          <img
            src={imageUrl}
            alt={`${title} cover`}
            className={classes.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="absolute bottom-2 left-2 text-white text-sm font-semibold bg-black/60 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Details
          </span>
        </div>

        {/* Details Section */}
        <div className="p-4">
          <h3 className={classes.title}>{title}</h3>
          <p className={classes.details}>Author: {author}</p>
          <p className={classes.details}>Genre: {genre}</p>
          <span
            className={`inline-block mt-2 text-sm ${classes.link} underline-animation`}
          >
            Learn More
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
