import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/layout";
import AuthLayout from "../pages/auth/authLayout";
import Login from "../components/auth/login";
import Register from "../components/auth/register";
import LandingPage from "../pages/LandingPage";
import ErrorPage from "../pages/Error";
import BooksListingPage from "../pages/books";
import AuthorsListingPage from "../pages/authors";
import BookDetailPage from "../components/books/details";
import AuthorDetailPage from "../components/authors/details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "books",
        element: <BooksListingPage />,
      },
      {
        path: "books/:id",
        element: <BookDetailPage />,
      },
      {
        path: "authors",
        element: <AuthorsListingPage />,
      },
      {
        path: "authors/:id",
        element: <AuthorDetailPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);
