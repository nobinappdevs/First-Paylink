// import React, { useState } from "react";
// import { CreditCard } from "lucide-react";
// import Button from "@/components/ui/Button";
// import coingateLogo from "@assets/coingateLogo.webp";
// import flutterLogo from "@assets/flutterLogo.webp";
// import pagaditoLogo from "@assets/pagaditoLogo.webp";
// import paypalLogo from "@assets/paypalLogo.webp";
// import paystackLogo from "@assets/paystackLogo.webp";
// import perfectmoneyLogo from "@assets/perfectmoneyLogo.webp";
// import authorizeLogo from "@assets/authorizeLogo.webp";
// import qrpayLogo from "@assets/qrpayLogo.webp";
// import razorpayLogo from "@assets/razorpayLogo.webp";
// import sslcommezLogo from "@assets/sslcommezLogo.webp";
// import stipeLogo from "@assets/stipeLogo.webp";
// import Image from "next/image";

// const PreviewPaymentPayment = ({ formData, activeTab, handleInputChange }) => {
//   const [selectedGateway, setSelectedGateway] = useState(null);

//   const paymentGateways = [
//     {
//       id: "paypal",
//       name: "PayPal",
//       image: paypalLogo,
//       color: "bg-blue-600",
//     },
//     {
//       id: "stripe",
//       name: "Stripe",
//       image: stipeLogo,
//       color: "bg-indigo-600",
//     },
//     {
//       id: "flutterwave",
//       name: "Flutterwave",
//       image: flutterLogo,
//       color: "bg-orange-500",
//     },
//     {
//       id: "sslcommerz",
//       name: "SSLCommerz",
//       image: sslcommezLogo,
//       color: "bg-red-600",
//     },
//     {
//       id: "razorpay",
//       name: "Razorpay",
//       image: razorpayLogo,
//       color: "bg-blue-700",
//     },
//     {
//       id: "qrpay",
//       name: "QR Pay",
//       image: qrpayLogo,
//       color: "bg-cyan-600",
//     },
//     {
//       id: "pagadito",
//       name: "Pagadito",
//       image: pagaditoLogo,
//       color: "bg-blue-500",
//     },
//     {
//       id: "coingate",
//       name: "Coingate",
//       image: coingateLogo,
//       color: "bg-purple-600",
//     },
//     {
//       id: "paystackLogo",
//       name: "paystackLogo",
//       image: paystackLogo,
//       color: "bg-red-700",
//     },
//     {
//       id: "authorizeLogo",
//       name: "authorizeLogo",
//       image: authorizeLogo,
//       color: "bg-red-700",
//     },
//     {
//       id: "perfectmoneyLogo",
//       name: "perfectmoneyLogo",
//       image: perfectmoneyLogo,
//       color: "bg-red-700",
//     },
//   ];

//   return (
//     <div className="bg-white rounded-2xl shadow-lg p-8">
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-2xl font-bold text-slate-800">PreviewPaymentPayment</h2>
//         <div className="flex items-center space-x-2 text-slate-400">
//           <div
//             className="w-8 h-8 border-2 border-slate-300 rounded-lg"
//             aria-hidden="true"
//           ></div>
//           <CreditCard className="w-6 h-6" aria-hidden="true" />
//         </div>
//       </div>

//       {/* Company Header */}
//       <div className="mb-6 pb-6 border-b-2 border-slate-100">
//         <div className="flex items-center space-x-2 text-slate-600">
//           <div
//             className="w-5 h-5 bg-slate-800 rounded"
//             aria-hidden="true"
//           ></div>
//           <span className="font-semibold">ABC LTD</span>
//         </div>
//       </div>

//       {/* Amount Display */}
//       <div className="mb-6">
//         <label
//           htmlFor="PreviewPaymentPayment-amount"
//           className="block text-sm font-medium text-slate-700 mb-2"
//         >
//           Amount
//         </label>
//         <div className="flex items-center border-2 border-slate-200 rounded-xl px-4 py-3">
//           <span className="text-slate-500 mr-2" aria-hidden="true">
//             $
//           </span>
//           <input
//             type="text"
//             id="PreviewPaymentPayment-amount"
//             value={activeTab === "fixed" ? formData.amount : "0.00"}
//             readOnly
//             aria-label="Payment amount"
//             className="flex-1 outline-none text-lg bg-transparent"
//           />
//         </div>
//       </div>

