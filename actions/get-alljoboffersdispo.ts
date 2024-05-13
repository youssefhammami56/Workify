"use server"

import { db } from "@/lib/db"



export async function getalljoboffersdispo() {
  
    const jobs=await db.job.findMany({
        where:{
            isCompleted:false
            
        },
        include:{
           createdBy :true
        }

    })
   
    
    return jobs
}