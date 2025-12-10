import { ArrowDownLeftIcon, ArrowUpRightIcon } from "lucide-react";
import React from "react";

const HistoryTable = () => {
  const data = [
    { description: "Receive Money", data: "07 Jun 2025", trxId: "TRX982374", amount: "+$2,500", status: "Success" },
    { description: "Money Out", data: "07 Jun 2025", trxId: "TRX234875", amount: "-$8,600", status: "Success" },
    { description: "Receive Money", data: "07 Jun 2025", trxId: "TRX987654", amount: "-$6,1400", status: "Success" },
    { description: "Money Out", data: "07 Jun 2025", trxId: "TRX347654", amount: "+$2,500", status: "Success" },
  ];

  return (
    <div className="mt-5 lg:rounded-lg border-3 border-body overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
      
      <table className=" w-full text-left">
        {/* Header */}
        <thead>
          <tr className="bg-body lg:rounded-3xl">
            <th className="p-3 text-title font-semibold text-base whitespace-nowrap">Description</th>
            <th className="p-3 text-title font-semibold text-base whitespace-nowrap">Trx ID</th>
            <th className="p-3 text-title font-semibold text-base whitespace-nowrap">Amount</th>
            <th className="p-3 text-title font-semibold text-base whitespace-nowrap">Status</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={`${index % 2 === 0 ? "bg-basic" : "bg-body"}`}>
              
              {/* Description */}
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

              {/* Trx ID */}
              <td className="p-3 text-text font-medium whitespace-nowrap">{item.trxId}</td>

              {/* Amount */}
              <td className={`p-3 font-semibold whitespace-nowrap ${
                item.amount.startsWith("+") ? "text-primary_light" : "text-red-600"
              }`}>
                {item.amount}
              </td>

              {/* Status Badge */}
              <td className="p-3 whitespace-nowrap">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  item.status === "Success" 
                    ? "bg-green-100 text-primary_light"
                    : item.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}>
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
