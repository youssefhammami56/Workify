// import { getAllCommunity } from "@/actions/community/get-all-community";
// import { getAllNotifications } from "@/actions/teacher/get-all-notifications";
// import Sidebar from "@/app/(dashboard)/_components/sidebar";
// import { auth } from "@/auth";

// const LayoutPage = async ({ children }: { children: React.ReactNode }) => {
//   const community = await getAllCommunity();
//   const user = await auth();
//   const isverifiedteacher =
//     user?.user.role == "TEACHER" && user?.user.teacherAccess == true;
//   return (
//     <div className="h-full">
//       <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50 ">
//         <Sidebar community={community} isverifiedteacher={isverifiedteacher} />
//       </div>

//       <div className="md:pl-56 h-full   ">{children}</div>
//     </div>
//   );
// };
// export default LayoutPage;

import SellerNavbar from "@/app/landingpage/sellernavbar";
import { auth } from "@/auth";

const LayoutDashbord = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-[80px]  fixed inset-y-0 w-full z-50">
        <SellerNavbar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        {/* <Sidebar
          community={community}
          isverifiedteacher={isaverifiredteacher}
        /> */}
      </div>

      <main className=" pt-[50px] h-full">{children}</main>
    </div>
  );
};
export default LayoutDashbord;
