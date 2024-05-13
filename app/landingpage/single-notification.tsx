"use client";

import React from "react";
import { formatDistance } from "date-fns";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { getAllNotifications } from "@/actions/getallnotifications";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { markNotificationAsRead } from "@/actions/markNotificationAsread";

interface SingleNotificationsProps {
  notifcation: Awaited<ReturnType<typeof getAllNotifications>>[0];
}

export default function SingleNotifications({
  notifcation,
}: SingleNotificationsProps) {
  const [wichCheck, setWichCheck] = React.useState(false);
  const router = useRouter();

  const handelmakeread = async (id: string) => {
    setWichCheck(true);
     await markNotificationAsRead(id);
  };

  const handelOnclick = (message: string) => {
    // message.split(" ")[2] === "purchased" &&
    // router.push(`/teacher/courses`);
    // message.split(" ")[2] === "completed" &&
    // router.push(`/teacher/courses`);
    // message.split(" ")[3] === "work" && alert("You student submit the work");
    // router.push(`/teacher/check`);
    // message.split(" ")[3] === "your" &&
    // router.push(`/course/${notifcation?.courseId}/chapter/${notifcation?.chapterId}`)
    // alert(message);
  };

  return (
    <div>
      <div
        onClick={() => {
          handelOnclick(notifcation?.message);
          // router.push(`/teacher/check/${notifcation?.studentNotif.id}`);
        }}
        className="cursor-pointer"
      >
        <div className="flex py-3  hover:bg-gray-100 dark:hover:bg-gray-700  border-b border-gray-300 dark:border-gray-700  transition-colors duration-200 ease-in-out">
          <div className="flex-shrink-0 mt-3">
            <Avatar className="h-10 w-10 ">
              <AvatarImage
                className="rounded-full"
                src={notifcation?.user?.profileImage || ""} // i want to do the creation time - current time
                alt={notifcation?.user?.profileImage || ""}
              />
              <AvatarFallback className="uppercase">
                {notifcation?.user?.username![0]}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="w-full ps-3">
            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
              <span className="font-semibold text-gray-900 dark:text-white">
                {notifcation?.message}
              </span>
            </div>
            <div className="flex justify-between items-center ">
              <div className="text-xs text-blue-600 dark:text-blue-500 ">
                {/* i want to do the creation time - current time */}
                {formatDistance(new Date(notifcation?.createdAt!), new Date(), {
                  addSuffix: true,
                })}
              </div>
              <div>
                {notifcation?.isRead && (
                  <div className="flex gap-x-2">
                    <Check className="w-5 h-5 text-green-600 mr-6" />
                  </div>
                )}
                {!notifcation?.isRead ? (
                  <>
                    <p
                      onClick={() => {
                        handelmakeread(notifcation?.id);
                      }}
                      className="text-xs text-gray-500 dark:text-gray-400 mr-2 cursor-pointer"
                    >
                      <div>
                        {wichCheck ? (
                          <Check className="w-5 h-5 text-green-600 mr-6" />
                        ) : (
                          "Mark as read"
                        )}
                      </div>
                    </p>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
