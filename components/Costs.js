import React from "react";
import { BsCheck2Square } from "react-icons/bs";

export default function Costs() {
  const qualifiers = [
    "Be Over 18 Years Old",
    "Take Home over $1,400 a Month",
    "Be an Australian Resident",
    "Be Employed or on Crenrelink",
  ];

  const priceHeaders = ["Borrow", "Costs", "Repay"];
  const prices = [
    { b: 500, c: 160, r: 660 },
    { b: 1000, c: 320, r: 1320 },
    { b: 1500, c: 480, r: 1980 },
    { b: 2000, c: 640, r: 2640 },
  ];

  return (
    <div className="space-y-10">
      <section className="flex items-center bg-gray-200 h-[1px] w-full">
        <span className="bg-gray-100 mx-auto px-1">
          Who Can Qualify for OUr Fast Cash Loans?
        </span>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="font-bold text-xl leading-10 ">
          As long as your income; that is earnings and Centrelink income totals
          $1,400 a month or more, that you are an Australian resident and over
          18, that you are likely to qualify for a loan with us.
        </div>
        <div className="space-y-6">
          <div>
            As a responsible lender, how much you will be able to borrow wil be
            based on how much you can affordably repay within the loan term.
          </div>
          <div className="grid grid-cols-2 space-y-2">
            {qualifiers.map((q, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <BsCheck2Square />
                <div> {q}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="border border-gray-300 p-3 space-y-5">
          <div>
            <span className="font-bold">EXAMPLE</span>: A loan of $1,000 for 3
            months has fees and charges totalling $320. Maximum APR of 70.66%
            and total repayments of $1320. The Maximum APR is 70.65%. The
            Comparison Rate, based on loan of $1,000 over 6 months, is 138.37%.
          </div>
          <div>
            <span className="font-bold">WARNING</span>: This comparison rate
            applise only to the example or example given. Different amounts and
            terms will result in different comparison rates.
          </div>
        </div>
        <div className="border border-gray-300">
          <div className="grid grid-cols-3">
            <div className="text-yellow-400 font-semibold border-gray-300 text-center cursor-pointer p-3">
              3 MONTHS
            </div>
            <div className="border-b border-x border-gray-300 text-center cursor-pointer p-3">
              6 MONTHS
            </div>
            <div className="border-b border-gray-300 text-center cursor-pointer p-3">
              12 MONTHS
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="w-full">
                {priceHeaders.map((ph, idx) => (
                  <th key={idx} className="w-1/3">
                    {ph}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {prices.map((p, idx) => (
                <tr key={idx}>
                  <td className="text-center">${p.b}</td>
                  <td className="text-center">${p.c}</td>
                  <td className="text-center">${p.r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
