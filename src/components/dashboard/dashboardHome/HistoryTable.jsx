import { ArrowDownLeftIcon, ArrowUpRightIcon } from "lucide-react";
import React from "react";

const HistoryTable = () => {
  const data = [
    {
      description: "Money Out Starling Bank",
      data: "04 Dec 2025, 11:35:35 AM",
      trxId: "WD86320910",
      amount: "1,000.00 BDT",
      status: "Success",
    },
    {
      description: "Money Out US Bank",
      data: "27 Aug 2025, 01:02:40 PM",
      trxId: "WD64998703",
      amount: "200.00 BDT",
      status: "Pending",
    },
    {
      description: "Add Balance via (PAY-LINK)",
      data: "26 Aug 2025, 04:57:21 PM",
      trxId: "PL-29493047",
      amount: "20.00 USD",
      status: "Success",
    },
    {
      description: "Money Out",
      data: "26 Aug 2025, 04:57:21 PM",
      trxId: "TRX347654",
      amount: "40.00 USD",
      status: "Pending",
    },
  ];

  return (
    <div className="mt-5 lg:rounded-lg border-3 border-body overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
      <table className=" w-full text-left">
        <thead>
          <tr className="bg-body lg:rounded-3xl">
            <th className="p-3 text-title font-semibold text-base whitespace-nowrap">
              Description
            </th>
            <th className="p-3 text-title font-semibold text-base whitespace-nowrap">
              Trx ID
            </th>
            <th className="p-3 text-title font-semibold text-base whitespace-nowrap">
              Amount
            </th>
            <th className="p-3 text-title font-semibold text-right text-base whitespace-nowrap">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-basic" : "bg-body"}`}
            >
              <td className="p-3 flex items-center gap-2.5 whitespace-nowrap">
                <div className="w-[42px] h-[42px] bg-black/10 rounded-full flex items-center justify-center">
                  {item.description === "Money Out" ? (
                    <ArrowUpRightIcon className="w-6 h-6 text-black/50" />
                  ) : (
                    <ArrowDownLeftIcon className="w-6 h-6 text-black/50" />
                  )}
                </div>

                <div>
                  <h3 className="font-medium text-base">{item.description}</h3>
                  <h4 className="text-xs font-medium text-text">{item.data}</h4>
                </div>
              </td>
              <td className="p-3 text-text font-medium whitespace-nowrap">
                {item.trxId}
              </td>
              <td
                className={`p-3 font-semibold whitespace-nowrap ${
                  item.amount.startsWith("+")
                    ? "text-primary_light"
                    : "text-red-600"
                }`}
              >
                {item.amount}
              </td>
              <td className="p-3 whitespace-nowrap text-right">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border
      ${
        item.status === "Success"
          ? "bg-emerald-50 text-emerald-700 border-emerald-100"
          : item.status === "Pending"
          ? "bg-yellow-50 text-yellow-700 border-yellow-100"
          : "bg-red-50 text-red-700 border-red-100"
      }
    `}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full
        ${
          item.status === "Success"
            ? "bg-emerald-500"
            : item.status === "Pending"
            ? "bg-yellow-500"
            : "bg-red-500"
        }
      `}
                  />
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
