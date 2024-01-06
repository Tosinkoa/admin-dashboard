import DashboardLayout from "@/components/Layouts/DashboardLayout";
import SalesDetails from "@/components/PagesComponent/Home/SalesDetails/SalesDetails";
import Widget from "@/components/PagesComponent/Home/Widget/Widget";

const Home: React.FC = () => {
  return (
    <DashboardLayout>
      <Widget />
      <SalesDetails />
    </DashboardLayout>
  );
};

export default Home;
