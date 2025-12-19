// 'use client';

// import React from 'react';

// export  const InvoiceView = ({ data }) => {
//   // Function to format currency (ensures consistency)
//   const formatCurrency = (amount, currency) =>
//     `${currency}${amount.toLocaleString('en-US', {
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2,
//     })}`;

//   const amountDue = formatCurrency(data.amountDue, data.currency);
//   const subtotal = formatCurrency(data.totals.subtotal, data.currency);
//   const finalAmount = formatCurrency(data.totals.amountDue, data.currency);

//   const handleSaveDraft = () => {
//     console.log('Saving invoice as draft...');
//     // Add your draft saving logic here
//   };

//   const handlePublish = () => {
//     console.log('Publishing invoice...');
//     // Add your publish/send logic here
//   };

//   return (
//     <main
//       className="flex min-h-screen flex-col items-center  px-4 py-10"
//       aria-labelledby="invoicesecondery"

//     >
//       {/* ================= Invoice Card ================= */}
//       <article
//         className="w-full bg-basic max-w-4xl overflow-hidden rounded-xl  shadow-xl"
//         aria-describedby="invoice-footer"
//       >
//         <section className="px-6 py-8 sm:px-10 sm:py-12">

//           {/* -------- Header and Sender Info -------- */}
//           <header className="mb-10 flex items-start justify-between">
//             <h1
//               id="invoicesecondery"
//               className="text-3xl font-extrasemifont-semibold tracking-tight "
//             >
//               Invoice
//             </h1>

//             <address className="not-italic text-right">
//               <p className="text-lg font-semisemifont-semibold ">
//                 {data.senderName}
//               </p>
//               <p className="text-sm ">
//                 {data.senderAddress}
//               </p>
//             </address>
//           </header>

//           {/* -------- Meta Info and Bill To -------- */}
//           <section className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 text-sm">
//             <div>
//               <dl className="space-y-3">
//                 <div>
//                   <dt className="">Invoice number</dt>
//                   <dd className="font-semisemifont-semibold ">
//                     {data.invoiceNumber}
//                   </dd>
//                 </div>
//                 <div>
//                   <dt className="">Date due</dt>
//                   <dd className="font-semisemifont-semibold ">
//                     {data.dateDue}
//                   </dd>
//                 </div>
//               </dl>
//             </div>

//             <div className="sm:text-right">
//               <dl className="space-y-1">
//                 <dt className="">Bill to</dt>
//                 <dd className="font-semisemifont-semibold ">
//                   {data.recipientName}
//                 </dd>
//                 <dd className="">
//                   {data.recipientEmail}
//                 </dd>
//               </dl>
//             </div>
//           </section>

//           {/* -------- Amount Due Banner (Based on Image 1) -------- */}
//           <div
//             className="mb-12 rounded-lg  px-6 py-5 text-center"
//             aria-live="polite"
//           >
//             <p className="text-sm  font-medium">
//               Amount Due
//             </p>
//             <p className="mt-1 text-3xl font-extrasemifont-semibold">
//               {amountDue}
//             </p>
//             <p className="mt-1 text-sm ">
//               Due {data.dateDue}
//             </p>
//           </div>

//           {/* -------- Items Table -------- */}
//           <section aria-labelledby="items-heading" className="mb-10">
//             <h2 id="items-heading" className="sr-only">
//               Invoice items
//             </h2>

//             <table className="w-full border-collapse text-sm">
//               <caption className="sr-only">
//                 List of items in this invoice
//               </caption>

