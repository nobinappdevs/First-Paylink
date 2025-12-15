// // 'use client'
// // import React from 'react';



// // // Component for the Invoice View
// // export const InvoiceView = ({ data }) => {

// //   // Function to format currency (ensures consistency)
// //   const formatCurrency = (amount, currency) => {
// //     return `${currency}${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
// //   };

// //   const formattedAmountDue = formatCurrency(data.amountDue, data.currency);
// //   const formattedSubtotal = formatCurrency(data.totals.subtotal, data.currency);
// //   const formattedFinalAmountDue = formatCurrency(data.totals.amountDue, data.currency);

// //   // --- Accessibility and Performance: Use semantic HTML (header, section) ---

// //   return (
// //     <div className="flex flex-col items-center min-h-screen bg-gray-50 p-4 sm:p-8 md:p-12" aria-label={`Invoice ${data.invoiceNumber}`}>
      
// //       {/* 1. Main Invoice Card (Responsive Width) */}
// //       <article className="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden">
        
// //         {/* Invoice Content */}
// //         <section className="p-6 sm:p-10 lg:p-14">
          
// //           {/* Header Section */}
// //           <header className="flex justify-between items-start mb-10">
// //             {/* Left Header - Invoice Title */}
// //             <h1 className="text-3xl font-bold text-gray-900" id="invoice-title">Invoice</h1>
            
// //             {/* Right Header - Sender Name */}
// //             <address className="text-right not-italic text-lg font-semibold text-gray-800" aria-labelledby="sender-info">
// //               {data.senderName}
// //             </address>
// //           </header>

// //           {/* Details Section (Invoice Number, Date, Bill To) */}
// //           <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm sm:text-base mb-12">
            
// //             {/* Column 1: Invoice Details */}
// //             <div>
// //               <dl>
// //                 <div className="mb-2">
// //                   <dt className="text-gray-500 font-medium">Invoice number</dt>
// //                   <dd className="font-semibold text-gray-900">{data.invoiceNumber}</dd>
// //                 </div>
// //                 <div className="mb-4">
// //                   <dt className="text-gray-500 font-medium">Date due</dt>
// //                   <dd className="font-semibold text-gray-900">{data.dateDue}</dd>
// //                 </div>
// //               </dl>
              
// //               <address className="not-italic mt-6 text-gray-900">
// //                 <p className="font-semibold">{data.senderName}</p>
// //                 <p className="text-gray-700">{data.senderAddress}</p>
// //               </address>
// //             </div>
            
// //             {/* Column 2: Bill To Details */}
// //             <div className="text-right">
// //               <dl>
// //                 <dt className="text-gray-500 font-medium">Bill to</dt>
// //                 <dd className="font-semibold text-gray-900">{data.recipientName}</dd>
// //                 <dd className="text-gray-700">{data.recipientEmail}</dd>
// //               </dl>
// //             </div>
// //           </div>

// //           {/* Amount Due Banner */}
// //           <div 
// //             className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-12 py-4 border-y border-gray-200 text-center"
// //             aria-live="polite"
// //           >
// //             {formattedAmountDue} due {data.dateDue}
// //           </div>

// //           {/* Items Table */}
// //           <table className="w-full table-auto mb-10 text-sm sm:text-base" role="table" aria-labelledby="invoice-title">
// //             <caption className="sr-only">Items in the invoice</caption>
// //             <thead>
// //               <tr className="border-b border-gray-300 text-left text-gray-600 font-semibold">
// //                 <th scope="col" className="py-2 pr-2 w-1/2">Description</th>
// //                 <th scope="col" className="py-2 text-right">Qty</th>
// //                 <th scope="col" className="py-2 text-right hidden sm:table-cell">Unit price</th>
// //                 <th scope="col" className="py-2 text-right">Amount</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {data.items.map((item, index) => (
// //                 <tr key={index} className="border-b border-gray-100 last:border-b-0 text-gray-800">
// //                   <td className="py-3 pr-2 font-medium">{item.description}</td>
// //                   <td className="py-3 text-right">{item.qty}</td>
// //                   <td className="py-3 text-right hidden sm:table-cell">{formatCurrency(item.unitPrice, data.currency)}</td>
// //                   <td className="py-3 text-right font-semibold">{formatCurrency(item.amount, data.currency)}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>

