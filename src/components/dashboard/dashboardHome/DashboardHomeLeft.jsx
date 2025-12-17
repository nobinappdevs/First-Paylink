"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaPlus } from "react-icons/fa";
import Button from "../../Sheared/Button";
import BalanceCard from "./BalanceCard";
import TransactionHistory from "./TransactionHistory";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const DashboardHomeLeft = () => {
  const [showBalance, setShowBalance] = useState(true);
  const balance = "1,997.80 BDT";
  return (
    <div>
      <div className="md:flex justify-between items-start">
        <div className="flex md:justify-normal justify-between items-center gap-x-8 mb-6">
          <div>
            <p className="text-text font-medium font-roboto leading-6 text-base ">
              Total Wallet Balance
            </p>
            <h2 className="text-2xl font-bold text-title leading-8">
              {showBalance ? balance : "******"}
            </h2>
          </div>

          <button
            onClick={() => setShowBalance(!showBalance)}
            className="text-xl text-text bg-basic h-12 cursor-pointer flex items-center justify-center w-12 rounded-full"
          >
            {showBalance ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        <div className="lg:flex  gap-3  hidden">
          <Link href={'/dashboard/payments/create'}>

          <Button size="lg" rightIcon={<FaPlus />}>
           Create Link
          </Button>
          </Link>
                    <Link href={'/dashboard/withdraw'}>

          <Button size="lg" gradient rightIcon={<ArrowUpRight />}>
   Money Out
          </Button>
                    </Link>
        </div>
        <div className="flex gap-x-4 justify-between lg:hidden">
                    <Link href={'/dashboard/payments/create'}>

          <Button size="sm" rightIcon={<FaPlus />}>
          Create Link
          </Button>
                    </Link>
                    <Link href={'/dashboard/withdraw'}>
          <Button size="sm" gradient rightIcon={<ArrowUpRight />}>
        Money Out
          </Button>
                    </Link>
        </div>
      </div>
      <BalanceCard />

    </div>
  );
};

export default DashboardHomeLeft;
