import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import HistoryTable from "./HistoryTable";
import Button from "@/components/Sheared/Button";
import Link from "next/link";

const TransactionHistory = () => {
  return (
    <>
      <div className="lg:p-6 py-3.5 md:p-4 p-1 bg-basic rounded-sm lg:rounded-[20px] shadow-sm w-full mt-8">
        <div className="md:flex justify-between items-center mb-4">
          <h2 className="text-xl  font-montserrat text-title lg:pb-0 pb-2  font-bold">
            Transaction History
          </h2>

          <div className="md:flex items-center gap-3 md:space-y-0 space-y-2.5">
            <div className="">
              <Link href={'/dashboard/transactions'}>
              <Button gradient className="md:w-full  md:flex items-center justify-center ">
                View all
              </Button>
              </Link>
            </div>
          </div>
        </div>
        <HistoryTable />
      </div>
    </>
  );
};

export default TransactionHistory;
