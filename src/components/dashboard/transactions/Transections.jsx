"use client";
import React from "react";
import HistoryTable from "../dashboardHome/HistoryTable";
import Pagination from "@/components/Sheared/Pagination";
import { FaSearch } from "react-icons/fa";
import Select from "react-select";
import { reactSelectStyles } from "@/style/selectStyles";
import InputField from "@/components/ui/InputField";

const Transections = () => {
  const filterOptions = [
    { value: "Filter", label: "Filter" },
    { value: "today", label: "Today" },
    { value: "week", label: "This Week" },
    { value: "month", label: "This Month" },
  ];

  return (
    <div className="lg:p-6 py-3.5 md:p-4 p-1 bg-basic rounded-sm lg:rounded-[20px] shadow-md w-full ">
      {/* Search */}
      <div className="p-4 border-b border-slate-100 flex  justify-between items-center gap-3">
        <div className="">
          <h4 className="text-xl  text-secondery font-bold">
            Transaction Log
          </h4>
        </div>
        <div className="relative flex gap-x-2.5">
          <Select
            options={filterOptions}
            instanceId="currency-select"
            placeholder="Select Currency"
            styles={reactSelectStyles}
          />
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2  text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 w-full bg-white border border-[#e5e5e5] rounded-[5px] h-[45px] leading-[45px] px-[15px] py-2.5 text-[14px] font-medium text-[#425466] shadow-none outline-none focus:ring-0 focus:border-primary"
            />
          </div>
        </div>
      </div>
      {/* tible */}
      <HistoryTable />
      {/* Pagination Section */}
      <Pagination />
    </div>
  );
};

export default Transections;

// "use client";

// import React, { useState } from "react";
// import HistoryTable from "../dashboardHome/HistoryTable";
// import Pagination from "@/components/Sheared/Pagination";
// import { FaSearch } from "react-icons/fa";
// import Select from "react-select";
// import { reactSelectStyles } from "@/style/selectStyles";

// const Transections = () => {
//   const [selectedFilter, setSelectedFilter] = useState(null);
//   const [search, setSearch] = useState("");

//   const filterOptions = [
//     { value: "", label: "Filter" },
//     { value: "today", label: "Today" },
//     { value: "week", label: "This Week" },
//     { value: "month", label: "This Month" },
//   ];

//   return (
//     <div className="lg:p-6 py-3.5 md:p-4 p-2 bg-basic rounded-sm lg:rounded-[20px] shadow-md w-full">
//       {/* Header */}
//       <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
//         <h2 className="text-xl  text-secondery font-bold">
//           Transaction Log
//         </h2>

//         {/* Filter + Search */}
//         <div className="flex gap-2.5 w-full sm:w-auto">
//           {/* React Select */}
//           <div className="min-w-[160px]">
//             <Select
//               options={filterOptions}
//               value={selectedFilter}
//               onChange={setSelectedFilter}
//               placeholder="Filter"
//               isSearchable={false}
//               styles={reactSelectStyles}
//               instanceId="transaction-filter"
//             />
//           </div>

//           {/* Search Input */}
//           <div className="relative w-full sm:w-[220px]">
//             <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//             <input
//               type="text"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search..."
//               className="pl-10 pr-3 py-2 w-full rounded-lg border border-black/20 text-sm placeholder:text-text focus:ring-primary focus:border-primary"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Table */}
//       <HistoryTable
//         filter={selectedFilter?.value}
//         search={search}
//       />

//       {/* Pagination */}
//       <Pagination />
//     </div>
//   );
// };

// export default Transections;
