import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import React from 'react';
import MoneyOutLogTable from './MoneyOutLogTable';

const AllMoneyLogs = () => {
    const moneyOutLogs = [
  {
    type: "Money Out",
    bank: "Starling Bank",
    status: "Pending",
    amountBDT: "1,000.00 BDT",
    amountGBP: "7.24 GBP",
    timeDate: "04 Dec 2025, 11:35:35 AM",
    transactionId: "WD86320910",
    conversionAmount: "7.39 GBP",
    willGet: "7.24 GBP",
  },
  {
    type: "Money Out",
    bank: "Revolut",
    status: "Completed",
    amountBDT: "2,500.00 BDT",
    amountGBP: "18.10 GBP",
    timeDate: "05 Dec 2025, 10:15:20 AM",
    transactionId: "WD86320911",
    conversionAmount: "18.50 GBP",
    willGet: "18.10 GBP",
  },
  {
    type: "Money Out",
    bank: "Wise",
    status: "Completed",
    amountBDT: "5,000.00 BDT",
    amountGBP: "36.40 GBP",
    timeDate: "06 Dec 2025, 03:45:10 PM",
    transactionId: "WD86320912",
    conversionAmount: "36.90 GBP",
    willGet: "36.40 GBP",
  },
  {
    type: "Money Out",
    bank: "HSBC UK",
    status: "Failed",
    amountBDT: "1,800.00 BDT",
    amountGBP: "13.05 GBP",
    timeDate: "07 Dec 2025, 09:20:55 AM",
    transactionId: "WD86320913",
    conversionAmount: "13.40 GBP",
    willGet: "0.00 GBP",
  },
];
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
            className="w-full pl-10 pr-4 rounded-xl border border-gray-300 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-text/80 focus:border-transparent transition-all"
          />
        </div>
      </div>
      {/* tible */}
      <MoneyOutLogTable moneyOutLogs={moneyOutLogs}/>
{/* Pagination Section */}
      <div className="flex items-center justify-center gap-2 mt-8 pb-4">
        {/* Previous Button */}
        <button className="flex items-center cursor-pointer justify-center px-4 py-2 text-sm font-medium rounded-xl border border-gray-200 bg-white text-gray-600 transition-all duration-200 hover:border-seconbg-secondery hover:text-seconbg-secondery hover:shadow-md hover:shadow-seconbg-secondery disabled:opacity-50 disabled:cursor-not-allowed group">
          <ChevronLeft
            size={18}
            className="mr-1 transition-transform group-hover:-translate-x-0.5"
          />
          Prev
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-1.5 px-2 py-1 bg-gray-50/50 rounded-2xl border border-gray-100 shadow-inner">
          {/* Active Page */}
          <button className="h-10 w-10 cursor-pointerflex items-center justify-center text-sm font-bold rounded-xl bg-secondery text-white shadow-lg shadow-seconbg-secondery transform transition-transform active:scale-95">
            1
          </button>

          <button className="h-10 w-10 cursor-pointer flex items-center justify-center text-sm font-semibold rounded-xl border border-transparent text-gray-600 hover:bg-white hover:border-gray-200 hover:text-seconbg-secondery hover:shadow-sm transition-all">
            2
          </button>

          <button className="h-10 w-10 cursor-pointer flex items-center justify-center text-sm font-semibold rounded-xl border border-transparent text-gray-600 hover:bg-white hover:border-gray-200 hover:text-seconbg-secondery hover:shadow-sm transition-all">
            3
          </button>

          <span className="px-2 text-gray-400 font-bold">...</span>

          <button className="h-10 w-10 cursor-pointer flex items-center justify-center text-sm font-semibold rounded-xl border border-transparent text-gray-600 hover:bg-white hover:border-gray-200 hover:text-seconbg-secondery hover:shadow-sm transition-all">
            10
          </button>
        </div>

        {/* Next Button */}
        <button className="flex items-center justify-center cursor-pointer px-4 py-2 text-sm font-medium rounded-xl border border-gray-200 bg-white text-gray-700 transition-all duration-200 hover:border-seconbg-secondery hover:text-seconbg-secondery hover:shadow-md hover:shadow-seconbg-secondery group">
          Next
          <ChevronRight
            size={18}
            className="ml-1  transition-transform group-hover:translate-x-0.5"
          />
        </button>
      </div>
    </div>
    );
};

export default AllMoneyLogs;