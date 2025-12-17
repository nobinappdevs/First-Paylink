import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import React from 'react';
import MoneyOutLogTable from './MoneyOutLogTable';
import Pagination from '@/components/Sheared/Pagination';

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
<Pagination />
    </div>
    );
};

export default AllMoneyLogs;