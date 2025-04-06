import { Author, Book } from "../types";

export const books: Book[] = [
  {
    id: "1",
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    imageUrl:
      "https://m.media-amazon.com/images/I/81ioPZFMeUL._UF1000,1000_QL80_.jpg",
    description:
      "The Alchemist is a 1988 novel written by Paulo Coelho. It is a philosophical and spiritual guide for those who seek to understand and live a life of purpose and meaning in this world.",
  },
  {
    id: "2",
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    imageUrl:
      "https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_UF1000,1000_QL80_.jpg",
    description:
      "Atomic Habits is a self-help book by James Clear that focuses on the power of small habits to transform our lives and achieve our goals.",
  },
  {
    id: "3",
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    imageUrl:
      "https://m.media-amazon.com/images/I/41bOkXnNBjL._SY445_SX342_.jpg",
    description:
      "Clean Code is a book by Robert C. Martin that provides a set of principles for writing clean, maintainable code.",
  },
  {
    id: "4",
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian Fiction",
    imageUrl:
      "https://m.media-amazon.com/images/I/61NAx5pd6XL._AC_UF894,1000_QL80_.jpg",
    description:
      "1984 is a dystopian novel by George Orwell that depicts a totalitarian society ruled by a totalitarian government.",
  },
  {
    id: "5",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    imageUrl:
      "https://m.media-amazon.com/images/I/81YfoqcSp6L._UF1000,1000_QL80_.jpg",
    description:
      "Sapiens is a book by Yuval Noah Harari that explores the origins and development of human civilization.",
  },
  {
    id: "6",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    imageUrl:
      "https://m.media-amazon.com/images/I/81TLiZrasVL._UF1000,1000_QL80_.jpg",
    description:
      "The Great Gatsby is a novel by F. Scott Fitzgerald that follows the life of Jay Gatsby, a wealthy American playboy in the 1920s.",
  },
  {
    id: "7",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Psychology",
    imageUrl: "https://m.media-amazon.com/images/I/61fdrEuPJwL.jpg",
    description:
      "Thinking, Fast and Slow is a book by Daniel Kahneman that explores the differences between quick thinking and slow thinking.",
  },
  {
    id: "8",
    title: "You Are a Badass",
    author: "Jen Sincero",
    genre: "Self-help",
    imageUrl: "https://m.media-amazon.com/images/I/710GUve5H-L.jpg",
    description:
      "You Are a Badass is a self-help book by Jen Sincero that provides tips for becoming a badass.",
  },
];

export const authors: Author[] = [
  {
    id: "a1",
    name: "Paulo Coelho",
    imageUrl:
      "https://cdn.britannica.com/67/126567-050-A5C3A312/Paulo-Coelho-departure-themes-thriller-serial-killer-2008.jpg",
    bio: "Renowned Brazilian author known for 'The Alchemist'.",
  },
  {
    id: "a2",
    name: "James Clear",
    imageUrl:
      "https://m.media-amazon.com/images/S/amzn-author-media-prod/rec58e62v0epfogin4i1o6mu55.jpg",
    bio: "Bestselling author of 'Atomic Habits' and productivity expert.",
  },
  {
    id: "a3",
    name: "Robert C. Martin",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Robert_C._Martin_surrounded_by_computers_%28cropped%29.jpg/640px-Robert_C._Martin_surrounded_by_computers_%28cropped%29.jpg",
    bio: "Software engineer and author of 'Clean Code'.",
  },
  {
    id: "a4",
    name: "George Orwell",
    imageUrl:
      "https://cdn.britannica.com/68/9768-004-F4E88413/George-Orwell.jpg",
    bio: "British novelist famous for '1984' and 'Animal Farm'.",
  },
  {
    id: "a5",
    name: "Yuval Noah Harari",
    imageUrl: "https://www.sitra.fi/app/uploads/2017/09/yuval_harari-Copy.jpg",
    bio: "Historian and author of 'Sapiens' and 'Homo Deus'.",
  },
  {
    id: "a6",
    name: "F. Scott Fitzgerald",
    imageUrl:
      "https://shortstoryproject.com/wp-content/uploads/2021/10/F.-Scott-Fitzgerald-scaled-1.jpg",
    bio: "American novelist of the Jazz Age, author of 'The Great Gatsby'.",
  },
];

export const genres = [
  "Fiction",
  "Self-help",
  "Programming",
  "Dystopian Fiction",
  "History",
  "Psychology",
  "Fantasy",
  "Biography",
  "Science Fiction",
  "Mystery",
];
