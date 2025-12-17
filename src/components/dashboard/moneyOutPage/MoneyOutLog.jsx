import { Banknote, Calendar, ChevronRight } from "lucide-react";
import MoneyOutLogTable from "./MoneyOutLogTable";
import Link from "next/link";
const moneyOutLogs = [
  {
    type: "Money Out",
    bank: "Starling Bank",
    status: "Pending",
    amountBDT: "1,000.00 BDT",
    amountGBP: "7.24 GBP",
    timeDate: "04 Dec 2025, 11:35:35 AM",
    transactionId: "WD86320910",
    conversionAmount: "7.39 GBP",
    willGet: "7.24 GBP",
  },
  {
    type: "Money Out",
    bank: "Revolut",
    status: "Completed",
    amountBDT: "2,500.00 BDT",
    amountGBP: "18.10 GBP",
    timeDate: "05 Dec 2025, 10:15:20 AM",
    transactionId: "WD86320911",
    conversionAmount: "18.50 GBP",
    willGet: "18.10 GBP",
  },
  {
    type: "Money Out",
    bank: "Wise",
    status: "Completed",
    amountBDT: "5,000.00 BDT",
    amountGBP: "36.40 GBP",
    timeDate: "06 Dec 2025, 03:45:10 PM",
    transactionId: "WD86320912",
    conversionAmount: "36.90 GBP",
    willGet: "36.40 GBP",
  },
  {
    type: "Money Out",
    bank: "HSBC UK",
    status: "Failed",
    amountBDT: "1,800.00 BDT",
    amountGBP: "13.05 GBP",
    timeDate: "07 Dec 2025, 09:20:55 AM",
    transactionId: "WD86320913",
    conversionAmount: "13.40 GBP",
    willGet: "0.00 GBP",
  },
];

export default function MoneyOutLog() {
  return (
    <section className="overflow-hidden font-roboto  rounded-2xl  bg-white shadow-sm">
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white px-4 sm:px-6 py-4 sm:py-5 border-b border-gray-100">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-secondery/80">
            Money Out Log
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Track your recent withdrawal activities
          </p>
        </div>

        <Link
          href="/dashboard/withdraw/moneylogs"
          className="w-full sm:w-auto sm:self-auto"
        >
          <button
            type="button"
            className="group flex w-full sm:w-auto items-center justify-center sm:justify-start gap-1 rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 border border-transparent transition-all cursor-pointer hover:bg-white hover:border-gray-200 hover:shadow-sm"
          >
            View More
            <ChevronRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </button>
        </Link>
      </header>

      <MoneyOutLogTable moneyOutLogs={moneyOutLogs} />
      <div className="bg-gray-50/30 px-6 py-4 border-t border-gray-100">
        <p className="text-[11px] text-gray-400 font-medium italic flex items-center gap-1">
          <span className="h-1 w-1 bg-gray-300 rounded-full" />
          All conversion rates are updated based on real-time market data.
        </p>
      </div>
    </section>
  );
}