//       {/* Message */}
//       <div className="mb-6 bg-slate-50 rounded-xl p-4">
//         <p className="text-sm font-medium text-slate-700 mb-2">Message</p>
//         <p className="text-xs text-slate-500">
//           {formData.description || "No message provided"}
//         </p>
//       </div>

//       {/* Payment Gateways */}
//       <fieldset className="mb-6">
//         <legend className="text-sm font-bold text-slate-800 mb-4">
//           Pay With Payment Gateway
//         </legend>
//         <div className="grid grid-cols-2 gap-3">
//           {paymentGateways.map((gateway) => (
//             <button
//               key={gateway.id}
//               type="button"
//               onClick={() => setSelectedGateway(gateway.id)}
//               aria-pressed={selectedGateway === gateway.id}
//               aria-label={`Pay with ${gateway.name}`}
//               className={`p-4 border-2 cursor-pointer rounded-xl transition-all 
//       flex items-center justify-center
//       focus:outline-none focus:ring-2 focus:ring-emerald-300
//       ${
//         selectedGateway === gateway.id
//           ? "border-emerald-500 bg-emerald-50"
//           : "border-slate-200 hover:border-emerald-300"
//       }`}
//             >
//               <Image
//                 src={gateway.image}
//                 alt={gateway.name}
//                 className="w-6/12 h-8 object-cover "
//               />
//             </button>
//           ))}
//         </div>
//       </fieldset>

//       {/* Card Payment Section */}
//       <div className="mb-6">
//         <h3 className="text-sm font-bold text-slate-800 mb-4 text-center">
//           Or Pay with Debit & Credit Card
//         </h3>

//         <form className="space-y-4">
//           <div>
//             <label htmlFor="email" className="sr-only">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Email"
//               readOnly
//               value={formData.email}
//               onChange={(e) => handleInputChange("email", e.target.value)}
//               className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all"
//             />
//           </div>

//           <div>
//             <label htmlFor="card-name" className="sr-only">
//               Name on card
//             </label>
//             <input
//               type="text"
//               id="card-name"
//               placeholder="Name On Card"
//               readOnly
//               value={formData.cardName}
//               onChange={(e) => handleInputChange("cardName", e.target.value)}
//               className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all"
//             />
//           </div>

//           <div className="relative">
//             <label htmlFor="card-number" className="sr-only">
//               Card number
//             </label>
//             <CreditCard
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400"
//               aria-hidden="true"
//             />
//             <input
//               type="text"
//               id="card-number"
//               placeholder="Card Number"
//               readOnly
//               value={formData.cardNumber}
//               onChange={(e) => handleInputChange("cardNumber", e.target.value)}
//               className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all"
//             />
//             <span
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs text-slate-400"
//               aria-hidden="true"
//             >
//               MM / YY / CVC
//             </span>
//           </div>
//         </form>
//       </div>

//       {/* Save Info */}
//       <div className="mb-6 bg-emerald-50 rounded-xl p-4 flex items-start space-x-3">
//         <input
//           type="checkbox"
//           id="save-info"
//           checked={formData.saveInfo}
//           readOnly
//           onChange={(e) => handleInputChange("saveInfo", e.target.checked)}
//           className="mt-1 w-4 h-4 text-emerald-600 rounded focus:ring-2 focus:ring-emerald-300"
//         />
//         <label htmlFor="save-info" className="flex-1 cursor-pointer">
//           <p className="text-sm font-medium text-slate-800">
//             Securely save my information for 1-click checkout
//           </p>
//           <p className="text-xs text-slate-500 mt-1">
//             Pay faster on ABC LTD and everywhere Link is accepted
//           </p>
//         </label>
//       </div>

//       {/* Pay Button */}
//       <Button className="w-full flex items-center py-3 justify-center">
//         {" "}
//         Pay
//       </Button>
//       <Image src={coingateLogo} width={200} alt="logo" height={100}></Image>
//     </div>
//   );
// };

