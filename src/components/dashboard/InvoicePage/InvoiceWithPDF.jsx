

'use client';

import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { InvoiceView } from './InvoiceView';

/**
 * This component exposes a downloadPDF() method
 * so the parent can trigger it
 */
// eslint-disable-next-line react/display-name
const InvoiceWithPDF = forwardRef(({ data }, ref) => {
  const invoiceRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const downloadPDF = async () => {
    if (!invoiceRef.current || isGenerating) return;

    setIsGenerating(true);

    try {
      const html2pdf = (await import('html2pdf.js')).default;

      html2pdf()
        .set({
          margin: 10,
          filename: `invoice-${data.invoiceNumber}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        })
        .from(invoiceRef.current)
        .save();
    } catch (err) {
      console.error('PDF generate failed', err);
    } finally {
      setIsGenerating(false);
    }
  };

  // 🔥 Expose function to parent
  useImperativeHandle(ref, () => ({
    downloadPDF,
  }));

  return (
    <div className="hidden">
      {/* This DOM will be captured */}
      <div
        ref={invoiceRef}
        className="mx-auto max-w-4xl bg-white p-10"
      >
        <div className=" bg-body">
        <InvoiceView data={data} />

        </div>
      </div>
    </div>
  );
});

export default InvoiceWithPDF;
