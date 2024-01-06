import BarChart from "./BarChart";
import OrderAndPayment from "./OrderAndPayment";
import Order from "./OrderAndPayment";

const SalesDetails: React.FC = () => {
  return (
    <div className="grid md:grid-cols-5 mt-6 gap-4">
      <div className="col-span-3">
        <BarChart />
      </div>
      <div className="col-span-2  flex flex-col">
        <OrderAndPayment />
      </div>
    </div>
  );
};

export default SalesDetails;
