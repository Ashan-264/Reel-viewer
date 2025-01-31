import React from "react";
import { FaHome, FaPlus, FaUser } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center bg-black text-white w-16 py-4 space-y-6 fixed h-full">
      <button>
        <FaHome size={24} />
      </button>
      <button>
        <FaPlus size={24} />
      </button>
      <button>
        <FaUser size={24} />
      </button>
    </div>
  );
}
