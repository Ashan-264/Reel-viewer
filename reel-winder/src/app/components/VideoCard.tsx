"use client";

import React, { useState } from "react";
import Video from "next-video";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";

// Import video assets
import video1 from "/videos/video1.mp4.json";
import video2 from "/videos/video2.mp4.json";
import video3 from "/videos/video3.mp4.json";
import video4 from "/videos/video4.mp4.json";
import video5 from "/videos/video5.mp4.json";
import video6 from "/videos/video6.mp4.json";
import video7 from "/videos/video7.mp4.json";
import video8 from "/videos/video8.mp4.json";
import getStarted from "/videos/get-started.mp4.json";

// Array of video JSON files
const videos = [
  getStarted,
  video1,
  video2,
  video3,
  video4,
  video5,
  video6,
  video7,
  video8,
];

const VideoCard: React.FC = () => {
  const [error, setError] = useState("");
  const [interactions, setInteractions] = useState(
    videos.map(() => ({ likes: 0, comments: 0, shares: 0, liked: false }))
  );

  // Function to toggle like
  const handleLike = (index: number) => {
    setInteractions((prev) =>
      prev.map((interaction, i) =>
        i === index
          ? {
              ...interaction,
              likes: interaction.liked
                ? interaction.likes - 1
                : interaction.likes + 1,
              liked: !interaction.liked, // Toggle like state
            }
          : interaction
      )
    );
  };

  // Function to update comments and shares count
  const handleInteraction = (index: number, type: "comments" | "shares") => {
    setInteractions((prev) =>
      prev.map((interaction, i) =>
        i === index
          ? { ...interaction, [type]: interaction[type] + 1 }
          : interaction
      )
    );
  };

  return (
    <div className="h-screen overflow-y-auto space-y-6 p-4">
      {videos.map((videoPath, index) => (
        <div key={index} className="relative flex justify-center">
          {/* Video Player */}
          <Video
            src={videoPath}
            style={{ width: "33.33%", height: "auto" }}
            onError={() => setError("Failed to load video.")}
          />

          {/* Interaction Buttons (Floating on the right side of each video) */}
          <div className="absolute right-4 bottom-10 flex flex-col items-center space-y-4">
            {/* Like Button */}
            <button
              className="p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80 transition"
              onClick={() => handleLike(index)}
            >
              <FaHeart
                size={24}
                color={interactions[index].liked ? "red" : "white"}
              />
            </button>
            <span className="text-white text-sm">
              {interactions[index].likes}
            </span>

            {/* Comment Button */}
            <button
              className="p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-80 transition"
              onClick={() => handleInteraction(index, "comments")}
            >
              <FaComment size={24} />
            </button>
            <span className="text-white text-sm">
              {interactions[index].comments}
            </span>

            {/* Share Button */}
            <button
              className="p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-80 transition"
              onClick={() => handleInteraction(index, "shares")}
            >
              <FaShare size={24} />
            </button>
            <span className="text-white text-sm">
              {interactions[index].shares}
            </span>
          </div>
        </div>
      ))}
      {error && <div className="text-red-600">{error}</div>}
    </div>
  );
};

export default VideoCard;
