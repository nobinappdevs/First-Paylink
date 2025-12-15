'use client';

import React, { useState, useMemo } from 'react';
import { Plus, X } from 'lucide-react';
import { InvoiceView } from './InvoiceView';
import Button from '@/components/Sheared/Button';
import Link from 'next/link';

/* ---------------- Initial State ---------------- */

const initialCustomer = {
  title: 'ABC LTD',
  phone: '',
  name: 'App Devs',
  email: 'user@appdevs.net',
  currency: '$',
};

const initialItems = [
  { id: 1, title: 'Collecting Payment Platform', quantity: 1, price: 100 },
];

/* ---------------- Component ---------------- */

export default function InvoiceCreator() {
  const [customer, setCustomer] = useState(initialCustomer);
  const [items, setItems] = useState(initialItems);

  /* ---------------- Handlers ---------------- */

  const handleCustomerChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const handleItemChange = (id, field, value) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      { id: Date.now(), title: '', quantity: 1, price: 0 },
    ]);
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  /* ---------------- Invoice Data ---------------- */

  const invoiceData = useMemo(() => {
    const subtotal = items.reduce(
      (sum, i) => sum + i.quantity * i.price,
      0
    );

    const totalQty = items.reduce((sum, i) => sum + i.quantity, 0);

    return {
      invoiceNumber: 'INV-000123',
      dateDue: '15 December 2025',
      senderName: customer.title,
      senderAddress: customer.phone || '-',
      recipientName: customer.name,
      recipientEmail: customer.email,
      currency: customer.currency,
      amountDue: subtotal,
      items: items.map((i) => ({
        description: i.title || 'Item',
        qty: i.quantity,
        unitPrice: i.price,
        amount: i.quantity * i.price,
      })),
      totals: {
        totalQty,
        subtotal,
        amountDue: subtotal,
      },
    };
  }, [customer, items]);

  /* ---------------- UI ---------------- */

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
        
        {/* -------- LEFT : FORM -------- */}
        <section className="rounded-lg bg-white p-6 shadow">
          <h1 className="mb-6 text-2xl font-semibold">Create Invoice</h1>

          {/* Customer Info */}
          <div className="space-y-4">
            <input
              name="title"
              value={customer.title}
              onChange={handleCustomerChange}
              placeholder="Company Name"
              className="w-full rounded-md border px-3 py-2 text-sm"
            />

            <input
              name="name"
              value={customer.name}
              onChange={handleCustomerChange}
              placeholder="Customer Name"
              className="w-full rounded-md border px-3 py-2 text-sm"
            />

            <input
              name="email"
              type="email"
              value={customer.email}
              onChange={handleCustomerChange}
              placeholder="Customer Email"
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>

          {/* Items */}
          <div className="my-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Items</h2>
            <button
              type="button"
              onClick={addItem}
              className="flex items-center gap-1 rounded-md bg-indigo-600 px-3 py-2 text-sm text-white"
            >
              <Plus size={16} /> Add Item
            </button>
          </div>

          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.id} className="flex gap-2">
                <input
                  value={item.title}
                  onChange={(e) =>
                    handleItemChange(item.id, 'title', e.target.value)
                  }
                  placeholder="Item name"
                  className="flex-1 rounded-md border px-3 py-2 text-sm"
                />

                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleItemChange(item.id, 'quantity', Number(e.target.value))
                  }
                  className="w-20 rounded-md border px-2 py-2 text-sm text-center"
                />

                <input
                  type="number"
                  value={item.price}
                  onChange={(e) =>
                    handleItemChange(item.id, 'price', Number(e.target.value))
                  }
                  className="w-24 rounded-md border px-2 py-2 text-sm text-right"
                />

                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="rounded-md bg-red-500 px-3 text-white"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
          <div className=" mt-10">
            <Link href={'/dashboard/invoice/preview/20'}>
            <Button gradient size='lg' className='w-full flex justify-center'>
              Create Invoice
            </Button>
            </Link>
          </div>
        </section>

        {/* -------- RIGHT : LIVE PREVIEW -------- */}
        <InvoiceView data={invoiceData} />
      </div>
    </main>
  );
}
