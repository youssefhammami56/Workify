import React from "react";
import DonutsChart from "./donuts_chart";
import { getcategdistinct } from "@/actions/getcategforseller";

const FetchDonutsData = async () => {
  const categ = await getcategdistinct();
  console.log(categ);

  return (
    <>
      <DonutsChart level={categ}  />
    </>
  );
};

export default FetchDonutsData;
