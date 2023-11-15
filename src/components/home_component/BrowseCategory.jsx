import React from "react";
import {
  FaBaseballBall,
  FaCar,
  FaCity,
  FaStrava,
  FaTree,
} from "react-icons/fa";
import CategoryCard from "../cards/CategoryCard";

const items = [
  { title: "City Tours", total: 18, icon: FaCity },
  { title: "City Tours", total: 18, icon: FaTree },
  { title: "City Tours", total: 18, icon: FaCar },
  { title: "City Tours", total: 18, icon: FaBaseballBall },
  { title: "City Tours", total: 18, icon: FaBaseballBall },
  { title: "City Tours", total: 18, icon: FaBaseballBall },
];
export default function BrowseCategory() {
  return (
    <div className="px-16 py-8 bg-slate-100 ">
      <h3 className="text-blue-900 italic text-2xl text-center font-semibold">
        Browse By Category
      </h3>
      <h1 className="text-slate-800 font-bold text-4xl text-center">
        Pick A Tour Type
      </h1>
      <div className="grid grid-cols-6 gap-5 justify-items-center mt-8">
        {items?.map((item, i) => (
          <CategoryCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
