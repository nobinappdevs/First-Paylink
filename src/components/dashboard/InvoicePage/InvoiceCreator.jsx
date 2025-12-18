"use client";

import React, { useState, useMemo } from "react";
import { Plus, X, Building2, Package } from "lucide-react";
import { InvoiceView } from "./InvoiceView";
import Button from "@/components/ui/Button";
import Link from "next/link";

/* ---------------- Currency Options ---------------- */

const currencyOptions = [
  { label: "USD ($)", value: "$" },
  { label: "EUR (€)", value: "€" },
  { label: "GBP (£)", value: "£" },
  { label: "BDT (৳)", value: "৳" },
  { label: "INR (₹)", value: "₹" },
];

/* ---------------- Initial State ---------------- */

const initialCustomer = {
  title: "ABC LTD",
  phone: "",
  name: "App Devs",
  email: "user@appdevs.net",
  currency: "$",
};

const initialItems = [
  { id: 1, title: "Collecting Payment Platform", quantity: 1, price: 100 },
];

export default function InvoiceCreator() {
  const [customer, setCustomer] = useState(initialCustomer);
  const [items, setItems] = useState(initialItems);

  const handleCustomerChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const handleItemChange = (id, field, value) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      { id: Date.now(), title: "", quantity: 1, price: 0 },
    ]);
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const invoiceData = useMemo(() => {
    const subtotal = items.reduce((sum, i) => sum + i.quantity * i.price, 0);

    const totalQty = items.reduce((sum, i) => sum + i.quantity, 0);

    return {
      invoiceNumber: "INV-000123",
      dateDue: "15 December 2025",
      senderName: customer.title,
      senderAddress: customer.phone || "-",
      recipientName: customer.name,
      recipientEmail: customer.email,
      currency: customer.currency,
      amountDue: subtotal,
      items: items.map((i) => ({
        description: i.title || "Item",
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

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Create Invoice
          </h1>
          <p className="text-gray-600">
            Fill in the details below to generate your professional invoice
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* -------- LEFT : FORM -------- */}
          <section>
            <div className="rounded-2xl bg-white shadow-xl border border-gray-200 overflow-hidden transform transition-all hover:shadow-2xl">
              {/* Form Header */}
              <div className="bg-linear-to-r from-gray-50 to-gray-100 border-b border-gray-200 px-6 py-5">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-indigo-600" />
                  Invoice Information
                </h2>
              </div>

              <div className="p-8 space-y-6">
                {/* Customer Info */}
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Title*
                    </label>
                    <input
                      name="title"
                      value={customer.title}
                      onChange={handleCustomerChange}
                      placeholder="Title"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-text/80 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone*
                    </label>
                    <input
                      name="title"
                      value={customer.title}
                      onChange={handleCustomerChange}
                      placeholder="Phone"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-text/80 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Customer Name*
                    </label>
                    <input
                      name="name"
                      value={customer.name}
                      onChange={handleCustomerChange}
                      placeholder="name"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-text/80 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Customer Email*
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={customer.email}
                      onChange={handleCustomerChange}
                      placeholder="Customer Email"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-text/80 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Currency
                    </label>
                    <select
                      name="currency"
                      value={customer.currency}
                      onChange={handleCustomerChange}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-text/80 focus:border-transparent transition-all"
                    >
                      {currencyOptions.map((c) => (
                        <option key={c.value} value={c.value}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Items Section */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <Package className="w-5 h-5 text-indigo-600" />
                      Invoice Items
                    </h3>
                    <button
                      type="button"
                      onClick={addItem}
                      className="flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-indigo-300 shadow-sm hover:shadow-md transition-all"
                    >
                      <Plus size={16} /> Add Item
                    </button>
                  </div>

                  <div className="space-y-4">
                    {items.map((item, index) => (
                      <div
                        key={item.id}
                        className="bg-gray-50 border-2 border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-gray-300 transition-all"
                      >
                        <div className="space-y-3">
                          <input
                            value={item.title}
                            onChange={(e) =>
                              handleItemChange(item.id, "title", e.target.value)
                            }
                            placeholder="Item description"
                            className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-text/80 focus:border-transparent transition-all"
                          />

                          <div className="flex gap-3">
                            <div className="flex-1">
                              <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                                Quantity
                              </label>
                              <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) =>
                                  handleItemChange(
                                    item.id,
                                    "quantity",
                                    Number(e.target.value)
                                  )
                                }
                                className="w-full rounded-lg border-2 border-gray-200 bg-white px-3 py-2.5 text-sm text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-text/80 focus:border-transparent transition-all"
                              />
                            </div>

                            <div className="flex-1">
                              <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                                Price
                              </label>
                              <input
                                type="number"
                                value={item.price}
                                onChange={(e) =>
                                  handleItemChange(
                                    item.id,
                                    "price",
                                    Number(e.target.value)
                                  )
                                }
                                className="w-full rounded-lg border-2 border-gray-200 bg-white px-3 py-2.5 text-sm text-right shadow-sm focus:outline-none focus:ring-2 focus:ring-text/80 focus:border-transparent transition-all"
                              />
                            </div>

                            <div className="flex items-end">
                              <button
                                type="button"
                                onClick={() => removeItem(item.id)}
                                className="rounded-lg border-2 border-red-200 bg-red-50 p-2.5 text-red-600 hover:bg-red-100 hover:border-red-300 shadow-sm hover:shadow transition-all"
                                aria-label="Remove item"
                              >
                                <X size={18} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Create Button */}
                <div className="pt-6">
                  <Link href={"/dashboard/invoice/preview/20"}>
                    <Button
                      size="lg"
                      className="w-full flex justify-center shadow-lg hover:shadow-xl transition-all"
                    >
                      Create Invoice
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* -------- RIGHT : LIVE PREVIEW -------- */}
          <InvoiceView data={invoiceData} />
        </div>
      </div>
    </main>
  );
}
