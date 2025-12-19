import { Search } from "lucide-react";
import React from "react";
import MoneyOutLogTable from "./MoneyOutLogTable";
import Pagination from "@/components/Sheared/Pagination";
import InputField from "@/components/ui/InputField";

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
    <div className=" bg-basic rounded-sm lg:rounded-lg shadow-sm w-full ">
      {/* Search */}
      <div className="p-4 border-b border-slate-100 flex  justify-between items-center gap-3">
        <div className="">
          <h4 className="text-xl  text-secondery font-bold">Transaction Log</h4>
        </div>
        <InputField icon={Search} placeholder="Search products..." name={Search} />
      </div>
      {/* tible */}
      <MoneyOutLogTable moneyOutLogs={moneyOutLogs} />
      {/* Pagination Section */}
      <Pagination />
    </div>
  );
};

export default AllMoneyLogs;
