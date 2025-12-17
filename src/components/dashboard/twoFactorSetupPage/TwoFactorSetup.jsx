"use client";

import React from "react";
import Image from "next/image";
import { Copy, Smartphone, Apple, ShieldCheck, Info } from "lucide-react";
import Button from "@/components/Sheared/Button";

const TwoFactorSetup = () => {
  const address = "D4HPXRZFBVAXOAGS";

  return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-6">
      {/* LEFT – QR & SECRET */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600">
            <ShieldCheck size={22} />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-800">
            Security Configuration
          </h2>
        </div>

        {/* Secret Key */}
        <div className="mb-6">
          <label className="block text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">
            Secret Address
          </label>
          <div className="flex items-stretch">
            <input
              readOnly
              value={address}
              className="flex-1 px-4 py-3 text-sm font-mono text-gray-700 bg-gray-50 border border-gray-200 rounded-l-xl outline-none"
            />
            <button
              className="px-4 bg-slate-900 text-white rounded-r-xl hover:bg-indigo-600 transition cursor-pointer"
              onClick={() => navigator.clipboard.writeText(address)}
            >
              <Copy size={18} />
            </button>
          </div>
        </div>

        {/* QR */}
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="p-4 border-2 border-dashed border-gray-200 rounded-2xl bg-white mb-4">
            <Image
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${address}`}
              alt="QR Code"
              width={180}
              height={180}
              className="w-40 h-40 sm:w-44 sm:h-44"
            />
          </div>
          <p className="text-center text-sm text-gray-500 max-w-xs">
            Scan this QR code using your authenticator app to connect your
            account securely.
          </p>
        </div>

        {/* Action */}
        <div className="mt-6">
          <Button className="w-full justify-center" gradient>
            Enable Two-Factor Authentication
          </Button>
        </div>
      </div>

      {/* RIGHT – APP INFO */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800 mb-4">
          Google <span className="text-indigo-600">Authenticator</span>
        </h2>

        {/* Info Box */}
        <div className="flex gap-3 bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-xl mb-8">
          <Info size={20} className="text-indigo-600 shrink-0 mt-0.5" />
          <p className="text-sm text-gray-600 leading-relaxed">
            Google Authenticator provides an extra security layer by generating
            time-based verification codes.
            <span className="ml-1 text-indigo-600 font-semibold cursor-pointer hover:underline">
              Learn more
            </span>
          </p>
        </div>

        {/* App Logo */}
        <div className="flex justify-center mb-10">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gray-100 flex items-center justify-center">
            <Image
              src="/google-authenticator.png" // 👉 place image in public folder
              alt="Google Authenticator"
              width={90}
              height={90}
              className="object-contain"
            />
          </div>
        </div>

        {/* Store Buttons */}
        <div className="space-y-4">
          <Button className="w-full ">
            <Smartphone size={20} />
            Google Play
          </Button>

          <Button className="w-full">
            <Apple size={20} />
            App Store
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TwoFactorSetup;
