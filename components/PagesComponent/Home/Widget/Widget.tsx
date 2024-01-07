import NumberFormatter from "@/utils/NumberFormatter";
import React from "react";
import BarChart from "@/components/Barchart/BarChart";

const Widget: React.FC = () => {
  return (
    <div className="widget_bg">
      <div className="widget_sec_bg">
        {/* This can also be a component and pass each data */}
        {Array(4)
          .fill("")
          .map((_, index) => (
            <div key={index} className="widget_for_each_card">
              <div className="widget_details_bg">
                <p className="text-lg">Daily Transaction Value</p>
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
