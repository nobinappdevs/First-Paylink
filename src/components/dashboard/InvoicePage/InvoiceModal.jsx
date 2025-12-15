"use client";

import { X, Download } from "lucide-react";
import { useRef } from "react";
import { InvoiceView } from "./InvoiceView";
import InvoiceWithPDF from "./InvoiceWithPDF";

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
        <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white px-6 py-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-800">
              Invoice Preview
            </h2>
            <p className="text-xs text-slate-500">
              {invoice.invoiceNumber}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* 🔥 Download Button */}
            <button
              onClick={() => pdfRef.current?.downloadPDF()}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 transition"
            >
              <Download size={16} />
              Download PDF
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition"
            >
              <X size={20} />
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
