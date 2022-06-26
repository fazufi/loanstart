import React from "react";
import Costs from "../components/Costs";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function index() {
  return (
    <div className="max-w-screen-xl mx-auto bg-gray-100">
      <Header />
      <div className="px-3 md:px-24 py-10 space-y-20">
        <Costs />
        <Footer />
      </div>
    </div>
  );
}
