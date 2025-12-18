"use client";
import React, { useState, useRef, useCallback } from "react";
import { CheckCircle, Copy, Check } from "lucide-react";
import Button from "@/components/ui/Button";

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
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/60 shadow-md">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>

          <h4
            id="payment-successsecondery"
            className="mb-2 text-2xl font-semibold text-gray-800"
          >
            Payment Link Created
          </h4>

          <h6 className="mb-8 text-sm text-gray-500">
            Share this link to receive payment securely.
          </h6>
        </div>

        {/* Copy Section */}
        <div className="mb-8">
          <label
            htmlFor="payment-link"
            className="mb-2 block text-sm font-medium text-gray-600"
          >
            Payment link
          </label>

          <div className="flex overflow-hidden  rounded-[5px]  focus-within:ring-1 focus:ring-0 focus:border-primary">
            <input
              id="payment-link"
              ref={inputRef}
              type="text"
              readOnly
              value={paymentLink}
              onClick={() => inputRef.current?.select()}
              className="w-full bg-white rounded-l-md  border border-black/20 border-r-0 h-[45px] leading-[45px] px-[15px] py-2.5 text-[14px] font-medium text-[#425466] shadow-none outline-none focus:ring-0 focus:border-none"
              aria-readonly="true"
            />

            <button
              type="button"
              onClick={handleCopy}
              disabled={copied}
              aria-label={copied ? "Link copied" : "Copy payment link"}
              className={`flex w-16 items-center -my-2 cursor-pointer justify-center transition
                ${
                  copied
                    ? "bg-indigo-600"
                    : " bg-primary/80 hover:bg-primary/90"
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
        <Button className="w-full flex justify-center" size="lg">
          {" "}
          Create Another Link
        </Button>
      </div>
    </div>
  );
}