//               <thead>
//                 <tr className="border-b  text-left ">
//                   <th scope="col" className="py-3 pr-2 w-1/2 font-medium">
//                     Description
//                   </th>
//                   <th scope="col" className="py-3 text-right font-medium">
//                     Qty
//                   </th>
//                   <th
//                     scope="col"
//                     className="hidden py-3 text-right sm:table-cell font-medium"
//                   >
//                     Unit price
//                   </th>
//                   <th scope="col" className="py-3 text-right font-medium">
//                     Amount
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {data.items.map((item, index) => (
//                   <tr
//                     key={index}
//                     className="border-b  last:border-b-0"
//                   >
//                     <td className="py-4 pr-2 font-medium">
//                       {item.description}
//                     </td>
//                     <td className="py-4 text-right">
//                       {item.qty}
//                     </td>
//                     <td className="hidden py-4 text-right sm:table-cell ">
//                       {formatCurrency(item.unitPrice, data.currency)}
//                     </td>
//                     <td className="py-4 text-right font-semisemifont-semibold ">
//                       {formatCurrency(item.amount, data.currency)}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </section>

//           {/* -------- Totals Summary -------- */}
//           <section className="flex justify-end">
//             <div className="w-full max-w-xs space-y-3 text-sm">

//               <div className="flex justify-between">
//                 <span className="">Total Qty</span>
//                 <span className="font-semisemifont-semibold ">
//                   {data.totals.totalQty}
//                 </span>
//               </div>

//               <div className="flex justify-between">
//                 <span className="">Subtotal</span>
//                 <span className="font-semisemifont-semibold ">
//                   {subtotal}
//                 </span>
//               </div>

//               <div className="flex justify-between border-t  pt-4 mt-4">
//                 <span className="text-lg font-semibold ">
//                   Amount due
//                 </span>
//                 <span className="text-lg font-semibold ">
//                   {finalAmount}
//                 </span>
//               </div>
//             </div>
//           </section>

//           {/* -------- Footer Note -------- */}
//           <footer
//             id="invoice-footer"
//             className="mt-12 border-t pt-6 text-center text-xs"
//           >
//             {data.invoiceNumber} • {amountDue} • {data.dateDue}
//           </footer>
//         </section>
//       </article>
//     </main>
//   );
// };

"use client";

import Image from "next/image";
import React from "react";
import logo from '@assets/logo.webp'

// === MOCK DATA: ইমেজের ডেটা অনুযায়ী স্ট্যাটিক ডেটা ব্যবহার করা হয়েছে ===
const invoiceData = {
  // ব্র্যান্ডিং এবং প্রেরক তথ্য
  sender: {
    name: "xyz",
    logoColor: "#7367f0", // ইমেজের বেগুনি কালারের HEX কোড
    addressLine1: "abc",
    addressLine2: "New York, 10001, USA",
    phone: "+1 (123) 456 7891, +44 (876) 543 2198",
  },
  // ইনভয়েসের মেটা তথ্য
  invoiceMeta: {
    number: "#86423",
    dateIssues: "April 25, 2021",
    dateDue: "May 25, 2021",
  },
  // গ্রাহকের তথ্য
  recipient: {
    name: "Thomas shelby",
    company: "Shelby Company Limited",
    address: "Small Heath, B10 0HF, UK",
    phone: "718-986-6062",
    email: "peakyFBlinders@gmail.com",
  },
  // বিলিং/পেমেন্ট তথ্য
  billing: {
    totalDue: "$12,110.55",
    bankName: "American Bank",
    country: "United States",
    iban: "ETD95476213874685",
    swiftCode: "BR91905",
  },
  // আইটেম টেবিল ডেটা
  items: [
    {
      item: "Vuexy Admin Template",
      description: "HTML Admin Template",
      cost: 32,
      qty: 1,
      price: 32.0,
    },
    {
      item: "Frest Admin Template",
      description: "Angular Admin Template",
      cost: 22,
      qty: 1,
      price: 22.0,
    },
    {
      item: "Apex Admin Template",
      description: "HTML Admin Template",
      cost: 17,
      qty: 2,
      price: 34.0,
    },
    {
      item: "Robust Admin Template",
      description: "React Admin Template",
      cost: 66,
      qty: 1,
      price: 66.0,
    },
  ],
  // টোটাল তথ্য (ইমেজ থেকে সরাসরি মানগুলি ব্যবহার করা হয়েছে)
  totals: {
    subtotal: 1800,
    discount: 28,
    taxPercent: 21,
    total: 1690,
  },
  salesperson: "Alfie Solomons",
};

// কারেন্সি ফরম্যাট করার ফাংশন
const formatAmount = (amount) => {
  return amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const InvoiceView = () => {
  const data = invoiceData;
  const highlightColor = data.sender.logoColor; // #7367f0
  const lightHighlightBg = "#f5f4ff"; // ইমেজের হালকা বেগুনি ব্যাকগ্রাউন্ডের জন্য নিরাপদ HEX

  return (
    <div
      // মেইন কার্ডের ডিজাইন: কোনো শ্যাডো নেই, হালকা বর্ডার
      className="rounded-xl bg-white text-text border border-border overflow-hidden max-w-4xl mx-auto"
    >
      <div className="p-6">
        {/* -------------------- Top Header Section -------------------- */}
        <header className="mb-10 flex flex-col sm:flex-row justify-between pb-6 border-b border-border">
          {/* Left Side: Logo and Sender Info */}
          <div className="mb-6 sm:mb-0 w-full sm:w-1/2">
            <div className="flex items-center mb-4">
              {/* Logo/Icon Area */}
              <Image alt="Logo" src={logo} className="w-auto h-6" />
            </div>
            <address className="not-italic text-sm text-text space-y-1">
              <p>{data.sender.addressLine1}</p>
              <p>{data.sender.addressLine2}</p>
              <p>{data.sender.phone}</p>
            </address>
          </div>

          {/* Right Side: Invoice Number and Dates */}
          <div className="text-left sm:text-right w-full sm:w-1/2 pt-2">
            <p className="text-xl font-semisemifont-semibold text-text mb-2">
              Invoice {data.invoiceMeta.number}
            </p>
            <p className="text-sm text-text">
              Date Issues:{" "}
              <span className="font-medium text-text">
                {data.invoiceMeta.dateIssues}
              </span>
            </p>
            <p className="text-sm text-text">
              Date Due:{" "}
              <span className="font-medium text-text">
                {data.invoiceMeta.dateDue}
              </span>
            </p>
          </div>
        </header>

        {/* -------------------- Billing and Recipient Info -------------------- */}
        <section className="mb-10 flex flex-col sm:flex-row justify-between text-sm">
          {/* Left Side: Invoice To (Recipient) */}
          <div className="mb-6 sm:mb-0 w-full sm:w-1/2 pr-4">
            <h4 className="uppercase tracking-wider font-semibold mb-3 text-text">
              Invoice To:
            </h4>
            <address className="not-italic text-text space-y-1">
              <p className="font-semisemifont-semibold text-text">
                {data.recipient.name}
              </p>
              <p>{data.recipient.company}</p>
              <p>{data.recipient.address}</p>
              <p>{data.recipient.phone}</p>
              <p>{data.recipient.email}</p>
            </address>
          </div>

          {/* Right Side: Bill To (Payment Info) */}
          <div className="w-full sm:w-1/2 pl-32">
            <h4 className="uppercase tracking-wider font-semibold mb-3 text-text">
              Bill To:
            </h4>
            <dl className="text-text space-y-1">
              <div className="flex justify-between">
                <dt className="font-medium">Total Due:</dt>
                <dd className="font-semibold text-text">
                  {data.billing.totalDue}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium">Bank name:</dt>
                <dd>{data.billing.bankName}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium">Country:</dt>
                <dd>{data.billing.country}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium">IBAN:</dt>
                <dd>{data.billing.iban}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium">SWIFT code:</dt>
                <dd>{data.billing.swiftCode}</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* -------------------- Items Table -------------------- */}
        <section aria-labelledby="items-heading" className="mb-10">
          <div className="border border-border rounded-lg overflow-hidden">
            <table className="w-full border-collapse text-sm">
              <thead>
                {/* টেবিলের হেডার ইমেজের মতো হালকা গ্রে ব্যাকগ্রাউন্ড */}
                <tr className="text-left text-text bg-gray border-b border-border">
                  <th
                    scope="col"
                    className="py-3 px-4 w-1/4 font-semibold uppercase"
                  >
                    ITEM
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-4 w-1/4 font-semibold uppercase"
                  >
                    DESCRIPTION
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-3 text-center w-1/6 font-semibold uppercase"
                  >
                    COST
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-3 text-center w-1/12 font-semibold uppercase"
                  >
                    QTY
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-4 text-right w-1/5 font-semibold uppercase"
                  >
                    PRICE
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white">
                {data.items.map((item, index) => (
                  <tr
                    key={index}
                    // ইমেজের মতো প্রতিটি রো-কে হালকা গ্রে ব্যাকগ্রাউন্ড এবং বর্ডার দেওয়া হয়েছে
                    className={`text-text border-b border-border ${
                      index % 2 === 1 ? "bg-gray" : "bg-white"
                    }`}
                  >
                    <td className="py-3 px-4 font-semibold text-text">
                      {item.item}
                    </td>
                    <td className="py-3 px-4 font-medium text-text">
                      {item.description}
                    </td>
                    <td className="py-3 px-3 text-center">${item.cost}</td>
                    <td className="py-3 px-3 text-center">{item.qty}</td>
                    <td className="py-3 px-4 text-right font-semibold text-text">
                      ${formatAmount(item.price)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* -------------------- Salesperson and Totals -------------------- */}
        <section className="flex justify-between items-end text-sm">
          {/* Left Side: Salesperson Info */}
          <div className="w-full sm:w-1/2 pr-4 pt-4">
            <p className="font-semibold text-text mb-1">
              Salesperson:{" "}
              <span className="font-semisemifont-semibold">
                {data.salesperson}
              </span>
            </p>
            <p className="text-sm text-text">Thanks for your business</p>
          </div>

          {/* Right Side: Totals Summary (ইমেজের মতো করে) */}
          <div className="w-full sm:w-1/2 max-w-xs space-y-1 pt-4 text-right">
            <div className="flex justify-between">
              <span className="font-medium text-text">Subtotal:</span>
              <span className="font-semibold text-text">
                ${formatAmount(data.totals.subtotal)}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-text">Discount:</span>
              <span className="font-semibold text-text">
                ${formatAmount(data.totals.discount)}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-text">Tax:</span>
              <span className="font-semibold text-text">
                {data.totals.taxPercent}%
              </span>
            </div>

            {/* Final Total - semifont-semibold এবং ইমেজের মতো ডাবল বর্ডার দিয়ে হাইলাইট */}
            <div className="flex justify-between pt-2 mt-2 border-t-2 border-border">
              <span className="text-lg font-extrasemifont-semibold text-text">
                Total:
              </span>
              <span className="text-lg font-extrasemifont-semibold text-text">
                ${formatAmount(data.totals.total)}
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
