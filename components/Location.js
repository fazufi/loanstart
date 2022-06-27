import React from "react";

export default function Location() {
  const locations = [
    {
      title: "Melbourne",
      lists: ["level 25", "97 Prie Street", "Adelaide SA 5000", "2000"],
    },
    {
      title: "Sydney",
      lists: ["level 25", "97 Prie Street", "Adelaide SA 5000", "2000"],
    },
    {
      title: "Adelayde",
      lists: ["level 25", "97 Prie Street", "Adelaide SA 5000", "2000"],
    },
    {
      title: "Perth",
      lists: ["level 25", "97 Prie Street", "Adelaide SA 5000", "2000"],
    },
    {
      title: "Brisbane",
      lists: ["level 25", "97 Prie Street", "Adelaide SA 5000", "2000"],
    },
    {
      title: "Camberra",
      lists: ["level 25", "97 Prie Street", "Adelaide SA 5000", "2000"],
    },
  ];
  return (
    <div className="space-y-10">
      <section className="flex items-center bg-gray-300 h-[1px] w-full ">
        <span className="bg-gray-100 mx-auto px-1 font-medium text-xl">Other Locations</span>
      </section>
      <section>
        <div className="grid grid-cols-3 md:grid-cols-6">
          {locations.map((l, idx1) => (
            <div key={idx1}>
              <div className="font-semibold mb-3">{l.title} </div>
              {l.lists.map((ll, idx2) => (
                <div key={idx2}>{ll}</div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="text-center">
        <button className="bg-yellow-500  shadow-md shadow-yellow-600 py-3 px-10 rounded">Appy online here</button>
      </section>
    </div>
  );
}
