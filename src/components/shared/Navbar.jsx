import React from "react";
import { AiOutlineLinkedin, AiOutlineShoppingCart } from "react-icons/ai";
import {
  FaBars,
  FaGoogle,
  FaLinkedin,
  FaLinkedinIn,
  FaPinterest,
  FaSearch,
  FaTwitter,
  FaUser,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="  font-semibold text-md bg-slate-100 sticky top-0 z-50 text-sm">
      {/* info nav */}
      <div className="flex py-2 justify-between text-slate-500 px-16">
        <div className="flex items-center gap-3 ">
          <p>019444515414</p>
          <p className="h-3 w-[2px]  bg-slate-500"></p>
          <p>019444515414</p>
        </div>
        <div className="flex gap-3 items-center ">
          <span>
            <FaTwitter />
          </span>
          <span>
            <FaLinkedinIn />
          </span>
          <span>
            <FaGoogle />
          </span>
          <span>
            <FaPinterest />
          </span>
          <p className="h-3 w-[1px]  bg-slate-600"></p>
          <select name="" className="border-0 bg-slate-50" id="">
            <option value="">ERU</option>
            <option value="">AUS</option>
            <option value="">USA</option>
            <option value="">BAN</option>
            <option value="">UAE</option>
            <option value="">IND</option>
            <option value="">PAK</option>
          </select>
        </div>
      </div>

      {/* nav routes */}
      <div className="flex justify-between bg-white py-2 text-slate-700 px-16">
        <div className="flex justify-between items-center gap-16">
          <p className="text-xl font-bold">
            {" "}
            <span className="text-red-500">Travel</span>
            <span className="text-slate-700">Agency</span>
          </p>
          <ul className="flex gap-5">
            <li>home</li>
            <li>About</li>
            <li>Tours</li>
            <li>Destination</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          <span>
            <FaSearch />
          </span>
          <span className="flex items-center">Login</span>
          <span className="flex items-center">Signup</span>
        </div>
      </div>
    </nav>
  );
}
