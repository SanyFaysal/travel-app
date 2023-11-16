import React from "react";
import camera from "../../assets/cmra.webp";
import { FaCheck, FaSign } from "react-icons/fa";
export default function WhyChoose() {
  return (
    <div className="mt-20 grid grid-cols-2 gap-16 px-16">
      <div className="bg-yellow-500 pl-8 pb-8">
        <img src={camera} alt="" />
      </div>
      <div className="text-dark">
        <h3 className="text-2xl text-blue-900 font-semibold italic">
          Why Choose Us
        </h3>
        <h2 className="text-4xl font-bold text-slate-900 mt-2">
          Plan Your Trip
          <br /> With Trisog
        </h2>

        <p className="text-lg mt-5 text-slate-600 font-semibold">
          Holisticly optimize proactive strategic theme <br /> areas rather than
          effective manufactured products create.
        </p>

        <div className="grid grid-cols-2 gap-3 my-8">
          <p className="flex items-center  gap-4 font-bold text-lg text-slate-800">
            <FaCheck /> Travel Plan
          </p>
          <p className="flex items-center  gap-4 font-bold text-lg text-slate-800">
            <FaCheck /> Cheap Rates
          </p>
          <p className="flex items-center  gap-4 font-bold text-lg text-slate-800">
            <FaCheck /> Hand Picked Tour
          </p>
          <p className="flex items-center  gap-4 font-bold text-lg text-slate-800">
            <FaCheck /> Private Guide
          </p>
        </div>

        <div>
          <button className="text-lg px-5 py-3 rounded-lg text-slate-800 font-semibold border">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
