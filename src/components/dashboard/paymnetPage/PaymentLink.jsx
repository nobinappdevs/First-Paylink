"use client";
import React, { useState, useRef, useEffect } from "react";
import { Copy, MoreHorizontal, Search, Eye, Trash } from "lucide-react";
import DahsboardHeader from "@/components/Sheared/DahsboardHeader";

const PaymentLinksModern = () => {
  const [copied, setCopied] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = [
    {
      id: 1,
      title: "Redragon A101W Keyboard Keycaps",
      type: "Products or subscriptions",
      amount: "10.00 USD",
      count: 1,
      status: "Active",
      createdAt: "04 Dec 2025",
      time: "11:28 AM",
    },
    {
      id: 2,
      title: "Make a Difference with a Donation",
      type: "Products or subscriptions",
      amount: "20.00 USD",
      count: 1,
      status: "Active",
      createdAt: "26 Aug 2025",
      time: "04:56 PM",
    },
    {
      id: 3,
      title: "Redragon A101W Keyboard Keycaps",
      type: "Products or subscriptions",
      amount: "20.00 AUD",
      count: 2,
      status: "Active",
      createdAt: "11 Nov 2023",
      time: "02:36 PM",
    },
    {
      id: 4,
      title: "Make a Difference with a Donation",
      type: "Customers choose what to pay",
      amount: "200.00 - 5,000.00 BDT",
      count: null,
      status: "Active",
      createdAt: "11 Nov 2023",
      time: "02:35 PM",
    },
  ];

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 1200);
  };

  return (
    <div className="">
      <div className="">
        {/* Header */}
        <DahsboardHeader url={'/dashboard/payments/create'} />

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
          {/* Search */}
          <div className="p-4 border-b border-slate-100 flex items-center gap-3">
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search by title..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
              />
            </div>
          </div>

          {/* Scrollable Table */}
          <div className="overflow-x-auto w-full">
            <table className="min-w-[700px] w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="py-4 px-6 text-xs font-montserrat font-semibold text-text/80 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="py-4 px-6 text-xs font-montserrat font-semibold text-text/80 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="py-4 px-6 text-xs font-montserrat font-semibold text-text/80 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="py-4 px-6 text-xs font-montserrat font-semibold text-text/80 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="py-4 px-6 text-xs font-montserrat font-semibold text-text/80 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="py-4 px-6 text-xs font-montserrat font-semibold text-text/80 uppercase tracking-wider text-right">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {links.map((link) => (
                  <tr
                    key={link.id}
                    className="group hover:bg-slate-50/80 transition-colors duration-150 relative"
                  >
                    {/* Title */}
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className="block font-roboto font-semibold text-text text-sm">
                        {link.title}
                      </span>
                    </td>

                    {/* Type */}
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className="inline-block px-2.5 py-0.5 rounded border font-roboto border-slate-200 bg-white text-slate-600 text-xs font-medium">
                        {link.type === "Products or subscriptions"
                          ? "Product"
                          : "Donation"}
                      </span>
                    </td>

                    {/* Amount */}
                    <td className="py-4 px-6 font-roboto whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-text">
                          {link.amount}
                        </span>
                        {link.count && (
                          <span className="text-xs text-text bg-slate-100 px-1.5 py-0.5 rounded">
                            x{link.count}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Status */}
                    <td className="py-4 px-6 font-roboto whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        {link.status}
                      </span>
                    </td>

                    {/* Created */}
                    <td className="py-4 px-6 font-roboto whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="text-sm text-slate-600">
                          {link.createdAt}
                        </span>
                        <span className="text-xs text-slate-400">
                          {link.time}
                        </span>
                      </div>
                    </td>

                    {/* Actions Dropdown */}
                    <td className="py-4 px-6 text-right whitespace-nowrap relative">
                      <div className="flex justify-end items-center gap-1">
                        <button
                          className="relative cursor-pointer p-2 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
                          onClick={() => handleCopy(link.title, link.id)}
                        >
                          <Copy size={16} />
                          {copied === link.id && (
                            <span className="absolute -top-6 right-0 bg-black text-white text-[10px] px-2 py-1 rounded shadow">
                              Copied!
                            </span>
                          )}
                        </button>

                        <button
                          className="p-2 cursor-pointer rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all"
                          onClick={() =>
                            setOpenMenu(openMenu === link.id ? null : link.id)
                          }
                        >
                          <MoreHorizontal size={16} />
                        </button>

                        {openMenu === link.id && (
                          <div
                            ref={menuRef}
                            className="absolute right-0 mt-2 w-32 bg-white shadow-lg border border-slate-200 rounded-lg py-1 z-20"
                          >
                            <button className="flex items-center cursor-pointer gap-2 w-full text-left px-3 py-2 hover:bg-slate-50 text-sm text-slate-700">
                              <Eye size={14} /> View
                            </button>
                            <button className="flex items-center cursor-pointer gap-2 w-full text-left px-3 py-2 hover:bg-red-50 text-sm text-red-600">
                              <Trash size={14} /> Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="bg-slate-50 font-roboto border-t border-slate-200 p-4 flex items-center justify-between text-xs text-text">
            <span>Showing 1 to 4 of 4 results</span>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-white border border-slate-200 rounded hover:bg-slate-100 disabled:opacity-50 cursor-pointer">
                Previous
              </button>
              <button className="px-3 py-1 bg-white border border-slate-200 rounded hover:bg-slate-100 cursor-pointer">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentLinksModern;
