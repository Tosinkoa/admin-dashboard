import React from "react";
import { Line } from "rc-progress";

const OrderAndPayment: React.FC = () => {
  // Simulating fecthing real data
  const totalOrders = 100;
  const pendingOrders = 20;
  const reconcilledOrder = totalOrders - pendingOrders;

  // A refresh button can also be added in this component to refresh data and calculate percentage again
  // Calculate the percentage of reconcilled order
  const reconcilledOrderPercentage = ((totalOrders - pendingOrders) / totalOrders) * 100;

  return (
    <div className="flex flex-col h-full space-y-4 text-base md:text-lg">
      <div className="gap-y-4 flex flex-col bg-white p-5 rounded-sm h-full">
        <h4 className="font-bold text-lg">Orders</h4>
        <Line
          percent={reconcilledOrderPercentage}
          strokeWidth={1}
          strokeColor="#27AE60"
          trailWidth={1}
          trailColor="#FDC203"
        />
        <div>
          <span>Pending Orders:</span>{" "}
          <span className="font-bold text-[#EBC315]">{pendingOrders}</span>
        </div>
        <div>
          <span>Reconcilled Orders:</span>{" "}
          <span className="font-bold text-[#27AE60]">{reconcilledOrder}</span>
        </div>
        <div>
          <span>Total Orders:</span>{" "}
          <span className="font-bold text-[#1860EC]">{totalOrders}</span>
        </div>
      </div>
      <div className="gap-y-4 flex flex-col bg-white p-5 rounded-sm h-full">
        <h4 className="font-semibold">Payments</h4>
        <Line
          percent={reconcilledOrderPercentage}
          strokeWidth={1}
          strokeColor="#27AE60"
          trailWidth={1}
          trailColor="#FDC203"
        />
        <div>
          <span>Pending Orders:</span>{" "}
          <span className="font-bold text-[#EBC315]">{pendingOrders}</span>
        </div>
        <div>
          <span>Reconcilled Orders:</span>{" "}
          <span className="font-bold text-[#27AE60]">{reconcilledOrder}</span>
        </div>
        <div>
          <span>Total Orders:</span>{" "}
          <span className="font-bold text-[#1860EC]">{totalOrders}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderAndPayment;
