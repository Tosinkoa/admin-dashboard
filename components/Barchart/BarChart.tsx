import "chart.js/auto";
import { Line } from "react-chartjs-2";
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import chartDummyData from "./chartDummyData";

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
    <div className={`${showBarChatDetails && "barchart_with_detail_border"} barchart_bg`}>
      {showBarChatDetails && (
        <div className="barchart_header_details">
          <p className="barchat_header_date">Today: 5, Aug 2018</p>
          <div className="barchart_header_buttons_bg">
            <div className="barchart_header_date_and_arrow">
              <p>1 Jan - Jun</p>
              <IoIosArrowDown />
            </div>
            <div className="barchart_header_arrow">
              <IoIosArrowBack />
            </div>
            <div className="barchart_header_arrow">
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      )}
      <div className="barchart_main_bg">
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
