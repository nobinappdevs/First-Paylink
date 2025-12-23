// "use client";
// import React, { useEffect, useState } from "react";
// import HistoryTable from "../dashboardHome/HistoryTable";
// import Pagination from "@/components/Sheared/Pagination";
// import Select from "react-select";
// import { reactSelectStyles } from "@/style/selectStyles";
// import InputField from "@/components/ui/InputField";
// import { Search } from "lucide-react";
// import { transactionHistoryAPI } from "@/services/apiClient";

// const Transections = () => {
//   const filterOptions = [
//     { value: "Filter", label: "Filter" },
//     { value: "today", label: "Today" },
//     { value: "week", label: "This Week" },
//     { value: "month", label: "This Month" },
//   ];

//     const [transaction, setTransaction] = useState(null);
//     console.log(transaction);
  
//     useEffect(() => {
//       const fetchDashboardData = async ()=>{
//         try {
//           const res = await transactionHistoryAPI();
//           setTransaction(res.data.data);
//         } catch (error) {
//             console.error(error.message);
//         }
//       }
//       fetchDashboardData();
//     }, [])
    

//   return (
//     <div className="bg-basic rounded-xl border border-text/15 w-full ">
//       <div className="p-4 border-b border-slate-100 md:flex justify-between items-center gap-3">
//         <div>
//           <h4 className="text-xl md:mb-0 mb-4 text-secondery font-bold">
//             Transaction Log
//           </h4>
//         </div>

//         <div className="relative flex flex-col md:flex-row gap-2.5 w-full md:w-auto">
//           {/* Select (auto width) */}
//           <div className="w-full md:w-auto min-w-40">
//             <Select
//               options={filterOptions}
//               instanceId="currency-select"
//               placeholder="Filter"
//               styles={reactSelectStyles}
//             />
//           </div>

//           {/* Input Field */}
//           <div className="w-full md:w-[260px]">
//             <InputField
//               icon={Search}
//               type="text"
//               placeholder="Search products..."
//             />
//           </div>
//         </div>
//       </div>

//       {/* tible */}
//       <HistoryTable />
//       {/* Pagination Section */}
//       <Pagination />
//     </div>
//   );
// };

// export default Transections;





"use client";

import React, { useEffect, useState } from "react";
import HistoryTable from "../dashboardHome/HistoryTable";
import Pagination from "@/components/Sheared/Pagination";
import Select from "react-select";
import { reactSelectStyles } from "@/style/selectStyles";
import InputField from "@/components/ui/InputField";
import { Search } from "lucide-react";
import { transactionHistoryAPI } from "@/services/apiClient";

const Transections = () => {
  const [transactions, setTransactions] = useState([]);
  const [allTransactions, setAllTransactions] = useState({});
  const [filterOptions, setFilterOptions] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchTransactionHistory = async () => {
      try {
        const res = await transactionHistoryAPI();
        const data = res.data.data;
        setAllTransactions(data.transactions);

        const flatTransactions = Object.values(data.transactions).flat();
        setTransactions(flatTransactions);
        const dynamicOptions = [
          { value: "all", label: "All Transactions" },
          ...Object.keys(data.transaction_types).map((key) => ({
            value: key,
            label: data.transaction_types[key],
          })),
        ];

        setFilterOptions(dynamicOptions);
        setSelectedFilter(dynamicOptions[0]);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchTransactionHistory();
  }, []);

  useEffect(() => {
    let filteredData = [];

    if (!selectedFilter || selectedFilter.value === "all") {
      filteredData = Object.values(allTransactions).flat();
    } else {
      filteredData = allTransactions[selectedFilter.value] || [];
    }

    if (searchText) {
      filteredData = filteredData.filter((item) =>
        item.trx?.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTransactions(filteredData);
  }, [selectedFilter, searchText, allTransactions]);

  return (
    <div className="bg-basic rounded-xl border border-text/15 w-full">
      {/* Header */}
      <div className="p-4 border-b border-slate-100 md:flex justify-between items-center gap-3">
        <div>
          <h4 className="text-xl md:mb-0 mb-4 text-secondery font-bold">
            Transaction Log
          </h4>
        </div>

        <div className="relative flex flex-col md:flex-row gap-2.5 w-full md:w-auto">
          {/* Dynamic Filter */}
          <div className="w-full md:w-auto min-w-40">
            <Select
              options={filterOptions}
              value={selectedFilter}
              onChange={setSelectedFilter}
              instanceId="transaction-filter"
              placeholder="Filter"
              styles={reactSelectStyles}
            />
          </div>

          {/* Search */}
          <div className="w-full md:w-[260px]">
            <InputField
              icon={Search}
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search by Trx ID..."
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <HistoryTable dashboardData={{ transactions }} />

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default Transections;



