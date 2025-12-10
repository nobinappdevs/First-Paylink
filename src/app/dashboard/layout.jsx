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
    <div className="flex min-h-screen justify-between 2xl:gap-x-5">
      <div className="xl:w-[15%] hidden xl:block">
        <div className="fixed h-full w-[15%]  top-0 left-0">
          <Sidebar />
        </div>
      </div>
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-60 bg-white shadow-lg z-50 transition-transform duration-300 xl:hidden 
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Sidebar />
      </div>
      <div className="xl:w-[85%] w-full p-4 lg:pt-10  relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex justify-between xl:hidden mb-4 items-center bg-linear-to-r from-primary to-primary_light w-full py-2 px-2 rounded-md text-white font-roboto "
        >
          <span className="">
            <Menu size={22} className="opacity-90" />
          </span>
          <span className="text-base tracking-wide">Dashboard</span>
        </button>

        {children}
      </div>
    </div>
  );
};

export default Layouts;
