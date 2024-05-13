"use server"

import { auth } from "@/auth"
import { db } from "@/lib/db"



export async function getsellerapply()
{
    const user=await auth()
    const userId=user?.user.id
    const gigsrevenue=await db.orders.findMany({
        where:{
            gig:{
                userId:userId
            },
            isCompleted:true
            // isAccepted:true
            
        },
        include:{
            gig:{
                select:{
                    title:true,
                    price:true
                }
            },
            }
    })
    const jobofferrevenue=await db.jobApplication.findMany({
        where:{
            userId:userId,
            status:"accepted"
            
        },
        include:{
            job:{
                select:{
                    title:true,
                    price:true
                }
            }
        }
    })
    console.log("job"+jobofferrevenue)
    const tottalrevnuecountinalltheorders=gigsrevenue.reduce((acc,order)=>acc+order.gig.price,0)
    const tottalrevnuecountinallthejoboffer=jobofferrevenue.reduce((acc,order)=>acc+order.job.price,0)
    const tabofrevenue=[{name:"Gigs",value:tottalrevnuecountinalltheorders},{name:"Job Offers",value:tottalrevnuecountinallthejoboffer}]

    return tabofrevenue
    

}