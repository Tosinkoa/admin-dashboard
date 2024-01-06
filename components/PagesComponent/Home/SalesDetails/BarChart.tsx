import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import chartDummyData from "./chartDummyData";
import { IoMdRefresh } from "react-icons/io";
import "chart.js/auto";

const BarChart: React.FC = () => {
  return (
    <div className="bg-white rounded-sm p-2 flex flex-col">
      <div className="flex w-full p-2 justify-between">
        <p className="font-semibold">Today: 5, Aug 2018</p>
      </div>
      <div className=" bottom-0 w-full mx-auto relative text-xs text-inherit ">
        <Line
          width={"100%"}
          height={"420px"}
          data={{
            labels: chartDummyData.map((data) => data.month),
            datasets: [
              {
                label: "Sales",
                data: chartDummyData.map((data) => data.sales),
                borderWidth: 0,
                backgroundColor: createGradient("rgba(2, 148, 255, 0.45)"),
                fill: true,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            scales: {
              x: {
                position: "top",
                grid: {
                  color: "#edf0ee",
                },
                ticks: {
                  font: {
                    size: 13,
                  },
                },
              },
              y: {
                grid: {
                  color: "",
                },
                ticks: {
                  font: {
                    size: 10,
                  },
                  display: false,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

const createGradient = (color: string) => {
  if (typeof window !== "undefined") {
    const gradient = document.createElement("canvas").getContext("2d");
    const grad = gradient?.createLinearGradient(0, 0, 0, 420);
    grad?.addColorStop(0, color);
    grad?.addColorStop(1, "rgba(255, 255, 255, 0)");
    return grad;
  }
};

export default BarChart;
