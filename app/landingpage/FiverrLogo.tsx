"use client";

import Image from "next/image";
import React from "react";

function FiverrLogo({ fillColor = "#3487EA" }) {
  return (
    <Image src="/blue.png" alt="fiverr logo" width={100} height={100} />
  );
}

export default FiverrLogo;
