import React, { useState } from "react";
import { useRouter } from "next/router";
import { FcOpenedFolder } from "react-icons/fc";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiMenu4Fill } from "react-icons/ri";
import Link from "next/link";

export default function Header() {
  const { pathname } = useRouter();

  const [openMenus, setOpenMenus] = useState(false);
  const menus = [
    { text: "Home", url: "/" },
    { text: "Loans", url: "/loans" },
    { text: "How it Works", url: "/works" },
    { text: "Costs", url: "/costs" },
    { text: "FAQS", url: "/faqs" },
  ];

  return (
    <div className="sticky z-[100] top-0 w-full flex justify-between items-center bg-white shadow-md px-5 py-3">
      <section className="flex gap-3 items-center">
        <FcOpenedFolder size={30} />
        <div className="text-xl">LoanStart</div>
      </section>
      <section className="hidden md:flex gap-6 items-center">
        {menus.map((m, idx) => (
          <Link key={idx} href={m.url}>
            <a
              className={`${
                pathname === m.url ? "border-b border-yellow-400" : ""
              } hover:border-b-2 border-yellow-300`}
            >
              {m.text}
            </a>
          </Link>
        ))}
        <button className="bg-yellow-500 p-3 rounded ">LOG IN / SIGN</button>
      </section>

      <section className="relative md:hidden inline-block text-left">
        <div onClick={() => setOpenMenus(!openMenus)}>
          <RiMenu4Fill />
        </div>

        {openMenus && (
          <div
            onClick={() => setOpenMenus(false)}
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              <div className="p-3">
                <AiOutlineCloseCircle />{" "}
              </div>

              {menus.map((m, idx) => (
                <Link key={idx} href={m.url}>
                  <a
                    className={`${
                      pathname === m.url ? "border-l border-yellow-400" : ""
                    } text-gray-700 block px-4 py-2 text-sm`}
                    
                    href="#"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    {m.text}
                  </a>
                </Link>
              ))}
              <button className="bg-yellow-500 p-3 rounded w-full ">
                LOG IN / SIGN
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
