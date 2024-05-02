import Sidebar from "@/components/cms/Sidebar";
import Navbar from "@/components/cms/Navbar";
import 'react-loading-skeleton/dist/skeleton.css';
import { SkeletonTheme } from "react-loading-skeleton";

export default function DashboardLayout({ children }) {
  return (
    <div className="text-white">
      <div className="flex flex-col p-4 w-56 fixed top-0 left-0 bottom-0 border-r border-[#222227]">
        <Sidebar />
      </div>
      <div className="pl-56 flex flex-col">
        <Navbar />

        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <div className="p-8">{children}</div>
        </SkeletonTheme>
      </div>
    </div >
  );
}
