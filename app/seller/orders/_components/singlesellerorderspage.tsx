"use client";
import { getOrders } from "@/actions/get-my-orders";
import Link from "next/link";
import React from "react";
import { format } from "date-fns";
import { getSellerOrders } from "@/actions/getsellerorders";
import { Button } from "@/components/ui/button";
import { acceptgigorder } from "@/actions/acceptgigorder";
import { rejectGigOrder } from "@/actions/rejectgigorder";
import { ContractModal } from "../../postuled-jobs/_compoents/contractmodal";
import { useRouter } from "next/navigation";

interface Order {
  orders: Awaited<ReturnType<typeof getSellerOrders>>;
}

function SingleSellerOrderspage({ orders }: Order) {
  const router=useRouter();
  const handelaccept = async (e: string) => {
    await acceptgigorder(e);
  };
  const handelrejectorder = async (e: string) => {
    await rejectGigOrder(e);
    router.refresh();
  };
  return (
    <div className="min-h-[80vh] my-10 mt-0 px-32">
      <h3 className="m-5 text-2xl font-semibold">
        All your Orders as a seller
      </h3>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order By
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Delivery Time
              </th>
              <th scope="col" className="px-6 py-3">
                Order Date
              </th>
              <th scope="col" className="px-6 py-3">
                status
              </th>
              <th scope="col" className="px-6 py-3">
                Send Message
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              return (
                <tr
                  className="bg-white dark:bg-gray-800 hover:bg-gray-50"
                  key={order.id}
                >
                  <th scope="row" className="px-6 py-4 ">
                    {order.buyer.username}
                  </th>
                  <th scope="row" className="px-6 py-4 font-medium">
                    {order.gig.title}
                  </th>
                  <td className="px-6 py-4">{order.gig.category}</td>
                  <td className="px-6 py-4">{order.price}</td>
                  <td className="px-6 py-4">{order.gig.deliveryTime}</td>
                  <td className="px-6 py-4">
                    {format(new Date(order.createdAt), "dd/MM/yyyy")}
                  </td>
                  <th scope="row" className="px-6 py-4 font-medium">
                    {order.isCompleted ? "Accepted" : "Pending"}
                  </th>

                  <td className="px-6 py-4 ">
                    <Link
                      href={`/seller/orders/messages/${order.id}`}
                      className="font-medium text-blue-600  hover:underline"
                    >
                      Send
                    </Link>
                  </td>
                  <td className="px-6 py-4 flex space-x-2 ">
                    <Button
                      variant={"primary"}
                      disabled={order.isCompleted}
                      onClick={() => {
                        handelaccept(order.id);
                      }}

                    >
                      Accept
                    </Button>
                    <Button
                      variant={"destructive"}
                      disabled={order.isCompleted}
                      onClick={() => {
                        handelrejectorder(order.id);
                      }}
                    >
                      Reject
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SingleSellerOrderspage;
