"use client";
import { getallfrelencer } from "@/actions/admin/getallfrelencer";
import { togglestatus } from "@/actions/admin/togglestatus";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface Frelencers {
  frelencers: Awaited<ReturnType<typeof getallfrelencer>>;
}

function SingleFrelencer({ frelencers }: Frelencers) {
  const router = useRouter();

  const togglestatuse = async (id: string) => {
    await togglestatus(id);
    router.refresh();
  };
  return (
    <div className="min-h-[80vh] my-10 mt-0 px-32">
      <h3 className="m-5 text-2xl font-semibold">All Workify users
      </h3>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>

              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                created at
              </th>
              <th scope="col" className="px-6 py-3">
                status
              </th>
              <th scope="col" className="px-6 py-3">
                role
              </th>
              <th scope="col" className="px-6 py-3">
                actions
              </th>
            </tr>
          </thead>
          <tbody>
            {frelencers?.map((order) => {
              return (
                <tr
                  className="bg-white dark:bg-gray-800 hover:bg-gray-50"
                  key={order.username}
                >
                  <th scope="row" className="px-6 py-4 ">
                    {order.username}
                  </th>
                  <th scope="row" className="px-6 py-4 ">
                    {order.email}
                  </th>

                  <td className="px-6 py-4">
                    {format(new Date(order.createdAt!), "dd/MM/yyyy")}
                  </td>
                  <td className="px-6 py-4">
                    {order.isActive ? (
                      <Badge variant="secondary">Active</Badge>
                    ) : (
                      <Badge variant="destructive">Inactive</Badge>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {order.role === "FREELANCER" ? (
                      <Badge variant="secondary">FREELANCER</Badge>
                    ) : (
                      <Badge variant="default">CLIENT</Badge>
                    )}
                  </td>

                  <td className="px-6 py-4 ">
                    {order.isActive ? (
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => togglestatuse(order.id)}
                      >
                        Deactivate
                      </Button>
                    ) : (
                      <Button
                        variant="primary"
                        size={"sm"}
                        onClick={() => togglestatuse(order.id)}
                      >
                        Activate
                      </Button>
                    )}
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

export default SingleFrelencer;
