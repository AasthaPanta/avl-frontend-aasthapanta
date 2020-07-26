import React from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

const ProblemChart = () => {
  const startDate = new Date(2020, 0, 1);
  const labels = [];

  for (let i = 0; i < 6; i++) {
    const date = moment(startDate).add(i, "days").format("DD-MM");
    labels.push(date.toString());
  }

  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 100, 0);
    return {
      backgroundColor: gradient,
      labels,
      datasets: [
        {
          label: "Product sold (millions)",
          data: [20, 40, 60, 80, 45, 12],
          borderWidth: 2,
          fill: false,
          borderColor: "#2ec4b6",
        },
      ],
    };
  };
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default ProblemChart;
