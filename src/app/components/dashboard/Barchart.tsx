"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { div } from "framer-motion/client";

import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface BarChartProps {
  labels: string[];
  values: number[];
}

export default function BarChart({ labels, values }: BarChartProps) {
  const data = {
    labels,
    datasets: [
      {
        label: "Users",
        data: values,
        backgroundColor: "rgba(102, 171, 237, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
    },
  };

  return <Bar data={data} options={options} />;
}
