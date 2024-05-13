import React from "react";
import SingleJoboffer from "./_compoenets/singlejoboffer";
import { ithasapplyinjob } from "@/actions/ithasapplyinjob";
import { getJobOfferById } from "@/actions/getjobooferbuid";

const Page = async ({
  params,
}: {
  params: {
    jobId: string;
  };
}) => {
  const ithasapplyedyet = await ithasapplyinjob(params.jobId);
  const job=await getJobOfferById(params.jobId);
  return (
    <div className="mt-32">
      <SingleJoboffer jobId={params.jobId} ithasapplyedyet={ithasapplyedyet!} job={job} />
    </div>
  );
};

export default Page;
