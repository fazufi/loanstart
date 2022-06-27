import React from "react";
import { BsArrowDown } from "react-icons/bs";
import { Disclosure } from "@headlessui/react";

export default function Faqs() {
  const faqs = [
    { q: "How do Cash Loans work?", a: "yes" },
    { q: "Can I get a cash loan without a credit check?", a: "yes" },
    { q: "Can I get instant approval for may cash loan?", a: "yes" },
    {
      q: "Can I get a cash loan deposited into a prepaid debit card?",
      a: "yes",
    },
  ];
  const imageLists = [
    { name: "img1.jpeg", text: "Outdo Yourself Story: Brighten Your World" },
    { name: "img2.jpeg", text: "When To Give Your Child Pocket Money" },
    { name: "img3.jpg", text: "5 Tips For Cheap Apartment Renos" },
    { name: "img4.jpg", text: "Does Spending MOney Make Us Feel Good?" },
  ];
  return (
    <div className="space-y-10">
      <section className="flex items-center bg-gray-200 h-[1px] w-full">
        <span className="bg-gray-100 mx-auto px-1 font-medium text-xl">{"FAQ's & Blog"}</span>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-5 gap-7">
        <div className="col-span-3 space-y-4">
          {faqs.map((f, idx) => (
            <div key={idx} className="border border-gray-300 p-3 ">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium ">
                      <span>{f.q}</span>
                      <BsArrowDown
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-yellow-400`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      {f.a}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-4">
          {imageLists.map((i, idx) => (
            <div key={idx} className="w-full h-full relative">
              <img src={i.name} alt="" className="w-full h-full absolute" />
              <div className="w-full h-full flex items-end p-4  ">
                <div className="text-white font-bold opacity-95">{i.text} </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
