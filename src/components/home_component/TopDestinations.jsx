import React from "react";
import DestinationCard from "../cards/DestinationCard";
import photo from "../../assets/cmra.webp";
const items = [
  { title: "United Kingdom", total: 15000, marginTop: 0, photo: photo },
  { title: "United Kingdom", total: 15000, marginTop: 5, photo: photo },
  { title: "United Kingdom", total: 15000, marginTop: 0, photo: photo },
  { title: "United Kingdom", total: 15000, marginTop: 5, photo: photo },
  { title: "United Kingdom", total: 15000, marginTop: 0, photo: photo },
];
export default function TopDestinations() {
  return (
    <div className="px-16 mt-28">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-3xl text-slate-900 font-semibold italic">
            Destinations
          </h3>
          <h1 className="text-5xl text-slate-900 font-bold">
            Top Destinations
          </h1>
        </div>
        <p className="font-semibold">See All</p>
      </div>
      <div className="grid grid-cols-5 gap-6 mt-10">
        {items.map((item) => (
          <DestinationCard item={item} />
        ))}
      </div>
    </div>
  );
}
