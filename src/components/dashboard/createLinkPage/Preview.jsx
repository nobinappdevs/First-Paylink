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

const Preview = () => {
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
        <div className="flex items-center space-x-2 text-secondery/80">
          <div className="w-5 h-5 bg-secondery/80 rounded" />
          <span className="font-semibold text-sm">Pay Link</span>
        </div>
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

      {/* Message */}
      <div className="mb-6 bg-slate-50 rounded-xl p-4">
        <h5 className="text-sm font-medium text-slate-700 mb-2">Message</h5>
        <h6 className="text-xs text-slate-500">
          {formData.description || "No message provided"}
        </h6>
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
              className={`md:p-4 p-2 border cursor-pointer rounded-md transition-all flex items-center justify-center
                ${
                  selectedGateway === g.id
                    ? "border-emerald-500 bg-emerald-50"
                    : "border-slate-200 hover:border-emerald-300"
                }`}
            >
              <Image src={g.image} alt={g.id} className="md:h-10 h-6 w-auto" />
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 mt-3">
          {paymentGateways.slice(8).map((g) => (
            <button
              key={g.id}
              onClick={() => setSelectedGateway(g.id)}
              className={`md:p-4 p-2 border cursor-pointer rounded-md transition-all flex items-center justify-center
                ${
                  selectedGateway === g.id
                    ? "border-emerald-500 bg-emerald-50"
                    : "border-slate-200 hover:border-emerald-300"
                }`}
            >
              <Image src={g.image} alt={g.id} className="md:h-10 h-6 w-auto" />
            </button>
          ))}
        </div>
      </fieldset>

      {/* Card Section (static preview) */}
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

export default Preview;
