// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   ArrowRight,
//   Wallet,
//   ArrowDownUp,
//   CreditCard,
//   DollarSign,
//   Receipt,
//   ReceiptCent,
// } from "lucide-react";
// import Button from "@/components/ui/Button";
// import { reactSelectStyles } from "@/style/selectStyles";
// import Select from "react-select";

// export default function MoneyOut() {
//   const [formData, setFormData] = useState({
//     gateway: "",
//     amount: "",
//     currency: "BDT",
//   });

//   const [calculations, setCalculations] = useState({
//     enteredAmount: 0,
//     willGetInBDT: 0,
//     totalFees: 0,
//     convertedAmount: 0,
//     exchangeRate: 1.0,
//     payableAmount: 0,
//   });

//   const availableBalance = 1997.8;

//   const gateways = [
//     { id: "paypal", name: "PayPal", fee: 2.5 },
//     { id: "stripe", name: "Stripe", fee: 2.9 },
//     { id: "bank", name: "Bank Transfer", fee: 1.5 },
//     { id: "wise", name: "Wise", fee: 0.5 },
//   ];

//   const currencies = [
//     { code: "BDT", name: "Bangladeshi Taka", rate: 1.0 },
//     { code: "USD", name: "US Dollar", rate: 0.0091 },
//     { code: "EUR", name: "Euro", rate: 0.0084 },
//     { code: "GBP", name: "British Pound", rate: 0.0072 },
//   ];

//   const usdCurrency = currencies.find((c) => c.code === "USD");
//   const dynamicUSDRate = usdCurrency ? usdCurrency.rate : 0.0;

//   const calculateAmounts = () => {
//     const amount = parseFloat(formData.amount) || 0;
//     const selectedGateway = gateways.find((g) => g.id === formData.gateway);
//     const selectedCurrency = currencies.find(
//       (c) => c.code === formData.currency
//     );

//     if (!selectedGateway || !selectedCurrency) {
//       setCalculations({
//         enteredAmount: 0,
//         willGetInBDT: 0,
//         totalFees: 0,
//         convertedAmount: 0,
//         payableAmount: 0,
//         exchangeRate: dynamicUSDRate,
//       });
//       return;
//     }

//     const totalFees = (amount * selectedGateway.fee) / 100;
//     const willGetInBDT = amount - totalFees;

//     const rate = selectedCurrency.rate;
//     const convertedAmount = willGetInBDT * rate;

//     setCalculations({
//       enteredAmount: amount,
//       totalFees,
//       willGetInBDT,
//       convertedAmount,
//       payableAmount: convertedAmount,
//       exchangeRate: rate,
//     });
//   };

