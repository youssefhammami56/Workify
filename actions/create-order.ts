import { Gigs } from './../node_modules/.prisma/client/index.d';
"use server"

import { auth } from "@/auth";
import { db } from "@/lib/db";



export async function createOrder(gigId:string){
    const user=await auth();
    const gig=await db.gigs.findUnique({
        where:{
            id:gigId
        }
    })
    if(!gig){
        throw new Error("Gig not found")
    }

    await db.orders.create({
        data:{
            gigId:gigId,
            buyerId:user?.user.id!,
            sellerId:gig.userId,
            price:gig.price

        }

    })
}
/* id            String       @id @default(cuid())
  
  createdAt     DateTime  @default(now())
  buyer         User      @relation(fields: [buyerId], references: [id])
  buyerId       String
  // paymentIntent String    @unique
  isCompleted   Boolean   @default(false)
  gig           Gigs      @relation(fields: [gigId], references: [id])
  gigId         String
  price         Int
  messages      Message[]*/