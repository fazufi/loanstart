import React from "react";
import { FaHandHoldingUsd } from "react-icons/fa";
import { HiOutlineCursorClick } from "react-icons/hi";
import { TiShoppingBag } from "react-icons/ti";
import { BiAlarm } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";
import { GiHorseHead } from "react-icons/gi";

export default function WhyUs() {
  const lists = [
    {
      icon: <FaHandHoldingUsd  className="text-yellow-400 h-16 w-16" />,
      title: "Small Loans up to $4,600",
      desc: "Whether is a quick $300 or a coll $4,60. theres a NIfty loan fo you. just have some details ready and youre all set.",
    },
    {
      icon: <HiOutlineCursorClick  className="text-yellow-400 h-16 w-16" />,
      title: "Convenience at its best",
      desc: "No tiresome paperwork, no queues, no calls. Just jump online and apply.",
    },
    {
      icon: <TiShoppingBag className="text-yellow-400 h-16 w-16" />,
      title: "Bad credit, good credit, no credit?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
    },
    {
      icon: <BiAlarm className="text-yellow-400 h-16 w-16" />,
      title: "Answer in a jiff",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
    },
    {
      icon: <BsShieldCheck className="text-yellow-400 h-16 w-16" />,
      title: "Trusted by 1000s of aussies",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
    },
    {
      icon: <GiHorseHead className="text-yellow-400 h-16 w-16" />,
      title: "A quick buck",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
    },
  ];
  return (
    <div>
      <section className="flex items-center bg-gray-300  h-[1px] w-full ">
        <span className="bg-gray-100 mx-auto px-1 font-medium text-xl">Why Us</span>
      </section>
      <section className="grid gri-cols-1 md:grid-cols-2 gap-7 mt-20">
        {lists.map((l, idx) => (
          <div key={idx} className="flex gap-3 items-center">
          <div>  {l.icon}</div>
            <div className="space-y-3">
              <div className="text-xl font-semibold">{l.title} </div>
              <div>{l.desc}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
