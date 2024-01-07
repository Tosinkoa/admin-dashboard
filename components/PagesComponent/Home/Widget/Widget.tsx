import NumberFormatter from "@/utils/NumberFormatter";
import React from "react";
import BarChart from "@/components/Barchart/BarChart";

const Widget: React.FC = () => {
  return (
    <div className="overflow-x-auto pb-4 w-full">
      <div className="items-center gap-4 grid lg:grid-cols-2 2xl:grid-cols-4">
        {/* This can also be a component and pass each data */}
        {Array(4)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="justify-between flex gap-x-5 bg-white p-5 rounded items-center"
            >
              <div className="space-y-3">
                <p>Daily Transaction Value</p>
                <p className="text-2xl">₦{NumberFormatter(4000000)}</p>
              </div>
              <BarChart barChartHeight="80px" showBarChatDetails={false} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Widget;
