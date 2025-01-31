import React from "react";
import { FaHome, FaPlus, FaUser, FaCommentDots, FaEye } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center bg-black text-white w-16 py-4 space-y-6 fixed h-full">
      <button className="p-2 rounded-full hover:bg-gray-800">
        <FaHome size={20} />
      </button>
      <button className="p-2 rounded-full hover:bg-gray-800">
        <FaEye size={20} />
      </button>
      <button className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-500">
        <FaPlus size={20} />
      </button>
      <button className="p-2 rounded-full hover:bg-gray-800">
        <FaCommentDots size={20} />
      </button>
      <button className="p-2 rounded-full hover:bg-gray-800">
        <FaUser size={20} />
      </button>
    </div>
  );
}
