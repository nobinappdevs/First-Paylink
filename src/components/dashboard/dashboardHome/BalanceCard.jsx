import { ArrowUpRight, ChevronLeftIcon } from "lucide-react";
import React from "react";

const BalanceCard = () => {
  const balanceData = [
    {
      id: 1,
      title: "Collect Payment With Link",
      amount: "2,442.80 BDT",
      color: "#FF5733",
      symbol: "$",
    },
    {
      id: 2,
      title: "Collect Payment With Invoice",
      amount: "3,486.54 BDT",
      color: "#33A1FF",
      symbol: "€",
    },
    {
      id: 3,
      title: "Collect Payment Product",
      amount: "0.00 BDT",
      color: "#28A745",
      symbol: "£",
    },
    {
      id: 4,
      title: "Money Out",
      amount: "1,000.00 BDT",
      color: "#FFC300",
      symbol: "₹",
    },
    {
      id: 5,
      title: "Total Payment Link",
      amount: "4",
      color: "#9B59B6",
      symbol: "¥",
    },
    {
      id: 6,
      title: "Total Invoice",
      amount: "2",
      color: "#9B59B6",
      symbol: "¥",
    },
    {
      id: 7,
      title: "Total Product",
      amount: "3",
      color: "#9B59B6",
      symbol: "¥",
    },
    {
      id: 8,
      title: "Total Product Link",
      amount: "4",
      color: "#9B59B6",
      symbol: "¥",
    },
  ];

  
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2  2xl:grid-cols-4 gap-1.5 gap-y-4 lg:mt-0 mt-5 md:gap-4">

  {balanceData.map((item) => (
    <div
      key={item.id}
      className="px-4 pt-4 pb-5 rounded-2xl bg-basic shadow-sm"
    >
      <div className="flex items-center justify-between">
        <div
          className="w-10 h-10 rounded-xl shw flex items-center justify-center text-white text-lg font-bold"
          style={{ backgroundColor: item.color, boxShadow: `0px 0px 15px 0px ${item.color}90` }}
        >
          {item.symbol}
        </div>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${item.color}20` }}  
        >
          <ArrowUpRight
            className="w-5 h-5"
            style={{ color: item.color }}
          />
        </div>

      </div>
      <h2 className="mt-2.5 mb-1 text-sm font-roboto pb-1 md:text-base  md:py-2 md:text-text/80  md:font-bold text-text font-semibold">{item.title}</h2>

      <p className=" font-montserrat text-title/80 md:text-xl text-base leading-6 font-bold" >
        {item.amount}
      </p>
    </div>
  ))}

</div>

  );
};

export default BalanceCard;


