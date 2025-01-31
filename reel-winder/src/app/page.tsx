import Sidebar from "@/app/components/Sidebar";
import RightSidebar from "@/app/components/RightSidebar";
import VideoCard from "@/app/components/VideoCard";

export default function Page() {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content: Video Feed */}
      <div className="flex-grow overflow-y-scroll">
        <VideoCard />
      </div>

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
}
