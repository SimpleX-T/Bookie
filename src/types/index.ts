export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  imageUrl: string;
  description?: string;
}

export interface Author {
  id: string;
  name: string;
  imageUrl: string;
  bio: string;
}
