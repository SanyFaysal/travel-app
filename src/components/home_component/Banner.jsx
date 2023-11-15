import { Carousel, DatePicker, Input } from "antd";
import { IoIosSend } from "react-icons/io";
import { FiActivity } from "react-icons/fi";
import { GoPeople } from "react-icons/go";

import React from "react";
import image1 from "../../assets/image1.webp";
import image2 from "../../assets/image2.jpeg";
import { FaSearch } from "react-icons/fa";

export default function Banner() {
  return (
    <div className="bg-blue-900 px-16 py-10 grid grid-cols-4 items-center">
      <div className="col-span-2">
        <h3 className="text-yellow-500 text-3xl font-bold">Explore The</h3>
        <h1 className="text-white  text-5xl my-1 font-bold">
          Travel &
          <br />
          Adventures
        </h1>
        <p className="text-xl text-white">
          Find awesome hotel, tour, car and activities in London
        </p>
      </div>
      <div className="col-span-2  ">
        <div>
          {/* <Carousel easing="linear" autoplay dots={false} fade> */}
          <div>
            <div className="flex gap-4 justify-end">
              <img src={image1} alt="" className="h-[260px] w-[220px]" />
              <img
                src={image2}
                alt=""
                className="h-[260px] w-[220px] mt-[100px]"
              />
            </div>
          </div>
          {/* </Carousel> */}
        </div>
      </div>

      <div className="col-span-4 bg-white rounded-lg p-5 grid grid-cols-9 gap-4 justify-between">
        <div className="w-full col-span-2">
          <label htmlFor="" className="text-sm">
            Destination
          </label>
          <Input
            size="large"
            placeholder="where you want to go"
            className=""
            prefix={<IoIosSend />}
          />
        </div>
        <div className="w-full col-span-2">
          <label htmlFor="">Destination</label>
          <Input
            size="large"
            placeholder="Type"
            className=""
            prefix={<FiActivity />}
          />
        </div>
        <div className="w-full col-span-2">
          <label htmlFor="">Destination</label>
          <Input
            size="large"
            placeholder="Guest"
            className=""
            type="number"
            prefix={<GoPeople />}
          />
        </div>
        <div className="w-full col-span-2">
          <label htmlFor="">Destination</label>
          <DatePicker size="large" placeholder="Date" className="w-full" />
        </div>
        <div className="w-full col-span-1 flex justify-end">
          <button className=" bg-yellow-500 w-full px-5 py-2 rounded-lg text-white mt-6">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
