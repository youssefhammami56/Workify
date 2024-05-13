import { auth } from "@/auth";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import SellerNavbar from "../landingpage/sellernavbar";

const LayoutPage = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <SellerNavbar />
      <div className="h-full">{children}</div>
    </div>
  );
};
export default LayoutPage;
