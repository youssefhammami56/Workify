"use client";
import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as Chartsjs, ArcElement } from "chart.js";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getcategdistinct } from "@/actions/getcategforseller";

Chartsjs.register(ArcElement);

interface Props {
  level: Awaited<ReturnType<typeof getcategdistinct>>;
}

function DonutsChart({ level }: Props) {
  const [userData, setUserData] = useState(false);
  const data = {
    labels: level?.map((l) => l.name),
    datasets: [
      {
        label: userData ? "User Data" : "Category",
        data: level?.map((l) => l.count),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Job Applications</CardTitle>
        <CardDescription>
          this chart shows you job applications distribution category
        </CardDescription>
      </CardHeader>

      <div className="h-[30vh] flex justify-center">
        <Doughnut data={data} />
      </div>
    </Card>
  );
}

export default DonutsChart;
