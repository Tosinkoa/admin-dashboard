import BarChart from "@/components/Barchart/BarChart";
import OrderAndPayment from "./OrderAndPayment";
import Order from "./OrderAndPayment";

const SalesDetails: React.FC = () => {
  return (
    <div className="grid md:grid-cols-5 mt-6 gap-4">
      <div className="md:col-span-3">
        <BarChart barChartHeight="380px" showBarChatDetails />
      </div>
      <div className="md:col-span-2  flex flex-col h-full w-full">
        <OrderAndPayment />
      </div>
    </div>
  );
};

export default SalesDetails;
