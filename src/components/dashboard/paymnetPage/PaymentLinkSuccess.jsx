"use client";
import React, { useState, useRef, useCallback } from "react";
import { CheckCircle, Copy, Check } from "lucide-react";
import Button from "@/components/Sheared/Button";

export default function PaymentLinkSuccess({ paymentLink }) {
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(paymentLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  }, [paymentLink]);

  return (
    <div className=" flex items-center h-screen justify-center">
    <div className="w-full max-w-xl  rounded-2xl bg-white p-6 sm:p-10 shadow-xl border border-gray-100">
      {/* Success Icon */}
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary_light/60 shadow-md">
          <CheckCircle className="h-10 w-10 text-white" />
        </div>

        <h1
          id="payment-success-title"
          className="mb-2 text-2xl font-semibold text-gray-800"
        >
          Payment Link Created
        </h1>

        <p className="mb-8 text-sm text-gray-500">
          Share this link to receive payment securely.
        </p>
      </div>

      {/* Copy Section */}
      <div className="mb-8">
        <label
          htmlFor="payment-link"
          className="mb-2 block text-sm font-medium text-gray-600"
        >
          Payment link
        </label>

        <div className="flex overflow-hidden rounded-lg border border-gray-300 focus-within:ring-2 focus-within:ring-primary_light/50">
          <input
            id="payment-link"
            ref={inputRef}
            type="text"
            readOnly
            value={paymentLink}
            onClick={() => inputRef.current?.select()}
            className="flex-1 truncate bg-gray-50 px-4  py-3 text-sm text-gray-700 focus:outline-none"
            aria-readonly="true"
          />

          <button
            type="button"
            onClick={handleCopy}
            disabled={copied}
            aria-label={copied ? "Link copied" : "Copy payment link"}
            className={`flex w-16 items-center cursor-pointer justify-center transition
                ${
                  copied
                    ? "bg-indigo-600"
                    : " bg-primary_light/80 hover:bg-primary_light/90"
                } text-white`}
          >
            {copied ? (
              <Check className="h-5 w-5" />
            ) : (
              <Copy className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Action Button */}
      <Button gradient className="w-full flex justify-center" size="lg">
        {" "}
        Create Another Link
      </Button>
    </div>
    </div>
  );
}
