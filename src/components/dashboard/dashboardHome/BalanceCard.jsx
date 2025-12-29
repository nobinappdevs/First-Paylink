import { ArrowUpRight, ChevronLeftIcon } from "lucide-react";
import React from "react";

const BalanceCard = ({dashboardData}) => {
  const {collection_invoice, collection_payment, money_out, total_invoice, total_payment_link} = dashboardData
  // const balanceData = [
  //   {
  //     id: 1,
  //     title: "collection payment",
  //     amount: `${collection_payment} BDT`,
  //     color: "#FF5733",
  //     symbol: "$",
  //   },
  //   {
  //     id: 2,
  //     title: "total invoice",
  //     amount: `${collection_invoice} BDT`,
  //     color: "#33A1FF",
  //     symbol: "€",
  //   },
  //       {
  //     id: 3,
  //     title: "Money Out",
  //     amount: `${money_out} BDT`,
  //     color: "#FFC300",
  //     symbol: "₹",
  //   },
  //   {
  //     id: 4,
  //     title: "Total Payment Link",
  //     amount: total_payment_link,
  //     color: "#9B59B6",
  //     symbol: "¥",
  //   },
  //   {
  //     id: 5,
  //     title: "Total Invoice",
  //     amount: total_invoice,
  //     color: "#9B59B6",
  //     symbol: "¥",
  //   },
  //   {
  //     id: 6,
  //     title: "Total Product",
  //     amount: "3",
  //     color: "#9B59B6",
  //     symbol: "¥",
  //   },
  // ];

  const balanceData = [
  {
    id: 1,
    title: "Collection Payment",
    amount: `${collection_payment} BDT`,
    color: "#FF5733",
    symbol: "৳",
  },
  {
    id: 2,
    title: "Total Invoice",
    amount: `${collection_invoice} BDT`,
    color: "#33A1FF",
    symbol: "৳",
  },
  {
    id: 3,
    title: "Money Out",
    amount: `${money_out} BDT`,
    color: "#FFC300",
    symbol: "৳",
  },
  {
    id: 4,
    title: "Total Payment Link",
    amount: `${total_payment_link} BDT`,
    color: "#9B59B6",
    symbol: "৳",
  },
  {
    id: 5,
    title: "Total Invoice",
    amount: `${total_invoice} BDT`,
    color: "#8E44AD",
    symbol: "৳",
  },
  {
    id: 6,
    title: "Total Product",
    amount: "3",
    color: "#2ECC71",
    symbol: "📦",
  },
];

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2  gap-1.5 gap-y-4 lg:mt-0 mt-5 md:gap-4">
      {balanceData.map((item) => (
        <div
          key={item.id}
          className="px-4 pt-4 pb-5 rounded-2xl bg-basic "
        >
          <div className="flex items-center justify-between">
            <div
              className="w-10 h-10 rounded-xl shw flex items-center justify-center text-white text-lg font-bold"
              style={{
                backgroundColor: item.color,
                boxShadow: `0px 0px 15px 0px ${item.color}90`,
              }}
            >
              {item.symbol}
            </div>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${item.color}20` }}
            >
              <ArrowUpRight className="w-5 h-5" style={{ color: item.color }} />
            </div>
          </div>
          <h6 className="mt-2.5 mb-1 text-sm  pb-1 md:text-base  md:py-2 md:text-text/80  md:font-bold text-text font-semibold">
            {item.title}
          </h6>

          <h4 className="  text-secondery/80 md:text-xl text-base leading-6 font-bold">
            {item.amount}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default BalanceCard;
