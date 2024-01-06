import Image from "next/legacy/image";
import { Inter } from "next/font/google";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import MeterIcon from "@/public/assets/svgs/meter-icon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <DashboardLayout>
      <h1>Hello</h1>
    </DashboardLayout>
  );
}
