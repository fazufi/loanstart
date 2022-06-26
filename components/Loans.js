import React from "react";
import { BsCheck2Square } from "react-icons/bs";
import { RiQuestionMark } from "react-icons/ri";

export default function Loans() {
  const products = [
    {
      name: "Microloan",
      up_to: 1500,
      desc: [
        "Higher Average Installments",
        "Pay back all in one month",
        "Lower Loan Amounts",
        "Faster Turnaround Times",
      ],
      btn: "MICROLOAN",
    },
    {
      name: "Plusload",
      up_to: 10000,
      desc: [
        "Lower Installments",
        "Longer time to pay back",
        "Flexible Loan Terms",
        "Weekend Payouts",
      ],
      btn: "PLUS LOAN",
    },
  ];

  return (
    <div>
      <section className="flex items-start gap-0">
        <div className="p-4 cursor-pointer bg-white">Personal Loan</div>
        <div className="p-4 cursor-pointer bg-gray-200 ">Business Loan</div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-7 bg-white shadow-md">
        <div className="col-span-3 px-7 pt-11 pb-1 space-y-5">
          <div className="space-y-3">
            <div>Select Loan Amount</div>
            <input type="range" color="black" className="w-full bg-red-500" />
            <div className="flex justify-between">
              <div>$25,00</div>
              <div>$15.000,00</div>
            </div>
          </div>
          <div>
            <div>Select Loan Duration</div>
            <input type="range" className="w-full" />
            <div className="flex justify-between">
              <div>1 Month</div>
              <div>36 Months</div>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-2">
            <div>
              <div className="text-gray-400">Fornightly Repyaments of</div>
              <div className="font-medium text-xl">$220 x6</div>
            </div>
            <div className="px-2">
              <button className=" bg-yellow-500 rounded w-full p-3">
                APPLY NOW
              </button>
            </div>
          </div>
        </div>
        {products.map((p, idx1) => (
          <div key={idx1} className="col-span-2 border-l border-gray-100">
            <div className="flex justify-end">
              <div className=" bg-gray-200 p-3">
                <RiQuestionMark />
              </div>
            </div>
            <div className="px-5 pb-2">
              <div className=" text-gray-400 text-sm">PRODUCT</div>
              <div className="font-medium text-2xl">{p.name}</div>
              <div className="flex items-center gap-3 text-xs">
                Up To{" "}
                <span className="text-yellow-400 font-semibold text-2xl my-1">
                  ${p.up_to}
                </span>
              </div>
              {p.desc.map((d, idx2) => (
                <div key={idx2} className="flex gap-2 my-1">
                  <BsCheck2Square />
                  <div>{d}</div>
                </div>
              ))}
              <button className="border border-gray-200 my-5 w-full p-3">
                APPLY FOR {p.btn}
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
