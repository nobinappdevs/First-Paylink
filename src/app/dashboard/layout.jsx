"use client";
import { useState, useEffect, useRef } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { Menu } from "lucide-react";

const Layouts = ({ children }) => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handler(e) {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="grid grid-cols-12 min-h-screen gap-x-6">

      {/* Desktop Sidebar */}
      <div className="xl:col-span-2 hidden xl:block bg-basic shadow-sm">
        <div className="fixed top-0 left-0 h-full w-[16.5%]">
          <Sidebar />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-60 bg-white shadow-lg z-50 transition-transform duration-300 xl:hidden 
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="xl:col-span-10 col-span-12 p-4 lg:pt-10 relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex justify-between xl:hidden mb-4 items-center bg-linear-to-r from-primary to-primary_light w-full py-2 px-2 rounded-md text-white font-roboto "
        >
          <Menu size={22} className="opacity-90" />
          <span className="text-base tracking-wide">Dashboard</span>
        </button>

        {children}
      </div>
    </div>
  );
};

export default Layouts;
