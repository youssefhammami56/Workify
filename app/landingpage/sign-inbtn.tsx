"use client";

import { getuserrole } from "@/actions/getuserrole";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

interface SignInBtnProps {
  role: Awaited<ReturnType<typeof getuserrole>>;
}

function SignInBtn({ role }: SignInBtnProps) {
  
  const router = useRouter();
  const handelclick = async () => {
   
    if (!role.role) {
      router.push("/sign-in");
    } else
    if (role.role === "CLIENT") {
      router.push("/buyer/my-job-offers");
    } else if (role.role === "FREELANCER") {
      router.push("/seller/dashboard");
    }
    else if(role.role==="ADMIN")
      {
        router.push("/admin/frelencers")
      }
    {
      router.push("/admin/frelencers")
    }
  };
  return (
    <>
      <Button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        onClick={handelclick}
      >
        Join
      </Button>
    </>
  );
}

export default SignInBtn;
