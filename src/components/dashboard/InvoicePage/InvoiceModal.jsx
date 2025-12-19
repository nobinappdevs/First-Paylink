"use client";

import { X, Download } from "lucide-react";
import { useRef } from "react";
import { InvoiceView } from "./InvoiceView";
import InvoiceWithPDF from "./InvoiceWithPDF";
import Button from "@/components/ui/Button";

export default function InvoiceModal({ open, onClose, invoice }) {
  const pdfRef = useRef(null);

  if (!open || !invoice) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose} // ✅ outside click → close
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()} // ✅ prevent close on inside click
      >
        {/* ================= Header ================= */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-text/20 bg-white px-6 py-4">
          <div>
            <h4 className="text-lg font-semibold text-slate-800">
              Invoice Preview
            </h4>
            <h6 className="text-xs text-slate-500">
              {invoice.invoiceNumber}
            </h6>
          </div>

          <div className="flex items-center gap-2">
            {/* 🔥 Download Button */}
            <Button
              onClick={() => pdfRef.current?.downloadPDF()}
            >
              <Download size={16} />
              Download PDF
            </Button>

            {/* Close */}
            <button
              onClick={onClose}
              className="rounded-lg p-2 border-red-500 border text-red-500 cursor-pointer hover:bg-slate-100  transition"
            >
              <X size={26} />
            </button>
          </div>
        </div>

        {/* ================= Body ================= */}
        <div className="p-6 bg-slate-50">
          <InvoiceView data={invoice} />
        </div>

        {/* ================= Hidden PDF Renderer ================= */}
        <InvoiceWithPDF ref={pdfRef} data={invoice} />
      </div>
    </div>
  );
}
