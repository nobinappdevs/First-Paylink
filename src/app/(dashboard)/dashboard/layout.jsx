"use client";
import { useState, useEffect, useRef } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/dashboardHome/Navbar";

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

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="grid grid-cols-12 min-h-screen ">
      {/* Desktop Sidebar */}
      <div className="xl:col-span-2 relative hidden xl:block bg-basic shadow-lg z-50">
        <div className="sticky top-0 h-screen">
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
      <div className="xl:col-span-10 col-span-12 relative">
        <Navbar handleOpen={handleOpen} />
              <div className="flex  flex-col mt-5 items-center justify-center lg:hidden">
        <h2 className="font-bold leading-6 text-title font-montserrat text-xl sm:text-2xl">
          Welcome Back
        </h2>
        <h3 className="text-text text-base font-medium leading-4 font-roboto pt-2">
          Tomas William
        </h3>
      </div>

        <div className="xl:p-8 p-4">{children}</div>
      </div>
    </div>
  );
};

export default Layouts;
