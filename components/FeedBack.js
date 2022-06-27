import React from "react";
import { AiFillStar } from "react-icons/ai";

export default function FeedBack() {
  return (
    <div className="space-y-14">
      <section className="flex items-center bg-gray-300 h-[1px] w-full ">
        <span className="bg-gray-100 mx-auto px-1 font-medium text-xl">Our FeedBack</span>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-7 text-gray-600">
        {Array(4)
          .fill()
          .map((undefined, idx1) => (
            <div
              key={idx1}
              className="border border-gray-300 flex flex-col justify-between p-5 space-y-5"
            >
              <div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    {Array(5)
                      .fill()
                      .map((undefined, idx2) => (
                        <AiFillStar key={idx2} className="text-yellow-400" />
                      ))}
                  </div>
                  <div className="text-gray-300">2 days ago</div>
                </div>
                <div className="font-bold text-xl">Good Service</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing</div>
              </div>
              <div className="italic ">Simon P. Web</div>
            </div>
          ))}
      </section>
      <section className="text-center">
        Rated <span className="text-yellow-400">9.4</span> out of{" "}
        <span className="text-yellow-400">10</span> based on{" "}
        <span className="font-semibold">562 Reviews</span> Read more here
      </section>
    </div>
  );
}
