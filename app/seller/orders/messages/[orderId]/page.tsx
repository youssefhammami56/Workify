import { getLoggedUser } from "@/actions/get-logged-user";
import { getMessageInOrder } from "@/actions/getmessageinorder";
import MessageContainer from "@/app/(buyer)/buyer/orders/_components/MessageContainer";
import React from "react";

const Page = async ({
  params,
}: {
  params: {
    orderId: string;
  };
}) => {
  console.log(params.orderId);
  const messages = await getMessageInOrder(params.orderId);
  const userInfo = await getLoggedUser();

  return (
    <div className="mt-32">
      <MessageContainer
        messages={messages}
        userInfo={userInfo}
        orderId={params.orderId}
      />
    </div>
  );
};

export default Page;
