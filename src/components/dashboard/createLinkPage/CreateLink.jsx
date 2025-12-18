"use client";
import React, { useState } from "react";
import Button from "@/components/ui/Button";
import Preview from "./Preview";
import Link from "next/link";
import Select from "react-select";
import { reactSelectStyles } from "@/style/selectStyles";
import InputField from "@/components/ui/InputField";
import ImageUploadField from "./ImageDropzone";

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
    <div className=" px-4 pt-8 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Panel - Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h4 className=" mb-6">Select Type</h4>

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
                  ? "bg-white text-primary shadow-md"
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
                  ? "bg-white text-primary shadow-md"
                  : "text-slate-600 hover:text-slate-800"
              }`}
            >
              Products or subscriptions
            </button>
          </div>

          {/* Payment Page Section */}
          <div className="border-b-2 border-primary/60 pb-2 mb-6">
            <h5>Payment Page</h5>
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
                  <InputField
                    type="text"
                    label="Title"
                    placeholder="Name of cause or service"
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
                <ImageUploadField />
              </div>
              {/* Description */}
              <div className="my-6 ">
                <InputField
                  type="textarea"
                  label="Description"
                  placeholder="Give customers more detail about what they are paying for"
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
                    className="w-4 h-4 accent-primary cursor-pointer rounded"
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
                  <InputField
                    type="number"
                    label="Minimum Amount"
                    placeholder="$0.3"
                  />
                </div>

                <div>
                  <InputField
                    type="number"
                    label=" Maximum Amount"
                    placeholder="$10,000"
                  />
                </div>
              </div>
              <Link href={"/dashboard/payments/share/2"}>
                <Button className="w-full flex items-center py-3 justify-center">
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
                  <InputField
                    type="text"
                    label="Title"
                    placeholder="Collecting Payment Platform"
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
                  <InputField
                    type="number"
                    label="Unit Price"
                    placeholder="$0.00"
                  />
                </div>

                {/* Quantity */}
                <div>
                  <InputField
                    type="number"
                    label="Quantity"
                    defaultValue={1}
                    placeholder="1"
                  />
                </div>

                {/* Button */}
                <Link href="/dashboard/payments/share/2" className="col-span-2">
                  <Button className="w-full flex  mt-3 items-center py-3 justify-center">
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
