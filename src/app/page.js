"use client";

import Swal from "sweetalert2";
import Link from "next/link";
import { dashboardDataAPI, logOutAPI } from "@/services/apiClient";

export default function Home() {
  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Logout",
    });

    if (!result.isConfirmed) return;

    try {
      await logOutAPI();

      localStorage.removeItem("authToken");
      sessionStorage.removeItem("authToken");
      localStorage.removeItem("user");
      sessionStorage.removeItem("user");

      Swal.fire("Logged Out", "Successfully logged out", "success");

      window.location.href = "/login";
    } catch (error) {
      Swal.fire("Error", "Logout failed", "error");
    }
  };
  const handleDashboard = async () => {
    try {
      const res = await dashboardDataAPI();
      console.log("Dashboard Data:", res.data);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded-2xl text-center w-[350px]">
        <h3 className="text-2xl font-semibold mb-3">Welcome to Pay-Link</h3>
        <p className="text-gray-600 mb-6">This is your first application.</p>

        <Link
          href="/dashboard"
          className="px-6 py-2 rounded-lg block bg-blue-600 text-white font-medium  transition"
        >
          Go to Dashboard
        </Link>
        <br />
        <Link
          href="/login"
          className="px-6 py-2 block rounded-lg bg-primary text-white font-medium  transition"
        >
          Login Page
        </Link>
        <button className="cursor-pointer" onClick={handleLogout}>Logout</button>
        <br />
        <button className="cursor-pointer" onClick={handleDashboard}>Dashboard</button>
      </div>

    </div>
  );
}
