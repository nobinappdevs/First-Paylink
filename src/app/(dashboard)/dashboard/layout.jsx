/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useState, useEffect, useRef } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/dashboardHome/Navbar";
import useDashboardGuard from "@/hooks/useDashboardGuard";
import SkeletonLoader from "@/components/Sheared/Skeleton";
import { getUserProfileAPI } from "@/services/apiClient";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Layouts = ({ children }) => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);
  const guardLoading = useDashboardGuard();
  const router = useRouter();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);


  const fetchProfile = async () => {
    try {
      const res = await getUserProfileAPI();
      const user = res?.data?.data?.user;
      if (user?.email_verified === 0) {
        router.replace("/email-verify");
        return;
      }
      setProfileData(user);
    } catch (error) {
      toast.error('Please log in to continue.')
      router.push('/login')
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
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

  if (guardLoading || loading || !profileData) {
    return <SkeletonLoader layout="layout" />;
  }

  return (
    <div className="grid grid-cols-12 min-h-screen ">
      {/* Desktop Sidebar */}
      <div className="xl:col-span-2 relative hidden xl:block bg-basic shadow-[4px_0_6px_-4px_rgba(0,0,0,0.03)] z-50 lg:z-40">
        <div className="sticky top-0 h-screen">
          <Sidebar onLinkClick={() => setOpen(false)} />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-60 bg-white shadow-lg z-50 transition-transform duration-300 xl:hidden 
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Sidebar onLinkClick={() => setOpen(false)} />
      </div>
      <div className="xl:col-span-10 col-span-12 relative">
        <Navbar handleOpen={handleOpen} />
        <div className="flex  flex-col mt-5 items-center justify-center lg:hidden">
          <h4 className="font-bold leading-6 text-secondery text-xl sm:text-2xl">
            Welcome Back
          </h4>
          <h6 className="text-text text-base font-medium leading-4  pt-2">
            Tomas William
          </h6>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layouts;
