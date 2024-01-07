import DashboardLayout from "@/components/Layouts/DashboardLayout";
import PaymentTable from "@/components/PagesComponent/Home/Payment/PaymentTable";
import SalesDetails from "@/components/PagesComponent/Home/SalesDetails/SalesDetails";
import Widget from "@/components/PagesComponent/Home/Widget/Widget";

const Home: React.FC = () => {
  return (
    <DashboardLayout>
      <Widget />
      <SalesDetails />
      <PaymentTable />
    </DashboardLayout>
  );
};

export default Home;
