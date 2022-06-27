import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loans from "../components/Loans";
import DefaultLayout from "../Template/DefaultLayout";

export default function index() {
  return (
    <div className="max-w-screen-xl  mx-auto bg-gray-100 ">
      <Header />
      <div className="flex flex-col justify-between min-h-[90vh] px-3 md:px-24 py-10 space-y-20">
        <Loans />
        <Footer />
      </div>
    </div>
  );
}

