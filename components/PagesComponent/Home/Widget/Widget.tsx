import NumberFormatter from "@/utils/NumberFormatter";
import React from "react";

const Widget: React.FC = () => {
  return (
    <div className="items-center gap-4 grid md:grid-cols-2 lg:grid-cols-4">
      {Array(4)
        .fill("")
        .map((_, index) => (
          <div key={index} className="flex gap-x-5 bg-white p-5 rounded">
            <div className="space-y-3">
              <p>Daily Transaction Value</p>
              <p className="text-2xl">₦{NumberFormatter(4000000)}</p>
            </div>
            <div>
              <p>Chart</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Widget;
