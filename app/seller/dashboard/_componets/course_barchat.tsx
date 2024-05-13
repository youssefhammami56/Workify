"use client";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as Chartsjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getsellerapply } from "@/actions/getsellerapplyt";

Chartsjs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface CourseBarchatProps {
  courses: Awaited<ReturnType<typeof getsellerapply>>;
}

function CourseBarchat({ courses }: CourseBarchatProps) {
  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: any[];
  }>({
    labels: courses.map((c: any) => c.name),
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Jobs",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Revenue",
        },
      },
    },
  });

  useEffect(() => {
    setChartOptions({
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Jobs",
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Revenue",
          },
        },
      },
    });
    setChartData({
      labels: courses.map((c: any) => c.name),
      datasets: [
        {
          label: "Revenue",
          data: courses.map((c: any) => c.value),
          borderColor: "rgba(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.4)",
        },
      ],
    });
  }, [courses]);

  return (
    <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Revenue By Job</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full md:col-span-2 relative lg:h-[50vh] h-[30vh] m-auto p-4 border rounded-lg bg-white">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </CardContent>
    </Card>
  );
}

export default CourseBarchat;
/*<Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Top 7 courses for you by sales</CardTitle>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <Link href="#">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <CourseChart />
            </CardContent>
          </Card>
          <div className="w-full md:col-span-2 relative lg:h-[50vh] h-[30vh] m-auto p-4 border rounded-lg bg-white">
        <Bar data={chartData} options={chartOptions} />
      </div>
          */
