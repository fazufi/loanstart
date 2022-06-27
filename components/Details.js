import React from "react";
import { AiFillQuestionCircle, AiOutlineCalendar } from "react-icons/ai";
import { BsBarChartLine } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbLayoutList } from "react-icons/tb";

export default function Details() {
  const personals = [
    {
      icon: <RiMoneyDollarCircleLine className="text-gray-300" />,
      text: "Loan Amounts $1500-$15,000",
    },
    {
      icon: <AiOutlineCalendar className="text-gray-300" />,
      text: "TermsL 1 Month - 36 Months (Inquire for more)",
    },
    {
      icon: <TbLayoutList className="text-gray-300" />,
      text: "Establishment fee: from 5% up to 20%",
    },
    {
      icon: <BsBarChartLine className="text-gray-300" />,
      text: `Monthly fee: 4% ${(
        <span className="text-yellow-400">
          <AiFillQuestionCircle />{" "}
        </span>
      )}`,
    },
  ];
  return (
    <div className="space-y-10">
      <section className="flex items-center bg-gray-300 h-[1px] w-full ">
        <span className="bg-gray-100 mx-auto px-1 font-medium text-xl">Loan Details</span>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-5 gap-7">
        <div className="col-span-2 border border-gray-200 p-7 space-y-3">
          <div className="font-semibold text-xl">Small Personal Loans</div>
          {personals.map((p, idx) => (
            <div key={idx} className="flex items-center gap-5 ">
              <div>{p.icon} </div>
              <div className="text-sm">{p.text} </div>
            </div>
          ))}
        </div>
        <div className="col-span-3 border border-gray-200 p-7 space-y-5">
          <div className="font-semibold text-xl">Example</div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-3">
            {Array(8)
              .fill()
              .map((undefined, idx) => (
                <div className="flex justify-between">
                  <div key={idx}>Lorem Ipsum</div>
                  <div className="font-semibold">$500</div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
