"use client";
import DashboardChart from "./DashboardChart";
import DashboardHomeLeft from "./DashboardHomeLeft";
import SpecialSlider from "./SpecialSlider";
import TransactionHistory from "./TransactionHistory";

const DashboardHome = () => {
  return (
    <div className="2xl:pr-6">
          <DashboardHomeLeft />
          <DashboardChart />
          <TransactionHistory />
      {/* <div className="grid grid-cols-1 2xl:gap-x-8 xl:gap-x-4 gap-2.5 xl:grid-cols-7 2xl:grid-cols-6">
        <div className="xl:col-span-4 2xl:col-span-4 col-span-6">
        </div>
        <div className="xl:col-span-3 2xl:col-span-2 col-span-6">
          <div className="overflow-hidden">
            <SpecialSlider />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default DashboardHome;
