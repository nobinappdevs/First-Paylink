import { Search } from "lucide-react";
import React from "react";
import HistoryTable from "../dashboardHome/HistoryTable";

const Transections = () => {
  return (
    <div className="lg:p-6 py-3.5 md:p-4 p-1 bg-basic rounded-sm lg:rounded-[20px] shadow-md w-full ">
      {/* Search */}
      <div className="p-4 border-b border-slate-100 flex  justify-between items-center gap-3">
        <div className="">
          <h2 className="text-xl font-montserrat text-secondery font-bold">
            Transaction Log
          </h2>
        </div>
        <div className="relative flex-1 max-w-sm">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by title..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
          />
        </div>
      </div>
      {/* tible */}
             <HistoryTable />
    </div>
  );
};

export default Transections;
