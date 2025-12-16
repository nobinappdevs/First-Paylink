
import { Banknote, Calendar, ChevronRight } from "lucide-react";

const MoneyOutLogTable = ({moneyOutLogs}) => {
    return (
      <div className="relative overflow-x-auto p-4">
        <table className="w-full text-left text-sm border-separate border-spacing-0 border border-gray-100 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-50/80 font-montserrat  text-xs uppercase tracking-wider text-text">
              <th className="px-6 py-4 font-bold border-b border-gray-100">
                Transaction Details
              </th>
              <th className="px-6 py-4 font-bold border-b border-gray-100">
                Bank Info
              </th>
              <th className="px-6 py-4 font-bold text-center border-b border-gray-100">
                Status
              </th>
              <th className="px-6 py-4 font-bold text-right border-b border-gray-100">
                Amount (BDT)
              </th>
              <th className="px-6 py-4 font-bold text-right border-b border-gray-100">
                Net Amount (GBP)
              </th>
              <th className="px-6 py-4 font-bold text-right border-b border-gray-100">
                Settlement
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {moneyOutLogs.map((item, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-basic" : "bg-body"}`}
              >
                {/* Transaction Details */}
                <td className="px-6 py-5 border-r border-gray-50 last:border-r-0">
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-text">
                      {item.transactionId}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                      <Calendar size={12} />
                      {item.timeDate}
                    </div>
                  </div>
                </td>

                {/* Bank Info */}
                <td className="px-6 py-5 border-r border-gray-50 last:border-r-0">
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50 text-gray-400 group-hover:bg-white group-hover:text-blue-500 shadow-sm border border-gray-100 transition-colors">
                      <Banknote size={18} />
                    </div>
                    <span className="font-semibold text-text">{item.bank}</span>
                  </div>
                </td>

                {/* Status */}
                <td className="px-6 py-5 text-center border-r border-gray-50 last:border-r-0">
                  <div className="flex justify-center">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ring-1 ring-inset ${
                        item.status === "Pending"
                          ? "bg-amber-50 ring-amber-200/50 text-amber-700"
                          : item.status === "Failed"
                          ? "bg-red-50 ring-red-200/50 text-red-700"
                          : "bg-blue-50 ring-blue-200/50 text-blue-700"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full animate-pulse ${
                          item.status === "Pending"
                            ? "bg-amber-500"
                            : item.status === "Failed"
                            ? "bg-red-500"
                            : "bg-blue-500"
                        }`}
                      />
                      {item.status}
                    </span>
                  </div>
                </td>

                {/* Amount BDT */}
                <td className="px-6 py-5 text-right font-bold text-gray-700 border-r border-gray-50 last:border-r-0">
                  {item.amountBDT}
                </td>

                {/* Net Amount GBP */}
                <td className="px-6 py-5 text-right border-r border-gray-50 last:border-r-0">
                  <div className="flex flex-col items-end">
                    <span className="font-extrabold text-text">
                      {item.amountGBP}
                    </span>
                    <span className="text-[10px] font-medium text-gray-400">
                      Rate: {item.conversionAmount}
                    </span>
                  </div>
                </td>

                {/* Settlement */}
                <td className="px-6 py-5 text-right">
                  <span className="inline-block rounded-lg bg-emerald-50 px-3 py-2 text-sm font-black text-emerald-700 border border-emerald-100 shadow-sm">
                    {item.willGet}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default MoneyOutLogTable;