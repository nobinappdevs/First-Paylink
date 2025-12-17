"use client";
import React, { useState } from "react";
import { Upload } from "lucide-react";
import Button from "@/components/Sheared/Button";
import Preview from "./Preview";
import Link from "next/link";
import Select from "react-select";
import { reactSelectStyles } from "@/style/selectStyles";
import ImageDropzone from "./ImageDropzone";

export default function PaymentPage() {
  const [activeTab, setActiveTab] = useState("fixed");
  const [showLimits, setShowLimits] = useState(false);
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleKeyDown = (e, tab) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleTabChange(tab);
    }
  };
  const currencyOptions = [
    { value: "usd", label: "USD - US Dollar" },
    { value: "eur", label: "EUR - Euro" },
    { value: "gbp", label: "GBP - British Pound" },
    { value: "bdt", label: "BDT - Bangladeshi Taka" },
  ];
  return (
    <div className=" px-4 pt-8 font-roboto">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Panel - Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl  font-montserrat font-bold text-slate-800 mb-6">
            Select Type
          </h1>

          {/* Tab Navigation */}
          <div
            role="tablist"
            aria-label="Payment type selection"
            className="flex lg:flex-row flex-col mb-6 bg-slate-100 rounded-xl p-1"
          >
            <button
              role="tab"
              aria-selected={activeTab === "fixed"}
              aria-controls="fixed-panel"
              tabIndex={activeTab === "fixed" ? 0 : -1}
              onClick={() => handleTabChange("fixed")}
              onKeyDown={(e) => handleKeyDown(e, "fixed")}
              className={`flex-1 py-3 px-4 lg:px-2 lg:text-base md:text text-xs rounded-lg cursor-pointer  font-bold transition-all ${
                activeTab === "fixed"
                  ? "bg-white text-emerald-600 shadow-md"
                  : "text-slate-600 hover:text-slate-800"
              }`}
            >
              Customers choose what to pay
            </button>
            <button
              role="tab"
              aria-selected={activeTab === "custom"}
              aria-controls="custom-panel"
              tabIndex={activeTab === "custom" ? 0 : -1}
              onClick={() => handleTabChange("custom")}
              onKeyDown={(e) => handleKeyDown(e, "custom")}
              className={`flex-1 py-3 px-4 md:text lg:text-base  text-xs cursor-pointer rounded-lg font-semibold transition-all ${
                activeTab === "custom"
                  ? "bg-white text-emerald-600 shadow-md"
                  : "text-slate-600 hover:text-slate-800"
              }`}
            >
              Products or subscriptions
            </button>
          </div>

          {/* Payment Page Section */}
          <div className="border-b-2 border-emerald-500 pb-2 mb-6">
            <h2 className="text-lg font-semibold text-emerald-600">
              Payment Page
            </h2>
          </div>

          {/* Tab Content */}
          <div>
            {/* Fixed Amount Panel */}
            <div
              role="tabpanel"
              aria-labelledby="fixed-tab"
              hidden={activeTab !== "fixed"}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Title{" "}
                    <span className="text-red-500" aria-label="required">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    aria-required="true"
                    placeholder="Name of cause or service"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Currency{" "}
                    <span className="text-red-500" aria-label="required">
                      *
                    </span>
                  </label>
                  <Select
                    options={currencyOptions}
                    instanceId="currency-select"
                    placeholder="Select Currency"
                    styles={reactSelectStyles}
                    isSearchable
                  />
                </div>
              </div>
              {/* Title and Image */}
              <div className="">
      <ImageDropzone />
              </div>
              {/* Description */}
              <div className="my-6 ">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Description <span className="text-slate-400">(Optional)</span>
                </label>
                <textarea
                  rows="4"
                  placeholder="Give customers more detail about what they are paying for."
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all resize-none"
                />
              </div>

              {/* Set Limits */}
              {/* Set Payment Limits Toggle */}
              <div className="col-span-2 my-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showLimits}
                    onChange={() => setShowLimits(!showLimits)}
                    className="w-4 h-4 text-emerald-600 rounded"
                  />
                  <span className="text-sm font-medium text-slate-700">
                    Set payment limits
                  </span>
                </label>
              </div>

              {/* Min & Max Amount (Animated) */}
              <div
                className={`col-span-2 grid grid-cols-2 mb-4 gap-4 overflow-hidden
                      transition-all duration-500 ease-in-out
                      ${
                        showLimits
                          ? "max-h-40 opacity-100 translate-y-0"
                          : "max-h-0 opacity-0 -translate-y-2"
                      }
                    `}
              >
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Minimum Amount
                  </label>
                  <div className="flex items-center border-2 border-slate-200 rounded-lg px-3 py-2">
                    <span className="text-slate-500 mr-2">$</span>
                    <input
                      type="number"
                      placeholder="0.3"
                      className="flex-1 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Maximum Amount
                  </label>
                  <div className="flex items-center border-2 border-slate-200 rounded-lg px-3 py-2">
                    <span className="text-slate-500 mr-2">$</span>
                    <input
                      type="number"
                      placeholder="10,000"
                      className="flex-1 outline-none"
                    />
                  </div>
                </div>
              </div>
              <Link href={"/dashboard/payments/share/2"}>
                <Button
                  gradient
                  className="w-full flex items-center py-3 justify-center"
                >
                  Create New Link
                </Button>
              </Link>
            </div>

            {/* Customer Choose Panel */}
            <div
              role="tabpanel"
              aria-labelledby="custom-tab"
              hidden={activeTab !== "custom"}
            >
              <div className="w-full grid grid-cols-2 gap-4 ">
                {/* Title */}
                <div className="col-span-2 ">
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Collecting Payment Platform"
                    className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                {/* Currency */}
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Currency{" "}
                    <span className="text-red-500" aria-label="required">
                      *
                    </span>
                  </label>
                  <Select
                    options={currencyOptions}
                    instanceId="currency-select"
                    placeholder="Select Currency"
                    styles={reactSelectStyles}
                  />
                </div>

                {/* Unit Price */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Unit Price *
                  </label>
                  <div className="flex items-center border-2 border-slate-200 rounded-lg px-3 py-2">
                    <span className="text-slate-500 mr-2">$</span>
                    <input
                      type="number"
                      placeholder="0.00"
                      className="flex-1 outline-none"
                    />
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Quantity *
                  </label>
                  <input
                    type="number"
                    defaultValue={1}
                    className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                {/* Button */}
                <Link href="/dashboard/payments/share/2" className="col-span-2">
                  <Button
                    gradient
                    className="w-full flex  items-center py-3 justify-center"
                  >
                    Create New Link
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Right Panel - Preview */}
        <Preview />
      </div>
    </div>
  );
}
