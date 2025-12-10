"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaPlus } from "react-icons/fa";
import Button from "../../Sheared/Button";
import BalanceCard from "./BalanceCard";
import TransactionHistory from "./TransactionHistory";
import { ArrowUpRight } from "lucide-react";

const DashboardHomeLeft = () => {
  const [showBalance, setShowBalance] = useState(true);
  const balance = "$98,000.00";
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
        <div className="lg:flex gap-3  hidden">
          <Button size="lg" rightIcon={<FaPlus />}>
            Add Money
          </Button>
          <Button size="lg" gradient rightIcon={<ArrowUpRight />}>
            Send Money
          </Button>
        </div>
        <div className="flex justify-between lg:hidden">
          <Button size="sm" rightIcon={<FaPlus />}>
            Add Money
          </Button>
          <Button size="sm" gradient rightIcon={<ArrowUpRight />}>
            Send Money
          </Button>
        </div>
      </div>
      <BalanceCard />
      <TransactionHistory />
    </div>
  );
};

export default DashboardHomeLeft;
