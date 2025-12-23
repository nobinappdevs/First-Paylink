"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader = () => {
  return (
    <div>
      {/* ===== Header Skeleton ===== */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <Skeleton height={24} width={200} />
          <div className="mt-2">
            <Skeleton height={14} width={320} />
          </div>
        </div>

        <Skeleton height={40} width={140} borderRadius={8} />
      </div>

      {/* ===== Card Wrapper ===== */}
      <div className="bg-white rounded-xl border border-text/15 overflow-hidden">
        {/* Search Skeleton */}
        <div className="p-4 flex justify-end">
          <Skeleton height={40} width={260} borderRadius={8} />
        </div>

        {/* ===== Table Skeleton ===== */}
        <div className="overflow-x-auto w-full border-t border-slate-100">
          <table className="min-w-[700px] w-full">
            <thead>
              <tr>
                {[...Array(6)].map((_, i) => (
                  <th key={i} className="py-4 px-6">
                    <Skeleton height={14} width={80} />
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {[...Array(6)].map((_, row) => (
                <tr key={row} className="border-t">
                  {[...Array(6)].map((_, col) => (
                    <td key={col} className="py-4 px-6">
                      <Skeleton height={16} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ===== Footer Skeleton ===== */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 flex justify-between items-center">
          <Skeleton height={14} width={200} />
          <div className="flex gap-2">
            <Skeleton height={32} width={90} borderRadius={6} />
            <Skeleton height={32} width={90} borderRadius={6} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
