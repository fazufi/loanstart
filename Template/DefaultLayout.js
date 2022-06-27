import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function DefaultLayout({ children }) {
  return (
    <div className="max-w-screen-xl  mx-auto bg-gray-100 ">
      <Header />
      <div
        className="px-3 flex flex-col justify-between min-h-[90vh] md:px-24 py-10 space-y-20"
      >
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
}
