import React from "react";
import { VscTasklist, VscFolderActive } from "react-icons/vsc";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Works() {
  const howWorkLists = [
    {
      icon: <VscTasklist size={70} className="mx-auto text-yellow-400" />,
      label: "Choose Loan Parameters",
      text: "length of the loan term",
    },
    {
      icon: (
        <IoDocumentTextOutline size={70} className="mx-auto text-yellow-400" />
      ),
      label: "Submit Your Application",
      text: "Submit your application online and wait for comfirmation",
    },
    {
      icon: <VscFolderActive size={70} className="mx-auto text-yellow-400" />,
      label: "Receive Your Payments",
      text: "Withing 24 hours you will receive approval and have access to your money",
    },
  ];

  return (
    <div>
      <section className="flex items-center bg-gray-200 h-[1px] w-full">
        <span className="bg-gray-100 mx-auto px-1">How it works?</span>
      </section>
      <section className="grid grid-cols-3 mt-16 ">
        {howWorkLists.map((h, idx) => (
          <div key={idx} className="space-y-6">
            {h.icon}
            <div className="text-center text-xl">{h.label} </div>
            <div className="text-center">{h.text} </div>
          </div>
        ))}
      </section>
      <section className="flex justify-center mt-10">
        <button className="bg-yellow-500 py-3 px-16 rounded">APPLY NOW</button>
      </section>
    </div>
  );
}
