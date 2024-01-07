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
    <div className="order_and_payment_bg">
      <div className="order_and_payment_order_bg">
        <h4 className="order_and_payment_title">Orders</h4>
        <Line
          percent={reconcilledOrderPercentage}
          strokeWidth={1}
          strokeColor="#27AE60"
          trailWidth={1}
          trailColor="#FDC203"
        />
        <div>
          <span>Pending Orders:</span>{" "}
          <span className="order_and_payment_pending_order">{pendingOrders}</span>
        </div>
        <div>
          <span>Reconcilled Orders:</span>{" "}
          <span className="order_and_payment_reconcilled">{reconcilledOrder}</span>
        </div>
        <div>
          <span>Total Orders:</span>{" "}
          <span className="order_and_payment_total">{totalOrders}</span>
        </div>
      </div>
      <div className="order_and_payment_order_bg">
        <h4 className="order_and_payment_title">Payments</h4>
        <Line
          percent={reconcilledOrderPercentage}
          strokeWidth={1}
          strokeColor="#27AE60"
          trailWidth={1}
          trailColor="#FDC203"
        />
        <div>
          <span>Pending Orders:</span>{" "}
          <span className="order_and_payment_pending_order">{pendingOrders}</span>
        </div>
        <div>
          <span>Reconcilled Orders:</span>{" "}
          <span className="order_and_payment_reconcilled">{reconcilledOrder}</span>
        </div>
        <div>
          <span>Total Orders:</span>{" "}
          <span className="order_and_payment_total">{totalOrders}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderAndPayment;
