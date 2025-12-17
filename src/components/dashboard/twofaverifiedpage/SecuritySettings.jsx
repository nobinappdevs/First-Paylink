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
