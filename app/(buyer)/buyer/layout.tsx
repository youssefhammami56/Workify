import ClientNavbar from "@/app/landingpage/buyernavbar";
import { auth } from "@/auth";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";

const LayoutPage = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <ClientNavbar />
      <div className="h-full">{children}</div>
    </div>
  );
};
export default LayoutPage;
