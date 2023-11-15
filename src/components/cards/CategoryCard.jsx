import React from "react";
import { FaNetworkWired, FaTree } from "react-icons/fa";

export default function CategoryCard({ item }) {
  return (
    <div className="bg-white w-full flex flex-col rounded justify-center cols-span-1 px-4 py-3">
      <div className="rounded-full   flex justify-center">
        <item.icon className="text-6xl bg-yellow-400 p-3 rounded-full" />
      </div>
      <h5 className="text-center text-lg font-semibold">{item?.title}</h5>
      <p className="text-center  text-md ">{item?.total} Tours+</p>
    </div>
  );
}
