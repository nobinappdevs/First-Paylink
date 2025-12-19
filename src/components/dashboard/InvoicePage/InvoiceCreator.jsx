"use client";

import React, { useState, useMemo } from "react";
import { Plus, X, Building2, Package } from "lucide-react";
import { InvoiceView } from "./InvoiceView";
import Button from "@/components/ui/Button";
import Link from "next/link";
import InputField from "@/components/ui/InputField";
import Select from "react-select";
import { reactSelectStyles } from "@/style/selectStyles";

/* ---------------- Currency Options ---------------- */

// const currencyOptions = [
//   { label: "USD ($)", value: "$" },
//   { label: "EUR (€)", value: "€" },
//   { label: "GBP (£)", value: "£" },
//   { label: "BDT (৳)", value: "৳" },
//   { label: "INR (₹)", value: "₹" },
// ];

  const currencyOptions = [
    { value: "usd", label: "USD - US Dollar" },
    { value: "eur", label: "EUR - Euro" },
    { value: "gbp", label: "GBP - British Pound" },
    { value: "bdt", label: "BDT - Bangladeshi Taka" },
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
   
      <div className="">
        {/* Page Header */}
        <div className="mb-4">
          <h4 className="text-3xl font-bold text-gray-900 mb-1">
            Create Invoice
          </h4>
          <h6 className="text-gray-600">
            Fill in the details below to generate your professional invoice
          </h6>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* -------- LEFT : FORM -------- */}
          <div >
            <div className="rounded-2xl bg-white shadow-sm border border-gray-200 overflow-hidden transform transition-all ">
              {/* Form Header */}
              <div className="bg-linear-to-r from-gray-50 to-gray-100 border-b border-gray-200 px-6 py-5">
                <h4 className=" flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Invoice Information
                </h4>
              </div>

              <div className="p-8 space-y-6">
                {/* Customer Info */}
                <div className="space-y-5">
                  <div>
                    <InputField type="text" placeholder="Title" name="title" label={'Title'} />
                  </div>
                  <div>
                        <InputField type="number" placeholder="Phone" name="phone" label={'Phone'} />
                  </div>
                  <div>
                        <InputField type="text" placeholder="name" name="name" label={'Customer Name'} />
                  </div>
                  <div>
                    <InputField type="email" placeholder="email" name="email" label={'Customer Email'} />
                  </div>
<div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Currency{" "}
                    <span className="text-red-500" aria-label="required">
                      *
                    </span>
                  </label>
                  <Select
                    options={currencyOptions}
                    instanceId="currency-select"
                    placeholder="Select Currency"
                    styles={reactSelectStyles}
                    isSearchable
                  />
                </div>
                </div>

                {/* Items Section */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <Package className="w-5 h-5 text-primary" />
                      Invoice Items
                    </h3>
                            <Button  onClick={addItem} className="px-2.5!"> <Plus size={16} /> Add Item</Button>
                  </div>

                  <div className="space-y-4">
                    {items.map((item, index) => (
                      <div
                        key={item.id}
                        className="bg-text/5 border border-text/10 rounded-xl p-4   hover:border-gray-300 transition-all"
                      >
                        <div className="space-y-3">
                          <InputField type="text" placeholder="Item description" name="title" label={'Title'} />

                          <div className="flex gap-3">
                            <div className="flex-1">
                                <InputField type="number" placeholder="quantity" name="quantity" label={'Quantity'} />
                            </div>

                            <div className="flex-1">
                              <InputField type="number" placeholder="price" name="price" label={'Price'} />
                            </div>

                            <div className="flex items-end">
                              <button
                                type="button"
                                onClick={() => removeItem(item.id)}
                                className="rounded-lg border-2 border-red-200 bg-red-600 cursor-pointer px-4 py-3 hover:text-red-500 text-white hover:bg-red-100 hover:border-red-300 transition-all"
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
          </div>

          {/* -------- RIGHT : LIVE PREVIEW -------- */}
          <div className="">
          <InvoiceView data={invoiceData} />

          </div>
        </div>
      </div>
  );
}
