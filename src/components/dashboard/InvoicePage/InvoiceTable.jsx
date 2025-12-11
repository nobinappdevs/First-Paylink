"use client";
import React, { useState, useEffect, useRef } from "react";
import { Search, FileText, Calendar, Copy, MoreVertical, CheckCircle } from "lucide-react";

export default function InvoiceTable({ invoices }) {
  const [copiedId, setCopiedId] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRefs = useRef({});

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        openMenuId && 
        menuRefs.current[openMenuId] && 
        !menuRefs.current[openMenuId].contains(e.target)
      ) {
        const isMoreButton = e.target.closest(`[data-menu-toggle="${openMenuId}"]`);
        if (!isMoreButton) {
            setOpenMenuId(null);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenuId]);

  const handleCopy = (id) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const getStatusStyle = (status) => {
    if (status === "Paid")
      return "bg-emerald-50 border-emerald-200 text-emerald-700";
    return "bg-amber-50 border-amber-200 text-amber-700";
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden text-slate-900">
      
      <div className="px-6 py-4 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:max-w-sm">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search invoice ID or client..."
            className="w-full pl-10 pr-4 py-2 text-sm border border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition-all placeholder:text-slate-400"
            aria-label="Search invoices"
          />
        </div>
        <p className="text-sm text-slate-500 whitespace-nowrap">
          Showing <span className="font-semibold text-slate-700">{invoices.length}</span> recent invoices
        </p>
      </div>
      
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left text-sm table-auto">
          <thead className="bg-slate-50 border-b font-montserrat text-sm border-slate-100">
            <tr>
              <th className="py-3.5 px-6 text-slate-600  font-semibold uppercase tracking-wider w-40 min-w-[150px]">
                Invoice
              </th>
              <th className="py-3.5 px-6 text-slate-600  font-semibold uppercase tracking-wider w-60 min-w-[250px]">
                Customer
              </th>
              <th className="py-3.5 px-6 text-slate-600  font-semibold uppercase tracking-wider w-32 min-w-[120px]">
                Amount
              </th>
              <th className="py-3.5 px-6 text-center text-slate-600  font-semibold uppercase tracking-wider w-16 min-w-[60px]">
                Qty
              </th>
              <th className="py-3.5 px-6 text-slate-600  font-semibold uppercase tracking-wider w-24 min-w-[100px]">
                Status
              </th>
              <th className="py-3.5 px-6 text-slate-600  font-semibold uppercase tracking-wider w-40 min-w-40">
                Due Date
              </th>
              <th className="py-3.5 px-6 text-right text-slate-600  font-semibold uppercase tracking-wider w-20 min-w-20">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y font-roboto divide-slate-100">
            {invoices.map((inv) => (
              <tr
                key={inv.id}
                className="group hover:bg-slate-50 transition-colors"
              >
                <td className="py-4 px-6 font-medium">
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-slate-400" />
                    <a 
                      href={`/invoices/${inv.id}`} 
                      className="text-primary font-mono text-sm hover:text-primary hover:underline transition-colors"
                      aria-label={`View invoice ${inv.id}`}
                    >
                      {inv.id}
                    </a>
                  </div>
                </td>

                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 text-text/70 flex items-center justify-center text-xs font-bold ring-2 ring-primary/20">
                      {getInitials(inv.customer)}
                    </div>
                    <div>
                      <p className="font-medium text-text">{inv.customer}</p>
                      <a href={`mailto:${inv.email}`} className="text-xs text-slate-500 hover:text-primary transition-colors">
                        {inv.email}
                      </a>
                    </div>
                  </div>
                </td>

                <td className="py-4 px-6 font-bold text-text">
                  {inv.amount}
                </td>

                <td className="py-4 px-6 text-center text-slate-600">
                  {inv.qty}
                </td>

                <td className="py-4 px-6">
                  <span
                    className={`inline-flex items-center px-3 py-1 text-xs rounded-full font-medium border ${getStatusStyle(
                      inv.status
                    )}`}
                    aria-label={`Status: ${inv.status}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                        inv.status === "Paid"
                          ? "bg-emerald-500"
                          : "bg-amber-500"
                      }`}
                      aria-hidden="true"
                    ></span>
                    {inv.status}
                  </span>
                </td>

                <td className="py-4 px-6">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Calendar size={14} className="text-slate-400" />
                      <span className="font-medium">{inv.dueDate}</span>
                    </div>
                    <span className="text-xs text-slate-500 pl-5">
                      {inv.dueTime}
                    </span>
                  </div>
                </td>
                
                <td className="py-4 px-6 text-right relative">
                  <div className="flex items-center justify-end gap-1">
                    <button
                      onClick={() => handleCopy(inv.id)}
                      className="group/btn p-2 text-slate-400 cursor-pointer hover:text-primary hover:bg-indigo-50 rounded-md transition-all relative"
                      title={`Copy Invoice ID ${inv.id}`}
                      aria-live="polite"
                    >
                      {copiedId === inv.id ? (
                        <CheckCircle size={16} className="text-emerald-500" />
                      ) : (
                        <Copy size={16} />
                      )}
                      {copiedId === inv.id && (
                        <span className="absolute right-0 -top-7  bg-text text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-30 transition-opacity duration-300">
                          Copied!
                        </span>
                      )}
                    </button>
                    
                    <button
                      onClick={() =>
                        setOpenMenuId(openMenuId === inv.id ? null : inv.id)
                      }
                      data-menu-toggle={inv.id}
                      className={`p-2 rounded-md transition-all cursor-pointer ${openMenuId === inv.id ? 'bg-slate-100 text-slate-700' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'}`}
                      aria-expanded={openMenuId === inv.id}
                      aria-controls={`menu-${inv.id}`}
                      aria-label="More options"
                    >
                      <MoreVertical size={16} />
                    </button>
                  </div>

                  {openMenuId === inv.id && (
                    <div
                      ref={el => menuRefs.current[inv.id] = el}
                      id={`menu-${inv.id}`}
                      className="absolute right-6 mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-xl z-30 origin-top-right animate-fade-in-up"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <button 
                        className="w-full  cursor-pointer flex items-center gap-2 text-left px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50/50 hover:text-primary transition-colors rounded-t-lg"
                        role="menuitem"
                      >
                        <FileText size={16} /> Download PDF
                      </button>
                      <button 
                        className="w-full cursor-pointer  flex items-center gap-2 text-left px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50/50 hover:text-primary transition-colors"
                        role="menuitem"
                      >
                        <Search size={16} /> Show Invoice
                      </button>
                      <div className="border-t border-slate-100 my-1"></div>
                      <button 
                        className="w-full flex  cursor-pointer items-center gap-2 text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50/50 hover:text-red-700 transition-colors rounded-b-lg"
                        role="menuitem"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="px-6 py-3 bg-slate-50 border-t  border-slate-200 text-xs text-slate-500 text-center sm:text-left">
        Data updated automatically.
      </div>
    </div>
  );
}