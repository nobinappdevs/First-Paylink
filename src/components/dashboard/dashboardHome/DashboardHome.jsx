"use client";
import { dashboardDataAPI } from "@/services/apiClient";
import DashboardChart from "./DashboardChart";
import DashboardHomeLeft from "./DashboardHomeLeft";
import TransactionHistory from "./TransactionHistory";
import { useEffect, useState } from "react";

const DashboardHome = () => {
  const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async ()=>{
      try {
        const res = await dashboardDataAPI();
        setDashboardData(res.data.data);
      } catch (error) {
          console.error(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchDashboardData();
  }, [])
  

  return (
    <div className="xl:p-8 p-4">
          <DashboardHomeLeft dashboardData={dashboardData} />
          <DashboardChart dashboardData={dashboardData} />
          <TransactionHistory loading={loading} dashboardData={dashboardData} />
    </div>
  );
};

export default DashboardHome;
