// "use client";

// import React, { useState } from "react";
// import { CreditCard } from "lucide-react";
// import Button from "@/components/ui/Button";
// import Image from "next/image";

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

// const LinkPreview = () => {
//   const [activeTab] = useState("fixed");
//   const [selectedGateway, setSelectedGateway] = useState(null);

//   const [formData] = useState({
//     plan: "basic",
//     price: "30.00",
//     quantity: "1",
//     description: "",
//     email: "",
//     cardName: "",
//     cardNumber: "",
//     saveInfo: false,
//   });

//   const paymentGateways = [
//     { id: "paypal", image: paypalLogo },
//     { id: "stripe", image: stipeLogo },
//     { id: "flutterwave", image: flutterLogo },
//     { id: "sslcommerz", image: sslcommezLogo },
//     { id: "razorpay", image: razorpayLogo },
//     { id: "qrpay", image: qrpayLogo },
//     { id: "pagadito", image: pagaditoLogo },
//     { id: "coingate", image: coingateLogo },
//     { id: "paystack", image: paystackLogo },
//     { id: "authorize", image: authorizeLogo },
//     { id: "perfectmoney", image: perfectmoneyLogo },
//   ];

//   return (
//     <div className="bg-white rounded-2xl shadow-lg p-8">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-2xl font-bold text-slate-800">Preview</h2>
//         <div className="flex items-center space-x-2 text-slate-400">
//           <div className="w-8 h-8 border-2 border-slate-300 rounded-lg" />
//           <CreditCard className="w-6 h-6" />
//         </div>
//       </div>

//       {/* Company */}
//       <div className="mb-6 pb-6 border-b-2 border-slate-100">
//         <div className="flex items-center space-x-2 text-slate-600">
//           <div className="w-5 h-5 bg-slate-800 rounded" />
//           <span className="font-semibold">ABC LTD</span>
//         </div>
//       </div>

//       {/* Amount */}
//       <div className="mb-6">
//         <label className="block text-sm font-medium text-slate-700 mb-2">
//           Amount
//         </label>
//         <div className="flex items-center border-2 border-slate-200 rounded-xl px-4 py-3">
//           <span className="text-slate-500 mr-2">$</span>
//           <input
//             readOnly
//             value={activeTab === "fixed" ? formData.price : "0.00"}
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
//           {paymentGateways.slice(0, 8).map((g) => (
//             <button
//               key={g.id}
//               onClick={() => setSelectedGateway(g.id)}
//               className={`p-4 border-2 rounded-xl transition-all flex items-center justify-center
//                 ${
//                   selectedGateway === g.id
//                     ? "border-emerald-500 bg-emerald-50"
//                     : "border-slate-200 hover:border-emerald-300"
//                 }`}
//             >
//               <Image src={g.image} alt={g.id} className="h-[50px]" />
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-3 gap-3 mt-3">
//           {paymentGateways.slice(8).map((g) => (
//             <button
//               key={g.id}
//               onClick={() => setSelectedGateway(g.id)}
//               className={`p-4 border-2 rounded-xl transition-all flex items-center justify-center
//                 ${
//                   selectedGateway === g.id
//                     ? "border-emerald-500 bg-emerald-50"
//                     : "border-slate-200 hover:border-emerald-300"
//                 }`}
//             >
//               <Image src={g.image} alt={g.id} className="h-[45px] w-full" />
//             </button>
//           ))}
//         </div>
//       </fieldset>

//       {/* Card Section (static preview) */}
//       <div className="mb-6">
//         <h3 className="text-sm font-bold text-slate-800 mb-4 text-center">
//           Or Pay with Debit & Credit Card
//         </h3>

//         <div className="space-y-4">
//           <input
//             readOnly
//             placeholder="Email"
//             className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl"
//           />
//           <input
//             readOnly
//             placeholder="Name On Card"
//             className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl"
//           />
//           <div className="relative">
//             <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
//             <input
//               readOnly
//               placeholder="Card Number"
//               className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Pay Button */}
//       <Button className="w-full flex items-center py-3 justify-center">
//         Pay
//       </Button>
//     </div>
//   );
// };

// export default LinkPreview;


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

const LinkPreview = () => {
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

      {/* Card Section (static LinkPreview) */}
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

export default LinkPreview;
