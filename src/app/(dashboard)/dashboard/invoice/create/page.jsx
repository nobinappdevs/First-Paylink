
import InvoiceDesignOnly from '@/components/dashboard/InvoicePage/InvoiceCreator';
import React from 'react';

const page = () => {
    return (
        <div>
            <InvoiceDesignOnly />
        </div>
    );
};

export default page;

// export default page;

// 'use client';

// import React, { useRef } from 'react';
// import InvoiceWithPDF from '@/components/dashboard/InvoicePage/InvoiceWithPDF';

// const Page = () => {
//   const pdfRef = useRef(null);

//   const invoiceData = {
//     invoiceNumber: 'INV-REGAEFGDIDZH',
//     dateDue: '15 December 2025',
//     senderName: 'Natus et molestiae a',
//     senderAddress: '43',
//     recipientName: 'Basil Rose',
//     recipientEmail: 'lutotin@mailinator.com',
//     currency: 'FJ$',
//     amountDue: 54677.0,
//     items: [
//       {
//         description: 'Proident mollit odi',
//         qty: 107,
//         unitPrice: 5110000000,
//         amount: 5110000000,
//       },
//       {
//         description: 'Consulting Service Fee',
//         qty: 1,
//         unitPrice: 350,
//         amount: 350,
//       },
//     ],
//     totals: {
//       totalQty: 107,
//       subtotal: 54677,
//       amountDue: 54677,
//     },
//   };

//   return (
//     <main className="min-h-screen bg-gray-100 p-8">
//       {/* 🔘 BUTTON IN PARENT */}
//       <div className="mb-6 text-right">
//         <button
//           onClick={() => pdfRef.current?.downloadPDF()}
//           className="rounded-md bg-indigo-700 px-5 py-2 text-white hover:bg-indigo-800"
//         >
//           Download Invoice PDF
//         </button>
//       </div>

//       {/* 👇 Child PDF component */}
//       <InvoiceWithPDF ref={pdfRef} data={invoiceData} />
//     </main>
//   );
// };

// export default Page;
