import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import chartDummyData from "./chartDummyData";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
  IoMdRefresh,
} from "react-icons/io";
import "chart.js/auto";

interface BarChatProp {
  showBarChatDetails: boolean;
  barChartHeight: string;
}
/**
 *
 * @returns @todo remove the border under x ticks
 */

const BarChart: React.FC<BarChatProp> = ({ showBarChatDetails, barChartHeight }) => {
  return (
    <div className="bg-white rounded-sm p-2 flex flex-col">
      {showBarChatDetails && (
        <div className="flex w-full p-2 justify-between items-center">
          <p className="font-semibold md:text-xl text-lg">Today: 5, Aug 2018</p>
          <div className="items-center flex h-10">
            <div className="border whitespace-nowrap cursor-pointer h-full rounded-md md:mr-10 flex items-center space-x-4 p-2">
              <p>1 Jan - Jun</p>
              <IoIosArrowDown />
            </div>
            <div className="h-full mx-2 cursor-pointer w-10 place-content-center border rounded-md flex items-center space-x-4 p-2">
              <IoIosArrowBack />
            </div>
            <div className="h-full mx-2 cursor-pointer w-10 place-content-center border rounded-md flex items-center space-x-4 p-2">
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      )}
      <div className=" bottom-0 w-full mx-auto relative text-xs text-inherit">
        <Line
          width={"100%"}
          height={barChartHeight}
          data={{
            labels: chartDummyData.map((data) => data.month),
            datasets: [
              {
                label: "Sales",
                data: chartDummyData.map((data) => data.sales),
                borderWidth: !showBarChatDetails ? 1 : 0,
                borderColor: !showBarChatDetails ? "#0294FF" : "",
                backgroundColor: showBarChatDetails
                  ? createHighColorGradient("rgba(2, 148, 255, 0.45)")
                  : createLowColorGradient("rgba(2, 148, 255, 0.13)"),
                fill: true,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            scales: {
              x: {
                border: { display: false },
                position: "top",
                grid: {
                  color: "#edf0ee",
                  display: showBarChatDetails ? true : false,
                },
                ticks: {
                  font: { size: 13 },
                  display: showBarChatDetails ? true : false,
                },
              },
              y: {
                border: { display: false },
                grid: { display: false },
                ticks: {
                  font: { size: 10 },
                  display: false,
                },
              },
            },
            elements: { point: { radius: 0 } },
            plugins: {
              legend: { display: false },
            },
          }}
        />
      </div>
    </div>
  );
};

const createHighColorGradient = (color: string) => {
  if (typeof window !== "undefined") {
    const gradient = document.createElement("canvas").getContext("2d");
    const grad = gradient?.createLinearGradient(0, 0, 0, 420);
    grad?.addColorStop(0, color);
    grad?.addColorStop(1, "rgba(255, 255, 255, 0)");
    return grad;
  }
};

const createLowColorGradient = (color: string) => {
  if (typeof window !== "undefined") {
    const gradient = document.createElement("canvas").getContext("2d");
    const grad = gradient?.createLinearGradient(0, 0, 0, 420);
    grad?.addColorStop(0, color);
    grad?.addColorStop(1, "rgba(255, 255, 255, 0)");
    return grad;
  }
};

export default BarChart;
