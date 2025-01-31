import React from "react";
import Video from "next-video";
import getStarted from "@/videos/screen-capture (7).mp4.json";

interface VideoCardProps {
  fallbackSrc?: string;
  fallbackPoster?: string;
}

export default function VideoCard({
  fallbackSrc,
  fallbackPoster,
}: VideoCardProps) {
  // Extract video data
  const videoSources = getStarted?.sources || [];
  const videoPoster =
    getStarted?.poster || fallbackPoster || "/images/default-poster.png";

  return (
    <div className="flex justify-center items-center h-screen">
      <Video
        src={getStarted}
        style={{ width: "33.33%", height: "auto" }}
        accentColor="blue"
      />
    </div>
  );
}
