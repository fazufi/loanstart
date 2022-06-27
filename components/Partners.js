import React from "react";

export default function Partners() {
  const images = [
    "bbc.png",
    "icobox.png",
    "accenture.png",
    "goldman.png",
    "asx.png",
  ];
  return (
    <div>
      <section className="flex items-center   h-[1px] w-full ">
        <span className="bg-transparent mx-auto  px-1 font-medium text-xl">Our Partners</span>
      </section>
      <section className="grid grid-cols-5 gap-10 md:gap-20 items-center justify-center bg-gray-200 h-20 md:h-56 md:-mx-24 px-5 md:px-24 ">
        {images.map((i, idx) => (
          <div className="grayscale w-10 md:w-full">
            <img  className="grayscale contrast-50  w-full  " src={i} />
          </div>
        ))}
      </section>
    </div>
  );
}
