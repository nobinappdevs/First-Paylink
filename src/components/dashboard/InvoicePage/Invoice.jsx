import React from 'react';
import DahsboardHeader from '@/components/Sheared/DahsboardHeader';
import InvoiceTable from './InvoiceTable';

const Invoice = () => {
const invoices = [
  {
    id: '#INV-A1B2C3D4E5',
    customer: 'App Devs',
    email: 'user@appdevs.net',
    amount: '50.00 AUD',
    qty: 1,
    status: 'Paid',
    dueDate: '11 Nov 2023',
    dueTime: '04:48:00 PM',
  },
  {
    id: '#INV-F9G8H7I6J5',
    customer: 'App Devs',
    email: 'user@appdevs.net',
    amount: '100.00 BDT',
    qty: 1,
    status: 'Unpaid',
    dueDate: '11 Nov 2023',
    dueTime: '04:45:16 PM',
  },
  {
    id: '#INV-K2L3M4N5O6',
    customer: 'App Devs',
    email: 'user@appdevs.net',
    amount: '75.00 AUD',
    qty: 2,
    status: 'Paid',
    dueDate: '11 Nov 2023',
    dueTime: '03:22:18 PM',
  },
  {
    id: '#INV-P7Q8R9S0T1',
    customer: 'App Devs',
    email: 'user@appdevs.net',
    amount: '120.00 BDT',
    qty: 1,
    status: 'Draft',
    dueDate: '11 Nov 2023',
    dueTime: '05:12:44 PM',
  },
  {
    id: '#INV-U2V3W4X5Y6',
    customer: 'App Devs',
    email: 'user@appdevs.net',
    amount: '95.00 AUD',
    qty: 3,
    status: 'Unpaid',
    dueDate: '11 Nov 2023',
    dueTime: '01:30:10 PM',
  },
];


  return (
    <div className="">
        {/* Header Section */}
        <DahsboardHeader url={'/dashboard/invoice/create'} />
        {/* Table Card */}
        <InvoiceTable invoices={invoices} />
    </div>
  );
};

export default Invoice;