// export default PreviewPaymentPayment;



"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";

import coingateLogo from "@assets/coingateLogo.webp";
import flutterLogo from "@assets/flutterLogo.webp";
import pagaditoLogo from "@assets/pagaditoLogo.webp";
import paypalLogo from "@assets/paypalLogo.webp";
import paystackLogo from "@assets/paystackLogo.webp";
import perfectmoneyLogo from "@assets/perfectmoneyLogo.webp";
import authorizeLogo from "@assets/authorizeLogo.webp";
import qrpayLogo from "@assets/qrpayLogo.webp";
import razorpayLogo from "@assets/razorpayLogo.webp";
import sslcommezLogo from "@assets/sslcommezLogo.webp";
import stipeLogo from "@assets/stipeLogo.webp";
import InputField from "@/components/ui/InputField";
import siteLogo from "@assets/logo.webp";

const PreviewPayment = () => {
  const [activeTab] = useState("fixed");
  const [selectedGateway, setSelectedGateway] = useState(null);

  const [formData] = useState({
    plan: "basic",
    price: "30.00",
    quantity: "1",
    description: "",
    email: "",
    cardName: "",
    cardNumber: "",
    saveInfo: false,
  });

  const paymentGateways = [
    { id: "paypal", image: paypalLogo },
    { id: "stripe", image: stipeLogo },
    { id: "flutterwave", image: flutterLogo },
    { id: "sslcommerz", image: sslcommezLogo },
    { id: "razorpay", image: razorpayLogo },
    { id: "qrpay", image: qrpayLogo },
    { id: "pagadito", image: pagaditoLogo },
    { id: "coingate", image: coingateLogo },
    { id: "paystack", image: paystackLogo },
    { id: "authorize", image: authorizeLogo },
    { id: "perfectmoney", image: perfectmoneyLogo },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h4>Preview</h4>
      </div>
      {/* Company */}
      <div className="mb-6 pb-6 border-b-2 border-slate-100">
        <Image src={siteLogo} alt="Company Logo" className="h-6 w-auto" />
      </div>

      {/* Amount */}
      <div className="mb-6">
        <InputField
          type="number"
          label="Amount"
          placeholder={"$ 30.00"}
          readOnly
        />
      </div>
      {/* Payment Gateways */}
      <fieldset className="mb-6">
        <legend className="text-sm font-bold text-slate-800 mb-4">
          Pay With Payment Gateway
        </legend>

        <div className="grid grid-cols-2 gap-3 md:gap-6">
          {paymentGateways.slice(0, 8).map((g) => (
            <button
              key={g.id}
              onClick={() => setSelectedGateway(g.id)}
              className={`p-4 border cursor-pointer rounded-xl transition-all flex items-center justify-center
                ${
                  selectedGateway === g.id
                    ? "border-emerald-500 bg-emerald-50"
                    : "border-slate-200 hover:border-emerald-300"
                }`}
            >
              <Image src={g.image} alt={g.id} className="h-10 w-auto" />
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 mt-3">
          {paymentGateways.slice(8).map((g) => (
            <button
              key={g.id}
              onClick={() => setSelectedGateway(g.id)}
              className={`p-4 border cursor-pointer rounded-xl transition-all flex items-center justify-center
                ${
                  selectedGateway === g.id
                    ? "border-emerald-500 bg-emerald-50"
                    : "border-slate-200 hover:border-emerald-300"
                }`}
            >
              <Image src={g.image} alt={g.id} className="h-10 w-auto" />
            </button>
          ))}
        </div>
      </fieldset>

      {/* Card Section (static PreviewPayment) */}
      <div className="mb-6">
        <h6 className="text-sm font-bold text-slate-800 mb-4 text-center">
          Or Pay with Debit & Credit Card
        </h6>

        <div className="space-y-4">
          <InputField type="number" readOnly placeholder="Email" />
          <InputField type="number" readOnly placeholder="Name On Card" />
          <InputField type="number" readOnly placeholder="Card Number" />
        </div>
      </div>

      {/* Pay Button */}
      <Button className="w-full flex items-center py-3 justify-center">
        Pay
      </Button>
    </div>
  );
};

export default PreviewPayment;