// //           {/* Totals Summary */}
// //           <div className="flex justify-end mb-10">
// //             <div className="w-full max-w-xs space-y-3 text-sm sm:text-base">
              
// //               <div className="flex justify-between">
// //                 <span className="text-gray-600">Qty</span>
// //                 <span className="font-semibold text-gray-900">{data.totals.totalQty}</span>
// //               </div>
              
// //               <div className="flex justify-between">
// //                 <span className="text-gray-600">Subtotal</span>
// //                 <span className="font-semibold text-gray-900">{formattedSubtotal}</span>
// //               </div>
              
// //               <div className="flex justify-between pt-4 border-t border-gray-200">
// //                 <span className="text-lg font-bold text-gray-900">Amount due</span>
// //                 <span className="text-lg font-bold text-gray-900">{formattedFinalAmountDue}</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Footer Note */}
// //           <footer className="text-xs text-gray-500 text-center pt-6 border-t border-gray-100">
// //             {data.invoiceNumber} - {formattedAmountDue} {data.dateDue}
// //           </footer>
// //         </section>

// //       </article>

// //       {/* 2. Action Buttons Footer (Sticky or Fixed Footer) */}
// //       {/* We'll make this a simple sticky footer below the card for clean separation */}
// //       <div className="w-full max-w-4xl mt-8 flex justify-center space-x-4">
// //         <button
// //           onClick={() => console.log('Saving as draft...')}
// //           className="py-3 px-6 text-base font-medium rounded-lg text-gray-700 bg-gray-200 hover:bg-gray-300 transition duration-200 focus:outline-none focus:ring-4 focus:ring-gray-300"
// //           aria-label="Save invoice as draft"
// //         >
// //           Save as Draft
// //         </button>
        
// //         <button
// //           onClick={() => console.log('Publishing invoice...')}
// //           className="py-3 px-6 text-base font-medium rounded-lg text-white bg-indigo-700 hover:bg-indigo-800 transition duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
// //           aria-label="Publish invoice"
// //         >
// //           Publish Invoice
// //         </button>
// //       </div>

// //     </div>
// //   );
// // };



// 'use client';

// import React from 'react';

// /* ------------------ Invoice View ------------------ */

// export const InvoiceView = ({ data }) => {
//   const formatCurrency = (amount, currency) =>
//     `${currency}${amount.toLocaleString('en-US', {
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2,
//     })}`;

//   const amountDue = formatCurrency(data.amountDue, data.currency);
//   const subtotal = formatCurrency(data.totals.subtotal, data.currency);
//   const finalAmount = formatCurrency(data.totals.amountDue, data.currency);

//   return (
//     <main
//       className="flex min-h-screen flex-col items-center bg-linear-to-br from-gray-50 to-gray-100 px-4 py-10"
//       aria-labelledby="invoice-title"
//     >
//       {/* ================= Invoice Card ================= */}
//       <article
//         className="w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl"
//         aria-describedby="invoice-footer"
//       >
//         <section className="px-6 py-8 sm:px-10 sm:py-12">

//           {/* -------- Header -------- */}
//           <header className="mb-10 flex items-start justify-between border-b pb-6">
//             <h1
//               id="invoice-title"
//               className="text-3xl font-extrabold tracking-tight text-gray-900"
//             >
//               Invoice
//             </h1>

//             <address className="not-italic text-right">
//               <p className="text-lg font-semibold text-gray-900">
//                 {data.senderName}
//               </p>
//               <p className="text-sm text-gray-600">
//                 {data.senderAddress}
//               </p>
//             </address>
//           </header>

//           {/* -------- Meta Info -------- */}
//           <section className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 text-sm">
//             <div>
//               <dl className="space-y-3">
//                 <div>
//                   <dt className="text-gray-500">Invoice number</dt>
//                   <dd className="font-semibold text-gray-900">
//                     {data.invoiceNumber}
//                   </dd>
//                 </div>
//                 <div>
//                   <dt className="text-gray-500">Date due</dt>
//                   <dd className="font-semibold text-gray-900">
//                     {data.dateDue}
//                   </dd>
//                 </div>
//               </dl>
//             </div>

