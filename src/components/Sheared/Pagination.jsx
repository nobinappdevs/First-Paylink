// import { ChevronLeft, ChevronRight } from "lucide-react";
// import React from "react";

// const Pagination = () => {
//   return (
//     <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8 pb-4">
//       {/* -------- Prev Button -------- */}
//       <button
//         className="flex items-center justify-center cursor-pointer
//       h-9 sm:h-10
//       px-3 sm:px-4
//       text-sm font-medium
//       rounded-xl
//       border border-gray-200
//       bg-white
//       text-gray-600
//       transition-all duration-200
//       hover:border-seconbg-secondery hover:text-seconbg-secondery
//       hover:shadow-md hover:shadow-seconbg-secondery
//       disabled:opacity-50 disabled:cursor-not-allowed
//       group"
//       >
//         <ChevronLeft
//           size={18}
//           className="transition-transform group-hover:-translate-x-0.5"
//         />
//         <span className="hidden sm:inline ml-1">Prev</span>
//       </button>

//       {/* -------- Page Numbers -------- */}
//       <div
//         className="flex items-center gap-1.5
//       px-2 py-1
//       max-w-[220px] sm:max-w-none
//       overflow-x-auto scrollbar-hide
//       bg-gray-50/50
//       rounded-2xl
//       border border-gray-100
//       shadow-inner"
//       >
//         {/* Active */}
//         <button
//           className="h-9 w-9 sm:h-10 sm:w-10 cursor-pointer
//         shrink-0
//         flex items-center justify-center
//         text-sm font-bold
//         rounded-xl
//         bg-secondery text-white
//         shadow-lg shadow-seconbg-secondery
//         active:scale-95 transition-transform"
//         >
//           1
//         </button>

//         {[2, 3].map((page) => (
//           <button
//             key={page}
//             className="h-9 w-9 sm:h-10 sm:w-10 cursor-pointer
//           shrink-0
//           flex items-center justify-center
//           text-sm font-semibold
//           rounded-xl
//           text-gray-600
//           hover:bg-white hover:border hover:border-gray-200
//           hover:text-seconbg-secondery
//           hover:shadow-sm
//           transition-all"
//           >
//             {page}
//           </button>
//         ))}

//         <span className="px-2 text-gray-400 font-bold shrink-0">...</span>

//         <button
//           className="h-9 w-9 sm:h-10 sm:w-10 cursor-pointer
//         shrink-0
//         flex items-center justify-center
//         text-sm font-semibold
//         rounded-xl
//         text-gray-600
//         hover:bg-white hover:border hover:border-gray-200
//         hover:text-seconbg-secondery
//         hover:shadow-sm
//         transition-all"
//         >
//           10
//         </button>
//       </div>

//       {/* -------- Next Button -------- */}
//       <button
//         className="flex items-center justify-center cursor-pointer
//       h-9 sm:h-10
//       px-3 sm:px-4
//       text-sm font-medium
//       rounded-xl
//       border border-gray-200
//       bg-white
//       text-gray-700
//       transition-all duration-200
//       hover:border-seconbg-secondery hover:text-seconbg-secondery
//       hover:shadow-md hover:shadow-seconbg-secondery
//       group"
//       >
//         <span className="hidden sm:inline mr-1">Next</span>
//         <ChevronRight
//           size={18}
//           className="transition-transform group-hover:translate-x-0.5"
//         />
//       </button>
//     </div>
//   );
// };

// export default Pagination;


import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const Pagination = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8 pb-4">
      {/* Prev Button */}
      <button className="flex items-center justify-center cursor-pointer h-9 sm:h-10 px-3 sm:px-4 text-sm font-medium rounded-xl border border-gray-200 bg-white text-gray-600 transition-all duration-200 hover:border-seconbg-secondery hover:text-seconbg-secondery hover:shadow-md hover:shadow-seconbg-secondery disabled:opacity-50 disabled:cursor-not-allowed group">
        <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-0.5" />
        <span className="hidden sm:inline ml-1">Prev</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1.5 px-2 py-1 max-w-[220px] sm:max-w-none overflow-x-auto scrollbar-hide bg-gray-50/50 rounded-2xl border border-gray-100 shadow-inner">
        {/* Active */}
        <button className="h-9 w-9 sm:h-10 sm:w-10 cursor-pointer shrink-0 flex items-center justify-center text-sm font-bold rounded-xl bg-secondery text-white shadow-lg shadow-seconbg-secondery active:scale-95 transition-transform">
          1
        </button>

        {[2, 3].map((page) => (
          <button
            key={page}
            className="h-9 w-9 sm:h-10 sm:w-10 cursor-pointer shrink-0 flex items-center justify-center text-sm font-semibold rounded-xl text-gray-600 hover:bg-white hover:border hover:border-gray-200 hover:text-seconbg-secondery hover:shadow-sm transition-all"
          >
            {page}
          </button>
        ))}

        <span className="px-2 text-gray-400 font-bold shrink-0">...</span>

        <button className="h-9 w-9 sm:h-10 sm:w-10 cursor-pointer shrink-0 flex items-center justify-center text-sm font-semibold rounded-xl text-gray-600 hover:bg-white hover:border hover:border-gray-200 hover:text-seconbg-secondery hover:shadow-sm transition-all">
          10
        </button>
      </div>

      {/* Next Button */}
      <button className="flex items-center justify-center cursor-pointer h-9 sm:h-10 px-3 sm:px-4 text-sm font-medium rounded-xl border border-gray-200 bg-white text-gray-700 transition-all duration-200 hover:border-seconbg-secondery hover:text-seconbg-secondery hover:shadow-md hover:shadow-seconbg-secondery group">
        <span className="hidden sm:inline mr-1">Next</span>
        <ChevronRight size={18} className="transition-transform group-hover:translate-x-0.5" />
      </button>
    </div>
  );
};

export default Pagination;
