import React, { useState } from "react";
import Head from "next/head";
import Loans from "../components/Loans";
import Costs from "../components/Costs";
import Works from "../components/Works";
import Faqs from "../components/Faqs";
// import Image from "next/image";
import { BsCheck2Square } from "react-icons/bs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Partners from "../components/Partners";
import WhyUs from "../components/WhyUs";
import Location from "../components/Location";
import FeedBack from "../components/FeedBack";
import Details from "../components/Details";
import Reasons from "../components/Reasons";

export default function Home() {
  const advantages = [
    "Get up to $15,000 Cash Fast",
    "15 MinuteOnline Application",
    "Centrelink Considered*",
    "Bad Credit Considered2",
  ];

  return (
    <div className="max-w-screen-xl mx-auto bg-gray-100">
      <Head>
        <title>LoanStart</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="px-3 md:px-24 py-10 space-y-20 bg-gray-100 relative">
        <div>
          <div className="md:grid grid-cols-4 gap-6">
            <section className="col-span-2 ">
              <div className="leading-normal text-6xl flex items-start font-medium tracking-tighter">
                {" Fast, secure & easy loans in just 1 Day"}
              </div>
              <div className="text-sm pr-5 mt-3">
                Need some fast case? Bad credit history? We dont mind about your
                past, just the future. Try loan start and feel secure in your
                future
              </div>
            </section>
            <section className="flex flex-col justify-between mt-3 md:mt-0">
              <div className="flex flex-col gap-6 justify-end">
                {advantages.map((a, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <BsCheck2Square />
                    <div>{a}</div>
                  </div>
                ))}
              </div>
              <button className="bg-yellow-500  shadow-md shadow-yellow-600 py-3 rounded w-full mt-3">
                APPLY FOR LOANS NOW
              </button>
            </section>
            <section className="text-sm flex flex-col justify-between mt-3 md:mt-0">
              <div>
                <div className=" border border-gray-200 rounded py-2 px-3">
                  <span className="text-yellow-500">1.</span> Subject to
                  verification, suitability and affordability
                </div>
                <div className=" border border-gray-200 rounded py-2 px-3 mt-2">
                  <span className="text-yellow-500">2.</span> Your income from
                  Centrelink must be less than 50% of your total income in order
                  to qualify for a cash
                </div>
              </div>

              <button className="border border-gray-200 py-3 rounded w-full mt-3">
                LEARN MORE
              </button>
            </section>
          </div>
        </div>
        <Loans />
        <Costs />
        <Works />
        <Reasons />
        <Partners />
        <Details />
        <WhyUs />
        <FeedBack />
        <Location />
        <Faqs />
        <Footer />
      </div>
    </div>
  );
}
