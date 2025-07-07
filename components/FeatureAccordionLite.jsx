"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FeatureAccordionLite({ title, description }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left"
      >
        <p className="text-black font-medium">{title}</p>
        <span className="text-neonBlue text-sm ml-2">
          {open ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      {open && (
        <p className="text-sm text-gray-400 mt-2 ml-2">{description}</p>
      )}
    </div>
  );
} 