"use client";
import { applyinjoboffer } from "@/actions/applay-in-job-offer";
import { getJobOfferById } from "@/actions/getjobooferbuid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import {
  CheckCircleIcon,
  ClockIcon,
  GlobeIcon,
  StarHalfIcon,
  StarIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface JobOffer {
  jobId: string;
  ithasapplyedyet: boolean;
  job: Awaited<ReturnType<typeof getJobOfferById>>;
}

function SingleJoboffer({ jobId, ithasapplyedyet, job }: JobOffer) {
  const router = useRouter();
  const handelApply = async () => {
    await applyinjoboffer(jobId);
    router.refresh();
  };
  return (
    <div className="max-w-3xl mx-auto my-8 p-6 bg-white shadow rounded-lg">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{job?.title!}</h1>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <ClockIcon className="h-4 w-4 mr-1" />
            {format(new Date(job?.createdAt!), "dd MMM yyyy")}
            <GlobeIcon className="h-4 w-4 mx-3" />
            Worldwide
          </div>
          <div className="text-gray-700">
            <p>Hi all,</p>
            <p className="my-2">{job?.description!}</p>
            <Image
              src={job?.imagesrc || "/default-profile.jpg"}
              alt="Picture of job"
              width={500}
              height={500}
            />

            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold">${job?.price!}</div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {job?.expertise?.map((expertise) => (
                <Badge key={expertise} variant="secondary">
                  {expertise}
                </Badge>
              ))}
            </div>
          </div>
          {!ithasapplyedyet ? (
            <>
              <Button
                className="mb-2"
                variant={"outline"}
                onClick={handelApply}
              >
                Apply Now
              </Button>
            </>
          ) : (
            <Badge className="mb-4">You have already applied to this job</Badge>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleJoboffer;
