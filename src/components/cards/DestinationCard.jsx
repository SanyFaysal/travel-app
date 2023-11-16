import React from "react";

export default function DestinationCard({ item }) {
  return (
    <div className={`mt-${item?.marginTop} `}>
      <img src={item?.photo} alt="" />
      <h3 className="text-lg font-bold text-slate-900">{item?.title}</h3>
      <h5 className="text-sm font-semibold">{item?.total} Travelers</h5>
    </div>
  );
}
