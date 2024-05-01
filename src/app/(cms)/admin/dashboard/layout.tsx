import Sidebar from "@/components/cms/Sidebar";
import Navbar from "@/components/cms/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="text-white">
      <div className="flex flex-col p-4 w-56 fixed top-0 left-0 bottom-0 border-r border-[#222227]">
        <Sidebar />
      </div>
      <div className="pl-56 flex flex-col">
        <Navbar />
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
