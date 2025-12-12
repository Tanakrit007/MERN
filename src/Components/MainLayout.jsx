import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <nav>
        <Navbar />
      </nav>
      <main className="grow flex item-center justify-center container min-h-screen mx-auto pt-5 mt-5 sm:p-6 lg:p-8">
        <Outlet />
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};
export default MainLayout;
