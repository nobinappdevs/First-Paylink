"use client";
import React from "react";
import {
  ArrowRight,
  Wallet,
  ArrowDownUp,
  CreditCard,
  DollarSign,
  ReceiptCent,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Select from "react-select";
import { reactSelectStyles } from "@/style/selectStyles";
import InputField from "@/components/ui/InputField";

/* ------------------ DEMO DATA ------------------ */
const demoData = {
  gateway: "PayPal",
  amount: 1000,
  currency: "USD",
  feePercent: 2.5,
  feeAmount: 25,
  netAmount: 975,
  convertedAmount: 8.87,
  exchangeRate: 0.0091,
  availableBalance: 1997.8,
};

const gateways = [
  { label: "PayPal", value: "paypal" },
  { label: "Stripe", value: "stripe" },
  { label: "Bank Transfer", value: "bank" },
  { label: "Wise", value: "wise" },
];
const currencyOptions = [
  {
    value: "bdt",
    label: "BDT",
    rate: 1.0,
  },
  {
    value: "usd",
    label: "USD",
    rate: 0.0091,
  },
  {
    value: "eur",
    label: "EUR",
    rate: 0.0084,
  },
  {
    value: "gbp",
    label: "GBP",
    rate: 0.0072,
  },
];

export default function MoneyOut() {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
        {/* Left */}
        <div className="bg-white rounded-xl  border border-text/10 p-4 md:p-8">
          <h4 className="mb-6 md:mb-8">Money Out Request</h4>

          {/* Rate */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 md:p-6 text-center mb-6 md:mb-8">
            <h5>Current Market Rate (BDT to USD)</h5>
            <h6 className="mt-2">1 BDT = {demoData.exchangeRate} USD</h6>
          </div>

          {/* Gateway */}
          <label className="text-sm font-medium text-slate-700 mb-1 block">
            Payment Gateway *
          </label>
          <Select
            options={gateways}
            instanceId="gateway-select"
            placeholder="Select Gateway"
            styles={reactSelectStyles}
            isSearchable
          />

          {/* Amount */}
          <div className="flex my-6 w-full justify-between items-center">
            <div className="w-[65%]">
              <InputField
                type="number"
                placeholder={"$ 00.00"}
                label={"Amount (BDT)"}
              />
            </div>
            <div className="w-[30%] mt-7">
              <Select
                options={currencyOptions}
                placeholder="BDT"
                styles={reactSelectStyles}
                instanceId="currency-select"
                isSearchable
              />
            </div>
          </div>

          {/* Balance */}
          <p className="text-sm text-slate-600 mb-6">
            Available Balance:{" "}
            <span className="font-bold text-indigo-600">
              {demoData.availableBalance} BDT
            </span>
          </p>

          <Button size="lg" className="w-full font-bold flex justify-center">
            Confirm Money Out
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Right */}
        <div className="bg-white rounded-xl border border-text/10 p-4 md:p-8 lg:sticky lg:top-12">
          <h4 className="text-xl md:text-3xl font-bold mb-6">
            Transaction Preview
          </h4>

          <div className="space-y-4">
            <PreviewItem
              icon={<Wallet className="text-blue-600" />}
              label="Amount to Withdraw"
              value={`${demoData.amount} BDT`}
            />

            <PreviewItem
              icon={<CreditCard className="text-red-600" />}
              label={`Total Fees (${demoData.feePercent}%)`}
              value={`- ${demoData.feeAmount} BDT`}
            />

            <PreviewItem
              icon={<DollarSign className="text-green-600" />}
              label="Net Amount (BDT)"
              value={`${demoData.netAmount} BDT`}
              highlight
            />

            <PreviewItem
              icon={<ArrowDownUp className="text-purple-600" />}
              label={`Converted Amount (${demoData.currency})`}
              value={`${demoData.convertedAmount} ${demoData.currency}`}
            />

            <PreviewItem
              icon={<ReceiptCent className="text-text/80" />}
              label="Final Payable Amount"
              value={`${demoData.convertedAmount} ${demoData.currency}`}
              final
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------ PREVIEW ITEM ------------------ */
function PreviewItem({ icon, label, value, highlight, final }) {
  const base = "flex items-center justify-between p-4 rounded-xl";
  const styles = final ? "border-2 border-emerald-200 bg-emerald-50" : highlight ? "bg-slate-100 border border-slate-300" : "bg-slate-50 border border-slate-200";

  return (
    <div className={`${base} ${styles}`}>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-inner">
          {icon}
        </div>
        <span className="font-medium text-slate-700">{label}</span>
      </div>
      <span className={`font-bold ${final ? "text-emerald-600 text-xl" : ""}`}>
        {value}
      </span>
    </div>
  );
}
