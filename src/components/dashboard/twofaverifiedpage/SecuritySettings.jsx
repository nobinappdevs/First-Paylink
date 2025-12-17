// import React from 'react';
// import { Copy, Smartphone, Apple, CheckCircle2 } from 'lucide-react';

// const SecuritySettings = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 p-4 md:p-8 space-y-8">
//       <div className="max-w-6xl mx-auto space-y-8">

//         {/* KYC Information Section */}
//         <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8">
//           <div className="flex items-center gap-3 mb-2">
//             <h2 className="text-xl font-bold text-slate-800">KYC Information</h2>
//             <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
//               <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
//               <span className="text-xs font-bold text-emerald-700">Verified</span>
//             </div>
//           </div>
//           <p className="text-emerald-500 text-sm font-medium">
//             Your KYC information is verified
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default SecuritySettings;

import React from "react";

const SecuritySettings = () => {
  return (
    <section
      aria-labelledby="kyc-heading"
      className=""
    >
      <div className="mx-auto max-w-6xl">
        {/* KYC Information Card */}
        <div className="rounded-2xl border border-gray-100 font-roboto bg-white p-6 shadow-sm sm:p-8">
          <header className="flex flex-wrap items-center gap-3">
            <h2
              id="kyc-heading"
              className="text-lg font-bold font-montserrat text-slate-800 sm:text-xl"
            >
              KYC Information
            </h2>

            {/* Status Badge */}
            <span
              role="status"
              aria-live="polite"
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Verified
            </span>
          </header>

          <p className="mt-2 text-sm text-emerald-600">
            Your KYC information has been successfully verified.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecuritySettings;