//             <div className="sm:text-right">
//               <dt className="text-gray-500">Bill to</dt>
//               <dd className="font-semibold text-gray-900">
//                 {data.recipientName}
//               </dd>
//               <dd className="text-gray-600">
//                 {data.recipientEmail}
//               </dd>
//             </div>
//           </section>

//           {/* -------- Amount Due -------- */}
//           <div
//             className="mb-12 rounded-xl bg-indigo-50 px-6 py-5 text-center"
//             aria-live="polite"
//           >
//             <p className="text-sm text-indigo-600 font-medium">
//               Amount Due
//             </p>
//             <p className="mt-1 text-3xl font-extrabold text-indigo-700">
//               {amountDue}
//             </p>
//             <p className="mt-1 text-sm text-gray-600">
//               Due {data.dateDue}
//             </p>
//           </div>

//           {/* -------- Items Table -------- */}
//           <section aria-labelledby="items-heading">
//             <h2 id="items-heading" className="sr-only">
//               Invoice items
//             </h2>

//             <table className="w-full border-collapse text-sm">
//               <caption className="sr-only">
//                 List of items in this invoice
//               </caption>

//               <thead>
//                 <tr className="border-b text-left text-gray-500">
//                   <th scope="col" className="py-3 pr-2 w-1/2">
//                     Description
//                   </th>
//                   <th scope="col" className="py-3 text-right">
//                     Qty
//                   </th>
//                   <th
//                     scope="col"
//                     className="hidden py-3 text-right sm:table-cell"
//                   >
//                     Unit price
//                   </th>
//                   <th scope="col" className="py-3 text-right">
//                     Amount
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {data.items.map((item, index) => (
//                   <tr
//                     key={index}
//                     className="border-b last:border-b-0"
//                   >
//                     <td className="py-4 pr-2 font-medium text-gray-900">
//                       {item.description}
//                     </td>
//                     <td className="py-4 text-right">
//                       {item.qty}
//                     </td>
//                     <td className="hidden py-4 text-right sm:table-cell">
//                       {formatCurrency(item.unitPrice, data.currency)}
//                     </td>
//                     <td className="py-4 text-right font-semibold">
//                       {formatCurrency(item.amount, data.currency)}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </section>

//           {/* -------- Totals -------- */}
//           <section className="mt-10 flex justify-end">
//             <div className="w-full max-w-sm rounded-xl bg-gray-50 p-6 text-sm">
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Total Qty</span>
//                 <span className="font-semibold">
//                   {data.totals.totalQty}
//                 </span>
//               </div>

//               <div className="mt-3 flex justify-between">
//                 <span className="text-gray-600">Subtotal</span>
//                 <span className="font-semibold">
//                   {subtotal}
//                 </span>
//               </div>

//               <div className="mt-4 flex justify-between border-t pt-4">
//                 <span className="text-lg font-bold">
//                   Amount due
//                 </span>
//                 <span className="text-lg font-bold">
//                   {finalAmount}
//                 </span>
//               </div>
//             </div>
//           </section>

//           {/* -------- Footer -------- */}
//           <footer
//             id="invoice-footer"
//             className="mt-12 border-t pt-6 text-center text-xs text-gray-500"
//           >
//             {data.invoiceNumber} • {amountDue} • {data.dateDue}
//           </footer>
//         </section>
//       </article>

//       {/* ================= Actions ================= */}
//       <div className="mt-8 flex gap-4">
//         <button
//           className="rounded-full bg-gray-200 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300"
//           aria-label="Save invoice as draft"
//         >
//           Save as Draft
//         </button>

//         <button
//           className="rounded-full bg-indigo-700 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-500"
//           aria-label="Publish invoice"
//         >
//           Publish Invoice
//         </button>
//       </div>
//     </main>
//   );
// };


'use client';

import React from 'react';


export  const InvoiceView = ({ data }) => {
  // Function to format currency (ensures consistency)
  const formatCurrency = (amount, currency) =>
    `${currency}${amount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  const amountDue = formatCurrency(data.amountDue, data.currency);
  const subtotal = formatCurrency(data.totals.subtotal, data.currency);
  const finalAmount = formatCurrency(data.totals.amountDue, data.currency);

  const handleSaveDraft = () => {
    console.log('Saving invoice as draft...');
    // Add your draft saving logic here
  };

  const handlePublish = () => {
    console.log('Publishing invoice...');
    // Add your publish/send logic here
  };


  return (
    <main
      className="flex min-h-screen flex-col items-center  px-4 py-10"
      aria-labelledby="invoice-title"

    >
      {/* ================= Invoice Card ================= */}
      <article
        className="w-full max-w-4xl overflow-hidden rounded-xl  shadow-xl"
        aria-describedby="invoice-footer"
      >
        <section className="px-6 py-8 sm:px-10 sm:py-12">

          {/* -------- Header and Sender Info -------- */}
          <header className="mb-10 flex items-start justify-between">
            <h1
              id="invoice-title"
              className="text-3xl font-extrabold tracking-tight "
            >
              Invoice
            </h1>

            <address className="not-italic text-right">
              <p className="text-lg font-semibold ">
                {data.senderName}
              </p>
              <p className="text-sm ">
                {data.senderAddress}
              </p>
            </address>
          </header>

          {/* -------- Meta Info and Bill To -------- */}
          <section className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 text-sm">
            <div>
              <dl className="space-y-3">
                <div>
                  <dt className="">Invoice number</dt>
                  <dd className="font-semibold ">
                    {data.invoiceNumber}
                  </dd>
                </div>
                <div>
                  <dt className="">Date due</dt>
                  <dd className="font-semibold ">
                    {data.dateDue}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="sm:text-right">
              <dl className="space-y-1">
                <dt className="">Bill to</dt>
                <dd className="font-semibold ">
                  {data.recipientName}
                </dd>
                <dd className="">
                  {data.recipientEmail}
                </dd>
              </dl>
            </div>
          </section>

          {/* -------- Amount Due Banner (Based on Image 1) -------- */}
          <div
            className="mb-12 rounded-lg  px-6 py-5 text-center"
            aria-live="polite"
          >
            <p className="text-sm  font-medium">
              Amount Due
            </p>
            <p className="mt-1 text-3xl font-extrabold">
              {amountDue}
            </p>
            <p className="mt-1 text-sm ">
              Due {data.dateDue}
            </p>
          </div>

          {/* -------- Items Table -------- */}
          <section aria-labelledby="items-heading" className="mb-10">
            <h2 id="items-heading" className="sr-only">
              Invoice items
            </h2>

            <table className="w-full border-collapse text-sm">
              <caption className="sr-only">
                List of items in this invoice
              </caption>

              <thead>
                <tr className="border-b  text-left ">
                  <th scope="col" className="py-3 pr-2 w-1/2 font-medium">
                    Description
                  </th>
                  <th scope="col" className="py-3 text-right font-medium">
                    Qty
                  </th>
                  <th
                    scope="col"
                    className="hidden py-3 text-right sm:table-cell font-medium"
                  >
                    Unit price
                  </th>
                  <th scope="col" className="py-3 text-right font-medium">
                    Amount
                  </th>
                </tr>
              </thead>

              <tbody>
                {data.items.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b  last:border-b-0"
                  >
                    <td className="py-4 pr-2 font-medium">
                      {item.description}
                    </td>
                    <td className="py-4 text-right">
                      {item.qty}
                    </td>
                    <td className="hidden py-4 text-right sm:table-cell ">
                      {formatCurrency(item.unitPrice, data.currency)}
                    </td>
                    <td className="py-4 text-right font-semibold ">
                      {formatCurrency(item.amount, data.currency)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* -------- Totals Summary -------- */}
          <section className="flex justify-end">
            <div className="w-full max-w-xs space-y-3 text-sm">
              
              <div className="flex justify-between">
                <span className="">Total Qty</span>
                <span className="font-semibold ">
                  {data.totals.totalQty}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="">Subtotal</span>
                <span className="font-semibold ">
                  {subtotal}
                </span>
              </div>

              <div className="flex justify-between border-t  pt-4 mt-4">
                <span className="text-lg font-bold ">
                  Amount due
                </span>
                <span className="text-lg font-bold ">
                  {finalAmount}
                </span>
              </div>
            </div>
          </section>

          {/* -------- Footer Note -------- */}
          <footer
            id="invoice-footer"
            className="mt-12 border-t pt-6 text-center text-xs"
          >
            {data.invoiceNumber} • {amountDue} • {data.dateDue}
          </footer>
        </section>
      </article>
    </main>
  );
};


