import { sleep } from "@/lib/utils";
import React from "react";

const page = async () => {
  return (
    <div className="min-h-[600px]">
      HomePage
      <div className="h-[500px] bg-neutral-700"></div>
      <div className="h-[500px] bg-neutral-700"></div>
      <div className="h-[500px] bg-neutral-700"></div>
      <div className="h-[500px] bg-neutral-700"></div>
    </div>
  );
};

export default page;
