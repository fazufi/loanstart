import React from "react";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function index() {
  return (
    <div className="max-w-screen-xl mx-auto bg-gray-100">
      <Header />
      <div className="flex flex-col justify-between min-h-[90vh] px-3 md:px-24 py-10 space-y-20">
        <Faqs />
        <Footer />
      </div>
    </div>
  );
}
