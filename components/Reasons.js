import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";

export default function Reasons() {
  const service = [
    { icon: <FiPhoneCall />, text: "Lorem ipsum dolor sit amet" },
    { icon: <BsEnvelope />, text: "Lorem ipsum dolor sit amet" },
    { icon: <AiOutlineClockCircle />, text: "Lorem ipsum dolor sit amet" },
  ];
  return (
    <div className="space-y-10">
      <section className="flex items-center bg-gray-300 h-[1px] w-full ">
        <span className="bg-gray-100 mx-auto px-1 font-medium text-xl">Reasons for Applying</span>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-7 gap-y-3 md:gap-7">
        <div className="col-span-2 space-y-10">
          <div className="border border-gray-200 shadow space-y-4 py-3 px-5">
            <div className="text-2xl">Contact Us 24 hours a day</div>
            {service.map((s, idx) => (
              <div className="flex gap-4 items-center">
                <div key={idx} className="text-gray-400">
                  {s.icon}
                </div>
                <div>{s.text} </div>
              </div>
            ))}
            <button className="bg-yellow-500 w-48 py-2 rounded shadow-md shadow-yellow-600">
              LEAN MORE NOW
            </button>
          </div>
          <div className="bg-slate-200 flex gap-0 shadow py-3 pl-5 pr-0 space-y-4">
            <div>
              <div className="text-xl leading-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
              <button className="border border-yellow-300 bg-white w-44 py-2 rounded mt-3">
                LEARN MORE NOW
              </button>
            </div>
            <img
              src="half-laptop.png"
              alt=""
              className=" object-fill overflow-hidden -ml-20 md:-ml-40"
            />
          </div>
        </div>
        <div className="col-span-5 space-y-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-slate-200 p-7 space-y-3">
              <div className="text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </div>
              <div>Lorem ipsum dolor sit amet</div>
              <button className="rounded-md shadow shadow-gray-500 py-2 bg-gray-200 w-48">
                LEARN MORE NOW
              </button>
            </div>
            <div className="flex bg-yellow-400 pt-7 pl-7 pr-0 space-y-3">
              <div className="-mr-28 py-2 md:py-0">
                <div className="text-2xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </div>
                <div className="my-3">Lorem ipsum dolor sit amet</div>
                <button className="rounded-md shadow shadow-gray-500 py-2 bg-gray-200 w-48">
                  LEARN MORE NOW
                </button>
              </div>
              <img src="corner.png" alt="" className="overflow-hidden" />
            </div>
          </div>
          <div className="flex border border-gray-200 shadow shadow-gray-300 pt-7 pb-2 pl-7 pr-0 ">
            <div className="-mr-20 space-y-4">
              <div className="text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </div>
              <button className="border border-yellow-300 bg-white w-44 py-2 rounded mt-3">
                LEARN MORE NOW
              </button>
            </div>
            <img src="laptop.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
