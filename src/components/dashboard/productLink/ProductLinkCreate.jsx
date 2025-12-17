// 'use client'
// import { useState } from "react";
// import Preview from "../createLinkPage/Preview";
// export default function ProductLinkCreate() {
//       const [activeTab, setActiveTab] = useState("fixed");
//       const [formData, setFormData] = useState({
//         title: "",
//         description: "",
//         amount: "0.00",
//         minAmount: "",
//         maxAmount: "",
//         currency: "",
//         email: "",
//         cardName: "",
//         cardNumber: "",
//         saveInfo: false,
//         setLimits: false,
//       });
//       console.log(formData);
//         const handleInputChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };
//   return (
//     <div className="min-h-screen bg-gray-50 p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Form Section */}
//         <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6">
//           {/* Currency */}
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-medium mb-2">
//               Currency*
//             </label>
//             <input
//               type="text"
//               value="AUD (Australian dollar)"
//               readOnly
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
//             />
//           </div>

//           {/* Price and Quantity */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//             <div>
//               <label className="block text-gray-700 text-sm font-medium mb-2">
//                 Price*
//               </label>
//               <div className="relative">
//                 <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700">
//                   $
//                 </span>
//                 <input
//                   type="text"
//                   value="30.00"
//                   readOnly
//                   className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700"
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-gray-700 text-sm font-medium mb-2">
//                 Quantity*
//               </label>
//               <input
//                 type="text"
//                 value="1"
//                 readOnly
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700"
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button className="w-full bg-slate-800 hover:bg-slate-900 text-white font-medium py-3 px-6 rounded-lg transition-colors">
//             Submit
//           </button>
//         </div>

//         {/* Preview Section */}
//         <Preview formData={formData} activeTab={activeTab} handleInputChange={handleInputChange} />
//       </div>
//     </div>
//   );
// }

// 'use client';

// import { useState } from "react";
// import Preview from "../createLinkPage/Preview";

// export default function ProductLinkCreate() {
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

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   return (
//       <div className="">

//         {/* Layout Wrapper */}
//         <div className="flex flex-col lg:flex-row gap-6">

//           {/* ===== Left: Form Section ===== */}
//           <div className="w-full lg:w-1/2">
//             <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">

//               {/* Currency */}
//               <div className="mb-6">
//                 <label className="block text-gray-700 text-sm font-medium mb-2">
//                   Currency*
//                 </label>
//                 <input
//                   type="text"
//                   value="AUD (Australian dollar)"
//                   readOnly
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
//                 />
//               </div>

//               {/* Price & Quantity */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label className="block text-gray-700 text-sm font-medium mb-2">
//                     Price*
//                   </label>
//                   <div className="relative">
//                     <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700">
//                       $
//                     </span>
//                     <input
//                       type="text"
//                       value="30.00"
//                       readOnly
//                       className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 text-sm font-medium mb-2">
//                     Quantity*
//                   </label>
//                   <input
//                     type="text"
//                     value="1"
//                     readOnly
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700"
//                   />
//                 </div>
//               </div>

//               {/* Submit */}
//               <button className="w-full bg-slate-800 hover:bg-slate-900 text-white font-medium py-3 px-6 rounded-lg transition-colors cursor-pointer">
//                 Submit
//               </button>
//             </div>
//           </div>

//           {/* ===== Right: Preview Section ===== */}
//           <div className="w-full lg:w-1/2">
//             <Preview
//               formData={formData}
//               activeTab={activeTab}
//               handleInputChange={handleInputChange}
//             />
//           </div>

//         </div>
//       </div>

//   );
// }

import LinkPreview from "./LinkPreview";

export default function ProductLinkCreate() {
  return (
    <div className="flex flex-col font-roboto lg:flex-row gap-6">
      {/* ===== Left Side ===== */}
      <div className="w-full lg:w-1/2 xl:p-8 p-4 bg-white h-auto">
        <div className="rounded-2xl space-y-6">
          {/* Select */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Select Type
            </label>
            <select
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm shadow-gray-200/60 focus:ring-2 focus:ring-slate-800 focus:shadow-md focus:outline-none cursor-pointer transition-all"
            >
              <option>Fixed Price</option>
              <option>Variable Price</option>
              <option>Subscription</option>
            </select>
          </div>

          {/* Input 1 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Price
            </label>
            <input
              type="text"
              placeholder="Enter price"
              className="w-full px-4 py-3 rounded-xl border border-gray-200  shadow-sm shadow-gray-200/60 focus:ring-2 focus:ring-slate-800 focus:shadow-md focus:outline-none transition-all"
            />
          </div>

          {/* Input 2 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Quantity
            </label>
            <input
              type="text"
              placeholder="Enter quantity"
              className="w-full px-4 py-3 rounded-xl border border-gray-200  shadow-sm shadow-gray-200/60 focus:ring-2 focus:ring-slate-800 focus:shadow-md focus:outline-none transition-all"
            />
          </div>

          {/* Input 3 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description
            </label>
            <input
              type="text"
              placeholder="Optional description"
              className="w-full px-4 py-3 rounded-xl border border-gray-200  shadow-sm shadow-gray-200/60 focus:ring-2 focus:ring-slate-800 focus:shadow-md focus:outline-none transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            className="w-full bg-slate-900 hover:bg-slate-800 text-white  py-3 rounded-xl font-bold shadow-lg shadow-slate-900/30 transition-all cursor-pointer active:scale-[0.98]"
          >
            Submit
          </button>
        </div>
      </div>

      {/* ===== Right Side Preview ===== */}
      <div className="w-full lg:w-1/2 xl:p-8 p-4 ">
        <LinkPreview />
      </div>
    </div>
  );
}
