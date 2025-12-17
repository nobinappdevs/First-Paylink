"use client";
import DashboardChart from "./DashboardChart";
import DashboardHomeLeft from "./DashboardHomeLeft";
import TransactionHistory from "./TransactionHistory";

const DashboardHome = () => {
  return (
    <div className="xl:p-8 p-4">
          <DashboardHomeLeft />
          <DashboardChart />
          <TransactionHistory />
    </div>
  );
};

export default DashboardHome;
