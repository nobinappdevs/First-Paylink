import { InvoiceView } from "@/components/dashboard/InvoicePage/InvoiceView";
import Button from "@/components/Sheared/Button";
import Link from "next/link";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params; // ⬅️ MUST unwrap
  // Sample data structure to keep the component clean and reusable
  const invoiceData = {
    invoiceNumber: "INV-REGAEFGDIDZH",
    dateDue: "15 December 2025",
    senderName: "Natus et molestiae a",
    senderAddress: "43",
    recipientName: "Basil Rose",
    recipientEmail: "lutotin@mailinator.com",
    amountDue: 54677.0,
    currency: "FJ$", // Fijian Dollar used based on image
    items: [
      {
        description: "Proident mollit odi",
        qty: 107,
        unitPrice: 5110000000,
        amount: 5110000000,
      },
      // The image calculation seems off, but we'll use the provided display values
      {
        description: "Consulting Service Fee",
        qty: 1,
        unitPrice: 350.0,
        amount: 350.0,
      },
    ],
    totals: {
      totalQty: 107, // Using the image value
      subtotal: 54677.0,
      amountDue: 54677.0,
    },
  };

  return (
    <div className="">
      <InvoiceView data={invoiceData} />
     {/* ================= Actions ================= */}
       <div className="mt-8 flex gap-4 justify-center">
        <Link href={'/dashboard/invoice'}>
        <Button gradient size="lg"> Save as Draft</Button>
        </Link>
        <Link href={'/dashboard/invoice/share/20'}>
        <Button gradient size="lg"> Publish Invoice</Button>
        </Link>
       </div>
    </div>
  );
};

export default page;
