// "use client";
// import React, { useState } from "react";
// import { Upload } from "lucide-react";
// import Button from "@/components/ui/Button";
// import Link from "next/link";
// import PreviewPayment from "./PreviewPayment";

// export default function EditPayment() {
//   const [activeTab, setActiveTab] = useState("fixed");
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     amount: "0.00",
//     minAmount: "",
//     maxAmount: "",
//     currency: "",
//     email: "",
//     cardName: "",
//     cardNumber: "",
//     saveInfo: false,
//     setLimits: false,
//   });
//   console.log(formData);

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   const handleKeyDown = (e, tab) => {
//     if (e.key === "Enter" || e.key === " ") {
//       e.preventDefault();
//       handleTabChange(tab);
//     }
//   };

//   return (
//     <div className=" px-4 py-8 ">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Left Panel - Form */}
//         <div className="bg-white rounded-2xl shadow-lg p-8">
//           <h1 className="text-2xl   font-bold text-slate-800 mb-6">
//             Select Type
//           </h1>

//           {/* Tab Navigation */}
//           <div
//             role="tablist"
//             aria-label="Payment type selection"
//             className="flex lg:flex-row flex-col mb-6 bg-slate-100 rounded-xl p-1"
//           >
//             <button
//               role="tab"
//               aria-selected={activeTab === "fixed"}
//               aria-controls="fixed-panel"
//               id="fixed-tab"
//               tabIndex={activeTab === "fixed" ? 0 : -1}
//               onClick={() => handleTabChange("fixed")}
//               onKeyDown={(e) => handleKeyDown(e, "fixed")}
//               className={`flex-1 py-3 px-4 lg:px-2 lg:text-base md:text text-xs rounded-lg cursor-pointer  font-bold transition-all ${
//                 activeTab === "fixed"
//                   ? "bg-white text-emerald-600 shadow-md"
//                   : "text-slate-600 hover:text-slate-800"
//               }`}
//             >
//               Customers choose what to pay
//             </button>
//             <button
//               role="tab"
//               aria-selected={activeTab === "custom"}
//               aria-controls="custom-panel"
//               id="custom-tab"
//               tabIndex={activeTab === "custom" ? 0 : -1}
//               onClick={() => handleTabChange("custom")}
//               onKeyDown={(e) => handleKeyDown(e, "custom")}
//               className={`flex-1 py-3 px-4 md:text lg:text-base  text-xs cursor-pointer rounded-lg font-semibold transition-all ${
//                 activeTab === "custom"
//                   ? "bg-white text-emerald-600 shadow-md"
//                   : "text-slate-600 hover:text-slate-800"
//               }`}
//             >
//               Products or subscriptions
//             </button>
//           </div>

//           {/* Payment Page Section */}
//           <div className="border-b-2 border-emerald-500 pb-2 mb-6">
//             <h2 className="text-lg font-semibold text-emerald-600">
//               Payment Page
//             </h2>
//           </div>

//           {/* Tab Content */}
//           <div>
//             {/* Fixed Amount Panel */}
//             <div
//               role="tabpanel"
//               id="fixed-panel"
//               aria-labelledby="fixed-tab"
//               hidden={activeTab !== "fixed"}
//             >
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label
//                     htmlFor="fixed-amount"
//                     className="block text-sm font-medium text-slate-700 mb-2"
//                   >
//                     Amount{" "}
//                     <span className="text-red-500" aria-label="required">
//                       *
//                     </span>
//                   </label>
//                   <input
//                     type="number"
//                     id="fixed-amount"
//                     aria-required="true"
//                     placeholder="Enter fixed amount"
//                     value={formData.amount}
//                     onChange={(e) =>
//                       handleInputChange("amount", e.target.value)
//                     }
//                     className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="currency-fixed"
//                     className="block text-sm font-medium text-slate-700 mb-2"
//                   >
//                     Currency{" "}
//                     <span className="text-red-500" aria-label="required">
//                       *
//                     </span>
//                   </label>
//                   <select
//                     id="currency-fixed"
//                     aria-required="true"
//                     value={formData.currency}
//                     onChange={(e) =>
//                       handleInputChange("currency", e.target.value)
//                     }
//                     className="w-full cursor-pointer px-4 py-3 border-2 border-slate-200 rounded-xl text-slate-600 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all"
//                   >
//                     <option value="">Select Currency</option>
//                     <option value="usd">USD - US Dollar</option>
//                     <option value="eur">EUR - Euro</option>
//                     <option value="gbp">GBP - British Pound</option>
//                     <option value="bdt">BDT - Bangladeshi Taka</option>
//                   </select>
//                 </div>
//               </div>
//               {/* Title and Image */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label
//                     htmlFor="title"
//                     className="block text-sm font-medium text-slate-700 mb-2"
//                   >
//                     Title{" "}
//                     <span className="text-red-500" aria-label="required">
//                       *
//                     </span>
//                   </label>
//                   <input
//                     type="text"
//                     id="title"
//                     aria-required="true"
//                     placeholder="Name of cause or service"
//                     value={formData.title}
//                     onChange={(e) => handleInputChange("title", e.target.value)}
//                     className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="image-upload"
//                     className="block text-sm font-medium text-slate-700 mb-2"
//                   >
//                     Image
//                   </label>
//                   <label
//                     htmlFor="image-upload"
//                     className="block border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-emerald-400 transition-colors cursor-pointer focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-200"
//                   >
//                     <Upload
//                       className="w-8 h-8 text-emerald-500 mx-auto mb-2"
//                       aria-hidden="true"
//                     />
//                     <p className="text-sm text-slate-600">
//                       Drop your file Or{" "}
//                       <span className="text-emerald-600 font-medium">
//                         click
//                       </span>{" "}
//                       to select
//                     </p>
//                     <input
//                       type="file"
//                       id="image-upload"
//                       accept="image/*"
//                       className="sr-only"
//                       aria-label="Upload image file"
//                     />
//                   </label>
//                 </div>
//               </div>
//               {/* Description */}
//               <div className="mb-6">
//                 <label
//                   htmlFor="description"
//                   className="block text-sm font-medium text-slate-700 mb-2"
//                 >
//                   Description <span className="text-slate-400">(Optional)</span>
//                 </label>
//                 <textarea
//                   id="description"
//                   rows="4"
//                   placeholder="Give customers more detail about what they are paying for."
//                   value={formData.description}
//                   onChange={(e) =>
//                     handleInputChange("description", e.target.value)
//                   }
//                   className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all resize-none"
//                 />
//               </div>

//               {/* Set Limits */}
//               <div className="mb-6">
//                 <label
//                   htmlFor="set-limits"
//                   className="flex items-center space-x-2 cursor-pointer"
//                 >
//                   <input
//                     type="checkbox"
//                     id="set-limits"
//                     checked={formData.setLimits}
//                     onChange={(e) =>
//                       handleInputChange("setLimits", e.target.checked)
//                     }
//                     className="w-4 h-4 text-emerald-600 rounded focus:ring-2 focus:ring-emerald-200"
//                   />
//                   <span className="text-sm font-medium text-slate-700">
//                     Set payment limits
//                   </span>
//                 </label>
//               </div>
//               <Link href={"/dashboard/payments/share/2"}>
//                 <Button
//                   gradient
//                   className="w-full flex items-center py-3 justify-center"
//                 >
//                   Create New Link
//                 </Button>
//               </Link>
//             </div>

//             {/* Customer Choose Panel */}
//             <div
//               role="tabpanel"
//               id="custom-panel"
//               aria-labelledby="custom-tab"
//               hidden={activeTab !== "custom"}
//             >
//               <div className="w-full grid grid-cols-2 gap-4 ">
//                 {/* Title */}
//                 <div className="col-span-2 ">
//                   <label className="block text-sm font-medium text-slate-700 mb-1">
//                     Title <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Collecting Payment Platform"
//                     className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none"
//                   />
//                 </div>

//                 {/* Currency */}
//                 <div className="col-span-2">
//                   <label className="block text-sm font-medium text-slate-700 mb-1">
//                     Currency
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="USD / BDT / EUR"
//                     className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none"
//                   />
//                 </div>
//                 <div className="col-span-2">
//                   <label
//                     htmlFor="currency-fixed"
//                     className="block text-sm font-medium text-slate-700 mb-2"
//                   >
//                     Currency{" "}
//                     <span className="text-red-500" aria-label="required">
//                       *
//                     </span>
//                   </label>
//                   <select
//                     id="currency-fixed"
//                     aria-required="true"
//                     value={formData.currency}
//                     onChange={(e) =>
//                       handleInputChange("currency", e.target.value)
//                     }
//                     className="w-full cursor-pointer px-4 py-3 border-2 border-slate-200 rounded-xl text-slate-600 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all"
//                   >
//                     <option value="">Select Currency</option>
//                     <option value="usd">USD - US Dollar</option>
//                     <option value="eur">EUR - Euro</option>
//                     <option value="gbp">GBP - British Pound</option>
//                     <option value="bdt">BDT - Bangladeshi Taka</option>
//                   </select>
//                 </div>

//                 {/* Unit Price */}
//                 <div>
//                   <label className="block text-sm font-medium text-slate-700 mb-1">
//                     Unit Price *
//                   </label>
//                   <div className="flex items-center border-2 border-slate-200 rounded-lg px-3 py-2">
//                     <span className="text-slate-500 mr-2">$</span>
//                     <input
//                       type="number"
//                       placeholder="0.00"
//                       className="flex-1 outline-none"
//                     />
//                   </div>
//                 </div>

//                 {/* Quantity */}
//                 <div>
//                   <label className="block text-sm font-medium text-slate-700 mb-1">
//                     Quantity *
//                   </label>
//                   <input
//                     type="number"
//                     defaultValue={1}
//                     className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none"
//                   />
//                 </div>

//                 {/* Button */}
//                 <Link href="/dashboard/payments/share/2" className="col-span-2">
//                   <Button
//                     gradient
//                     className="w-full flex  items-center py-3 justify-center"
//                   >
//                     Create New Link
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Right Panel - Preview */}
//         <PreviewPayment
//           formData={formData}
//           activeTab={activeTab}
//           handleInputChange={handleInputChange}
//         />
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Select from "react-select";
import { reactSelectStyles } from "@/style/selectStyles";
import InputField from "@/components/ui/InputField";
import PreviewPayment from "./PreviewPayment";
import ImageUploadField from "../../createLinkPage/ImageDropzone";

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
    <div className=" ">
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
        <PreviewPayment />
      </div>
    </div>
  );
}