//   useEffect(() => {
//     calculateAmounts();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [formData.amount, formData.gateway, formData.currency]);

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = () => {
//     const amount = parseFloat(formData.amount);
//     if (!formData.gateway || !amount) {
//       alert("Please select a gateway and enter an amount.");
//       return;
//     }
//     if (amount > availableBalance) {
//       alert(`Insufficient balance.`);
//       return;
//     }
//     alert(`Money out request submitted successfully.`);
//   };

//   const formatCurrency = (amount, currencyCode = "BDT") => {
//     return `${amount.toFixed(2)} ${currencyCode}`;
//   };

//   const displayRate =
//     formData.currency === "BDT"
//       ? {
//           rate: dynamicUSDRate.toFixed(4),
//           targetCurrency: "USD",
//           title: "Current Market Rate (BDT to USD)",
//         }
//       : {
//           rate: calculations.exchangeRate.toFixed(4),
//           targetCurrency: formData.currency,
//           title: `Exchange Rate (BDT to ${formData.currency})`,
//         };

//   return (
//     <div className="mb-10">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
//         {/* Left */}
//         <div className="bg-white  rounded-xl shadow-sm p-4 md:p-8">
//           <h4 className="mb-6 md:mb-8">Money Out Request</h4>

//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               handleSubmit();
//             }}
//           >
//             {/* Rate */}
//             <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 md:p-6 text-center mb-6 md:mb-8">
//               <h4>{displayRate.title}</h4>
//               <h5 className="mt-1 md:mt-2">
//                 1 BDT = {displayRate.rate} {displayRate.targetCurrency}
//               </h5>
//             </div>
//             {/* Gateway */}
//             <label className="text-xs md:text-sm font-medium text-slate-700 mb-1 block">
//               Payment Gateway *
//             </label>
//           <Select
//             options={gateways}
//             instanceId="filter-select"
//             placeholder="Filter"
//             styles={reactSelectStyles}
//             isSearchable
//           />

//             {/* Amount */}
//             <label className="text-xs md:text-sm font-medium text-slate-700 mb-1 block">
//               Amount (BDT) *
//             </label>
//             <div className="flex mb-4 md:mb-6 w-full ">
//               <div className="2xl:w-[85%] md:w-[80%] lg:w-[70%] w-[70%]">
//                 <input
//                   type="number"
//                   placeholder="Enter Amount"
//                   value={formData.amount}
//                   onChange={(e) => handleInputChange("amount", e.target.value)}
//                   className=" px-3 w-full md:px-4 py-2 md:py-3 border border-slate-300 rounded-l-xl text-sm md:text-base focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
//                 />
//               </div>
//               <div className="2xl:w-[15%] md:w-[20%] lg:w-[30%] w-[30%]">
//                 <select
//                   value={formData.currency}
//                   onChange={(e) =>
//                     handleInputChange("currency", e.target.value)
//                   }
//                   className="sm:px-3 px-0.5 w-full md:px-4 cursor-pointer py-2 md:py-3 bg-secondery text-white text-sm md:text-base rounded-r-xl"
//                 >
//                   {currencies.map((c) => (
//                     <option key={c.code}>{c.code}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             {/* Balance */}
//             <p className="text-xs md:text-sm text-slate-600 mb-4 md:mb-6">
//               Available Balance:{" "}
//               <span className="font-bold text-indigo-600">
//                 {availableBalance} BDT
//               </span>
//             </p>

//             {/* Button */}
//             <Button
//               type="submit"
//               size="lg"
//               disabled={!formData.gateway || !formData.amount}
//               className="w-full font-bold flex justify-center"
//             >
//               Confirm Money Out{" "}
//               <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
//             </Button>
//           </form>
//         </div>

//         {/* Right */}
//         <div className="bg-white  rounded-xl shadow-sm p-4 md:p-8 lg:sticky lg:top-12">
//           <h2 className="text-xl md:text-3xl font-bold text-slate-800 mb-6 md:mb-8">
//             Transaction Preview
//           </h2>

//           <div className="space-y-3 md:space-y-4">
//             <PreviewItem
//               icon={<Wallet className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />}
//               label="Amount to Withdraw"
//               value={
//                 calculations.enteredAmount
//                   ? formatCurrency(calculations.enteredAmount, "BDT")
//                   : "--"
//               }
//             />

//             <PreviewItem
//               icon={
//                 <CreditCard className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
//               }
//               label={`Total Fees (${
//                 gateways.find((g) => g.id === formData.gateway)?.fee || "--"
//               }%)`}
//               value={`- ${
//                 calculations.totalFees
//                   ? formatCurrency(calculations.totalFees, "BDT")
//                   : "--"
//               }`}
//             />

//             <PreviewItem
//               icon={
//                 <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
//               }
//               label="Net Amount (BDT)"
//               value={
//                 calculations.willGetInBDT
//                   ? formatCurrency(calculations.willGetInBDT, "BDT")
//                   : "--"
//               }
//               highlight
//             />

//             {formData.currency !== "BDT" &&
//               calculations.convertedAmount > 0 && (
//                 <PreviewItem
//                   icon={
//                     <ArrowDownUp className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
//                   }
//                   label={`Converted Amount (${formData.currency})`}
//                   value={formatCurrency(
//                     calculations.convertedAmount,
//                     formData.currency
//                   )}
//                 />
//               )}

//             <PreviewItem
//               icon={<ReceiptCent className="w-5 h-5 text-text/80" />}
//               label="Final Payable Amount"
//               value={
//                 calculations.payableAmount
//                   ? formatCurrency(
//                       calculations.payableAmount,
//                       formData.currency
//                     )
//                   : "--"
//               }
//               final
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function PreviewItem({ icon, label, value, highlight, final }) {
//   const base = "flex items-center justify-between p-3 md:p-4 rounded-xl";
//   const styles = final
//     ? "bg--to-r from-emerald-50 to-teal-50 border-2 border-emerald-200"
//     : highlight
//     ? "bg-slate-100 border border-slate-300"
//     : "bg-slate-50 border border-slate-200";

//   return (
//     <div className={`${base} ${styles}`}>
//       <div className="flex items-center gap-2 md:gap-3">
//         <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center bg-white shadow-inner">
//           {icon}
//         </div>
//         <span className="text-sm md:text-base font-medium text-slate-700">
//           {label}
//         </span>
//       </div>
//       <span
//         className={`font-bold text-sm md:text-base ${
//           final ? "text-emerald-600 md:text-xl" : "text-slate-800"
//         }`}
//       >
//         {value}
//       </span>
//     </div>
//   );
// }

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
              icon={<ReceiptCent />}
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
