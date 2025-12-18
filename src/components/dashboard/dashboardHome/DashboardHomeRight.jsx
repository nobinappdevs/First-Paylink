"use client";
import Button from "../../ui/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import SpecialSlider from "./SpecialSlider";
import VirtualCardSlider from "./VirtualCardSlider";

export default function DashboardHomeRight() {
  const [showBalance, setShowBalance] = useState(true);
  const balance = "$98,000.00";

  return (
    // <div className="overflow-hidden">
    //   <SpecialSlider />
    <div className=" bg-white rounded-2xl shadow py-3">
      <VirtualCardSlider />

      <div className="md:flex justify-between md:px-4 px-2 ">
        <div className="flex items-center gap-x-8 mb-4">
          <div>
            <h6 >
              Total Wallet Balance
            </h6>
            <h2 className="text-2xl font-bold text-secondery leading-8">
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
        <div>
          <Button size="md">Card Top Up</Button>
        </div>
      </div>
    </div>
    // </div>
  );
}
