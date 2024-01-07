import BarChart from "@/components/Barchart/BarChart";
import OrderAndPayment from "./OrderAndPayment";
import Order from "./OrderAndPayment";

const SalesDetails: React.FC = () => {
  return (
    <div className="sale_details_bg">
      <div className="sales_details_barchart_bg">
        <BarChart barChartHeight="380px" showBarChatDetails />
      </div>
      <div className="sale_details_order_and_payment">
        <OrderAndPayment />
      </div>
    </div>
  );
};

export default SalesDetails;
