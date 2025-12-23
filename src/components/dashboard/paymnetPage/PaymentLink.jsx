"use client";

import React, { useState, useRef, useEffect } from "react";
import { Copy, MoreHorizontal, Search, Trash, Edit } from "lucide-react";
import DahsboardHeader from "@/components/Sheared/DahsboardHeader";
import Link from "next/link";
import InputField from "@/components/ui/InputField";
import { getPaymentMethodsAPI } from "@/services/apiClient";
import SkeletonLoader from "@/components/Sheared/Skeleton";

const PaymentLinksModern = () => {
  const [copied, setCopied] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const menuRef = useRef(null);

  /* outside click close */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* fetch payment links */
  useEffect(() => {
    const fetchPaymentMethods = async () => {
      try {
        const res = await getPaymentMethodsAPI();
        setLinks(res?.data?.data?.payment_links || []);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false); // 👈 important
      }
    };
    fetchPaymentMethods();
  }, []);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 1200);
  };

  /* type label map */
  const typeLabel = {
    pay: "Customers choose what to pay",
    sub: "Products or subscriptions",
  };

  if (loading) {
    return <SkeletonLoader />;
  }

  /* amount render logic */
  const renderAmount = (link) => {
    // PAY → Unlimited
    if (link.type === "pay") {
      if (link.min_amount && link.max_amount) {
        return `${link.min_amount} - ${link.max_amount} ${link.currency}`;
      }
      return `Unlimited ${link.currency}`;
    }

    // SUB → price + qty
    if (link.type === "sub") {
      return `${Number(link.price).toFixed(2)} (${link.qty || 1}) ${
        link.currency
      }`;
    }

    return "-";
  };

  /* date format */
  const formatDateTime = (date) => {
    return new Date(date).toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  return (
    <div>
      {/* Header */}
      <DahsboardHeader
        url={"/dashboard/payments/create"}
        title={"Payment Links"}
        subtitle={"Manage your payment links and track transactions."}
        buttonTitle={"Payment Link"}
      />

      {/* Main Card */}
      <div className="bg-white rounded-xl border border-text/15 overflow-hidden">
        {/* Search */}
        <div className="p-4 w-full sm:w-3/12 ml-auto  flex items-center gap-3">
          <InputField
            icon={Search}
            placeholder="Search products..."
            name={Search}
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto w-full border-t border-slate-100">
          <table className="min-w-[700px] w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="py-4 px-6 text-sm xl:text-base  font-bold text-text/80 uppercase">
                  Title
                </th>
                <th className="py-4 px-6 text-sm xl:text-base font-bold text-text/80 uppercase">
                  Type
                </th>
                <th className="py-4 px-6 text-sm xl:text-base font-bold text-text/80 uppercase">
                  Amount
                </th>
                <th className="py-4 px-6 text-sm xl:text-base font-bold text-text/80 uppercase">
                  Status
                </th>
                <th className="py-4 px-6 text-sm xl:text-base font-bold text-text/80 uppercase">
                  Created
                </th>
                <th className="py-4 px-6 text-sm xl:text-base font-bold text-text/80 uppercase text-right">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {links?.map((link) => (
                <tr
                  key={link.id}
                  className="group hover:bg-slate-50/80 transition-colors duration-150 relative"
                >
                  {/* Title */}
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span className="block font-semibold text-text text-sm">
                      {link.title}
                    </span>
                  </td>

                  {/* Type */}
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span className="inline-block text-slate-600 text-sm font-medium">
                      {typeLabel[link.type]}
                    </span>
                  </td>

                  {/* Amount */}
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span className="font-semibold text-sm text-text">
                      {renderAmount(link)}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {link.string_status}
                    </span>
                  </td>

                  {/* Created */}
                  <td className="py-4 px-6 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="text-sm text-slate-600">
                        {new Date(link.created_at).toLocaleDateString()}
                      </span>
                      <span className="text-xs text-slate-400">
                        {formatDateTime(link.created_at)}
                      </span>
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="py-4 px-6 text-right whitespace-nowrap relative">
                    <div className="flex justify-end items-center gap-1">
                      <button
                        className="relative cursor-pointer p-2 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
                        onClick={() => handleCopy(link.name, link.id)}
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
                          <Link href={`/dashboard/payments/edit/${link.id}`}>
                            <button className="flex items-center gap-2 w-full px-3 py-2 hover:bg-slate-50 text-sm text-slate-700">
                              <Edit size={14} /> Edit
                            </button>
                          </Link>
                          <button className="flex items-center gap-2 w-full px-3 py-2 hover:bg-red-50 text-sm text-red-600">
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
        <div className="bg-slate-50 border-t border-slate-200 p-4 flex items-center justify-between text-xs text-text">
          <span>
            Showing 1 to {links.length} of {links.length} results
          </span>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-white border border-slate-200 rounded hover:bg-slate-100">
              Previous
            </button>
            <button className="px-3 py-1 bg-white border border-slate-200 rounded hover:bg-slate-100">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentLinksModern;
