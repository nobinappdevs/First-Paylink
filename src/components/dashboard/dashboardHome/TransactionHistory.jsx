import React from "react";
import HistoryTable from "./HistoryTable";
import Button from "@/components/ui/Button";
import Link from "next/link";

const TransactionHistory = () => {
  return (
    <>
      <div className="lg:p-6 py-3.5 md:p-4 p-1 bg-basic rounded-sm lg:rounded-[18px] w-full mt-8">
        <div className="md:flex justify-between items-center mb-4">
          <h4 className="text-xl md:text-left text-center text-secondery lg:pb-0 pb-2  font-bold">
            Transaction History
          </h4>

          <div className="sm:flex items-center gap-3 md:space-y-0 space-y-2.5">
            <div className="">
              <Link href={"/dashboard/transactions"}>
                <Button  className="w-full  flex items-center justify-center px-8! py-2.5! ">
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
