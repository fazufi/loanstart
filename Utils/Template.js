import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Template({ children }) {
  return (
    <div className="max-w-screen-xl mx-auto bg-gray-100">
      <Header />
      <div className="px-3 md:px-24 py-10 space-y-20">
        {children}
        <Footer />
      </div>
    </div>
  );
}
