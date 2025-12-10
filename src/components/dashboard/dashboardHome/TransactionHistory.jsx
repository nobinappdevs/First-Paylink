import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import HistoryTable from "./HistoryTable";

const TransactionHistory = () => {
  return (
    <>
      <div className="lg:p-6 py-3.5 md:p-4 p-1 bg-basic rounded-sm lg:rounded-[20px] shadow-md w-full mt-8">
        <div className="md:flex justify-between items-center mb-4">
          <h2 className="text-xl  font-montserrat text-title lg:pb-0 pb-2  font-bold">
            Transaction History
          </h2>

          <div className="md:flex items-center gap-3 md:space-y-0 space-y-2.5">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2  text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10  placeholder:font-roboto rounded-lg  w-full placeholder:text-text placeholder:text-sm pr-3 py-2 border-black/20 border text-sm focus:ring-primary focus:border-primary"
              />
            </div>

            <div className="relative">
              <FaFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <select className="pl-10 pr-6 py-2  w-full font-roboto text-text rounded-lg border-black/20 border text-sm appearance-none bg-white focus:ring-primary focus:border-primary">
                <option value="">Filter</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>

              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                ▼
              </span>
            </div>
          </div>
        </div>
        <HistoryTable />
      </div>
    </>
  );
};

export default TransactionHistory;
