import React from "react";
import { FaSearch, FaUpload, FaMoon } from "react-icons/fa";

export default function RightSidebar() {
  return (
    <div className="flex flex-col items-center bg-black text-white w-16 py-4 space-y-6 fixed h-full right-0">
      {/* Circular Progress Indicator (Loading Animation Placeholder) */}
      <div className="w-10 h-10 rounded-full border-2 border-purple-500 flex items-center justify-center">
        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
      </div>

      {/* Search Button */}
      <div className="flex flex-col items-center space-y-1">
        <button className="p-2 rounded-full hover:bg-gray-800">
          <FaSearch size={20} />
        </button>
        <span className="text-sm text-gray-400">Search</span>
      </div>

      {/* Upload Video Button */}
      <div className="flex flex-col items-center space-y-1">
        <button className="p-2 rounded-full hover:bg-gray-800">
          <FaUpload size={20} />
        </button>
        <span className="text-sm text-gray-400">Upload</span>
      </div>

      {/* Dark Mode Toggle (Placeholder for future implementation) */}
      <div className="flex flex-col items-center space-y-1">
        <button className="p-2 rounded-full hover:bg-gray-800">
          <FaMoon size={20} />
        </button>
        <span className="text-sm text-gray-400">Dark</span>
      </div>
    </div>
  );
}
