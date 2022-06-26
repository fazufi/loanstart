import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillFolderOpen } from "react-icons/ai";
import {
  GrFacebookOption,
  GrTwitter,
  GrInstagram,
  GrGithub,
} from "react-icons/gr";

export default function Footer() {
  const footerLinks = {
    searches: [
      "Apply now",
      "Costs",
      "How Dows it Work?",
      "Testimonilas",
      "Get Cashed Up",
    ],
    products: [
      "Cash Loans",
      "Fast Loans",
      "Micro Loans",
      "Online Loans",
      "Personal Loans",
    ],
    help: ["FAQs", "Contract Us", "Security", "Feedback &", "Complaints"],
    legal: [
      "Responsible",
      "Lending",
      "Privacy Policy",
      "Credit Guide",
      "Financial Hardship",
    ],
    loanstart: ["About Us", "Affiliates", "Blog", "Camera", "Support"],
  };
  const footerLinkTitles = Object.keys(footerLinks);
  const accountLinks = [
    { icon: <GrFacebookOption />, url: "" },
    { icon: <GrTwitter />, url: "" },
    { icon: <GrInstagram />, url: "" },
    { icon: <FaLinkedinIn />, url: "" },
    { icon: <GrGithub />, url: "" },
  ];

  return (
    <div>
      <section className="grid grid-cols-5 gap-0 md:gap-7 text-xs md:text-base">
        {footerLinkTitles.map((flt, idx1) => (
          <div key={idx1} className="space-y-3">
            <div className="uppercase font-semibold"> {flt}</div>
            {footerLinks[flt].map((f, idx2) => (
              <div key={idx2}>{f} </div>
            ))}
          </div>
        ))}
      </section>
      <section className="flex items-center justify-center gap-7 bg-gray-200 h-[1px] w-full my-14">
        {accountLinks.map((a, idx) => (
          <span
            key={idx}
            className="bg-white border border-gray-600 rounded-full p-1 text-center cursor-pointer"
          >
            {a.icon}
          </span>
        ))}
      </section>
      <section className="grid grid-cols-2 gap-7 mt-7">
        <div className="bg-gray-200 p-4">
          With our fast cash loans(up to $2,000), the minimum loan term is 10
          weeks or 3 months, depending on your payment frequency. The maximum
          loan term is 12{" "}
        </div>
        <div className="bg-gray-200 p-4">
          Take Longer to repay your small loan and get more money - the best of
          both worlds. Getting a larger cash loan has never been easier. Apply
          for a personal loan with us now!
        </div>
      </section>
      <hr className="my-7" />
      <section className="flex justify-between items-center">
        <div className="text-[10px] md:text-sm">
          Loanstart Australia Pty Ltd. Australan Credit Licence number: 409512
          Tel: 1300 433 772
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <AiFillFolderOpen size={30} />
          <div className="text-xl">LoanStart</div>
        </div>
      </section>
    </div>
  );
}
