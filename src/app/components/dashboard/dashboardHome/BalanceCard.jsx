import { ArrowUpRight, ChevronLeftIcon } from "lucide-react";
import React from "react";

const BalanceCard = () => {
  const balanceData = [
    {
      id: 1,
      title: "United States Dollar",
      amount: "$910,000.00",
      color: "#FF5733",
      symbol: "$",
    },
    {
      id: 2,
      title: "Euro",
      amount: "€910,000.00",
      color: "#33A1FF",
      symbol: "€",
    },
    {
      id: 3,
      title: "British Pound",
      amount: "£910,000.00",
      color: "#28A745",
      symbol: "£",
    },
    {
      id: 4,
      title: "Indian Rupee",
      amount: "₹910,000.00",
      color: "#FFC300",
      symbol: "₹",
    },
    {
      id: 5,
      title: "Yen",
      amount: "¥910,000.00",
      color: "#9B59B6",
      symbol: "¥",
    },
  ];

  
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:grid-cols-5 gap-1.5 lg:mt-0 mt-5 md:gap-4">

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
      <h2 className="mt-4 text-sm font-roboto pb-2 text-text font-semibold">{item.title}</h2>

      <p className=" font-montserrat text-title text-base leading-6 font-bold" >
        {item.amount}
      </p>
    </div>
  ))}

</div>

  );
};

export default BalanceCard;


