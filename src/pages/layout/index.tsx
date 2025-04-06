import React from "react";
import Header from "../../components/layout/header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/layout/footer";

export default function RootLayout() {
  return (
    <React.Fragment>
      <Header />
      <main className="min-h-screen w-full">
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
}
