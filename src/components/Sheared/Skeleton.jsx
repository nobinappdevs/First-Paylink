// "use client";

// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

// const SkeletonLoader = () => {
//   return (
//     <div>
//       {/* ===== Header Skeleton ===== */}
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <Skeleton height={24} width={200} />
//           <div className="mt-2">
//             <Skeleton height={14} width={320} />
//           </div>
//         </div>

//         <Skeleton height={40} width={140} borderRadius={8} />
//       </div>

//       {/* ===== Card Wrapper ===== */}
//       <div className="bg-white rounded-xl border border-text/15 overflow-hidden">
//         {/* Search Skeleton */}
//         <div className="p-4 flex justify-end">
//           <Skeleton height={40} width={260} borderRadius={8} />
//         </div>

//         {/* ===== Table Skeleton ===== */}
//         <div className="overflow-x-auto w-full border-t border-slate-100">
//           <table className="min-w-[700px] w-full">
//             <thead>
//               <tr>
//                 {[...Array(6)].map((_, i) => (
//                   <th key={i} className="py-4 px-6">
//                     <Skeleton height={14} width={80} />
//                   </th>
//                 ))}
//               </tr>
//             </thead>

//             <tbody>
//               {[...Array(6)].map((_, row) => (
//                 <tr key={row} className="border-t">
//                   {[...Array(6)].map((_, col) => (
//                     <td key={col} className="py-4 px-6">
//                       <Skeleton height={16} />
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* ===== Footer Skeleton ===== */}
//         <div className="bg-slate-50 border-t border-slate-200 p-4 flex justify-between items-center">
//           <Skeleton height={14} width={200} />
//           <div className="flex gap-2">
//             <Skeleton height={32} width={90} borderRadius={6} />
//             <Skeleton height={32} width={90} borderRadius={6} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkeletonLoader;


// "use client";

// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

// const SkeletonLoader = ({ layout = "default" }) => {
//   /* ================= DEFAULT TABLE SKELETON ================= */
//   if (layout === "default") {
//     return (
//       <div>
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <div>
//             <Skeleton height={24} width={200} />
//             <div className="mt-2">
//               <Skeleton height={14} width={320} />
//             </div>
//           </div>
//           <Skeleton height={40} width={140} borderRadius={8} />
//         </div>

//         <div className="bg-white rounded-xl border border-text/15 overflow-hidden">
//           <div className="p-4 flex justify-end">
//             <Skeleton height={40} width={260} borderRadius={8} />
//           </div>

//           <div className="overflow-x-auto w-full border-t border-slate-100">
//             <table className="min-w-[700px] w-full">
//               <thead>
//                 <tr>
//                   {[...Array(6)].map((_, i) => (
//                     <th key={i} className="py-4 px-6">
//                       <Skeleton height={14} width={80} />
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {[...Array(6)].map((_, row) => (
//                   <tr key={row} className="border-t">
//                     {[...Array(6)].map((_, col) => (
//                       <td key={col} className="py-4 px-6">
//                         <Skeleton height={16} />
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="bg-slate-50 border-t border-slate-200 p-4 flex justify-between items-center">
//             <Skeleton height={14} width={200} />
//             <div className="flex gap-2">
//               <Skeleton height={32} width={90} borderRadius={6} />
//               <Skeleton height={32} width={90} borderRadius={6} />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   /* ================= LAYOUT SKELETON ================= */
//   if (layout === "layout") {
//     return (
// <div className="flex min-h-screen gap-6 p-6">
//       {/* ===== Sidebar Skeleton ===== */}
//       <div className="w-64 space-y-8">
//         {[...Array(8)].map((_, i) => (
//           <Skeleton key={i} height={60} borderRadius={8} />
//         ))}
//       </div>

//       {/* ===== Main Content Skeleton ===== */}
//       <div className="flex-1 space-y-6">
//         <Skeleton height={60} borderRadius={12} />
//         <div className="grid grid-cols-4 gap-4">
//           {[...Array(4)].map((_, i) => (
//             <Skeleton key={i} height={120} borderRadius={12} />
//           ))}
//         </div>
//         <Skeleton height={300} borderRadius={12} />
//       </div>
//     </div>
//     );
//   }

//   return null;
// };

// export default SkeletonLoader;





"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader = ({ layout = "default" }) => {
  /* ================= DEFAULT TABLE SKELETON ================= */
  if (layout === "default") {
    return (
      <div className="p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2 sm:gap-0">
          <div>
            <Skeleton height={24} width={200} />
            <div className="mt-2">
              <Skeleton height={14} width="100%" maxWidth={320} />
            </div>
          </div>
          <Skeleton height={40} width={140} borderRadius={8} />
        </div>

        <div className="bg-white rounded-xl border border-text/15 overflow-hidden">
          <div className="p-4 flex justify-end">
            <Skeleton height={40} width="100%" maxWidth={260} borderRadius={8} />
          </div>

          <div className="overflow-x-auto w-full border-t border-slate-100">
            <table className="min-w-[600px] sm:min-w-[700px] w-full">
              <thead>
                <tr>
                  {[...Array(6)].map((_, i) => (
                    <th key={i} className="py-4 px-2 sm:px-6">
                      <Skeleton height={14} width={80} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[...Array(6)].map((_, row) => (
                  <tr key={row} className="border-t">
                    {[...Array(6)].map((_, col) => (
                      <td key={col} className="py-4 px-2 sm:px-6">
                        <Skeleton height={16} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 border-t border-slate-200 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
            <Skeleton height={14} width={200} />
            <div className="flex gap-2 mt-2 sm:mt-0">
              <Skeleton height={32} width={90} borderRadius={6} />
              <Skeleton height={32} width={90} borderRadius={6} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ================= LAYOUT SKELETON ================= */
  if (layout === "layout") {
    return (
      <div className="flex flex-col md:flex-row min-h-screen gap-6 p-4 sm:p-6">
        {/* ===== Sidebar Skeleton ===== */}
        <div className="w-full md:w-64 space-y-4 md:space-y-8 mb-4 md:mb-0">
          {[...Array(8)].map((_, i) => (
            <Skeleton key={i} height={60} borderRadius={8} />
          ))}
        </div>

        {/* ===== Main Content Skeleton ===== */}
        <div className="flex-1 space-y-6">
          <Skeleton height={60} borderRadius={12} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} height={120} borderRadius={12} />
            ))}
          </div>
          <Skeleton height={300} borderRadius={12} />
        </div>
      </div>
    );
  }

  return null;
};

export default SkeletonLoader;
