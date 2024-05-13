import React from "react";
import CourseBarchat from "./course_barchat";
import { getsellerapply } from "@/actions/getsellerapplyt";

const CourseChart = async () => {
  const coursedata = await getsellerapply();
  console.log(coursedata[0].name);

  return (
    <>
      <CourseBarchat courses={coursedata} />
    </>
  );
};

export default CourseChart;
