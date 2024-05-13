"use server"

import { db } from "@/lib/db"




export async function getJobOfferById(id:string) {
  const job = await db.job.findUnique({
    where: {
      id
    }
  })
  return job
}