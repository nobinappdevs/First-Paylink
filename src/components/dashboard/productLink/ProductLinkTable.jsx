"use client";

import React, { useState, useRef, useEffect } from "react";
import { MoreVertical, Copy, Trash2, Plus, Edit } from "lucide-react";
import Swal from "sweetalert2";
import Link from "next/link";

const MOCK_PRODUCTS = [
  { id: 1, price: "2,000.00 BDT", quantity: 1, status: "Active" },
  { id: 2, price: "30.00 USD", quantity: 2, status: "Inactive" },
];

export default function ProductLinkTable() {
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRefs = useRef({});

  const toggleStatus = (id) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, status: p.status === "Active" ? "Inactive" : "Active" }
          : p
      )
    );
  };

  const handleCopy = (product) => {
    if (product.status !== "Active") {
      Swal.fire({
        icon: "warning",
        title: "Inactive Product",
        text: "You can't copy link for inactive product",
      });
      return;
    }
    Swal.fire({
      icon: "success",
      title: "Link Copied",
      timer: 1200,
      showConfirmButton: false,
    });
  };

  useEffect(() => {
    const close = (e) => {
      if (
        openMenuId &&
        menuRefs.current[openMenuId] &&
        !menuRefs.current[openMenuId].contains(e.target)
      ) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [openMenuId]);

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold text-[#0a1d37]">Product Link</h1>
        <Link href={"/dashboard/product-link/create/2"}>
          <button className="flex items-center gap-2 bg-[#0a1d37] text-white px-5 py-2.5 rounded-lg hover:bg-slate-800 transition-all cursor-pointer font-semibold shadow-sm">
            <Plus size={18} />
            Create Link
          </button>
        </Link>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="min-w-[900px] bg-white rounded-xl  shadow-sm border border-slate-100">
          {/* Table Header */}
          <div className="grid grid-cols-12 px-6 py-3 text-xs font-semibold text-slate-500 bg-slate-50 rounded-t-xl whitespace-nowrap">
            <div className="col-span-4">Product Price</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-4 text-center">Status</div>
            <div className="col-span-2 text-right">Action</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-slate-100">
            {products.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-12 items-center px-6 py-4 hover:bg-slate-50 transition whitespace-nowrap"
              >
                {/* Price */}
                <div className="col-span-4 font-medium text-slate-800">
                  {product.price}
                </div>

                {/* Quantity */}
                <div className="col-span-2 text-center text-slate-600">
                  {product.quantity}
                </div>

                {/* Status */}
                <div className="col-span-4 flex items-center justify-center gap-3">
                  <button
                    onClick={() => toggleStatus(product.id)}
                    className={`relative w-14 h-6 rounded-full transition
                ${
                  product.status === "Active"
                    ? "bg-emerald-500"
                    : "bg-slate-300"
                }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition
                  ${product.status === "Active" ? "translate-x-8" : ""}`}
                    />
                  </button>

                  <span
                    className={`text-xs font-semibold ${
                      product.status === "Active"
                        ? "text-emerald-600"
                        : "text-rose-500"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>

                {/* Action */}
                <div className="col-span-2 flex justify-end gap-1 relative">
                  <button
                    onClick={() => handleCopy(product)}
                    className="p-2 rounded-md text-slate-400 hover:text-indigo-600 hover:bg-indigo-50"
                  >
                    <Copy size={16} />
                  </button>

                  <button
                    onClick={() =>
                      setOpenMenuId(
                        openMenuId === product.id ? null : product.id
                      )
                    }
                    className="p-2 rounded-md cursor-pointer text-slate-400 hover:bg-slate-100"
                  >
                    <MoreVertical size={16} />
                  </button>

                  {openMenuId === product.id && (
                    <div
                      ref={(el) => (menuRefs.current[product.id] = el)}
                      className="absolute right-0 top-10 w-36 bg-white border border-slate-200 rounded-lg shadow-lg z-20"
                    >
                      <Link href={`/dashboard/product-link/edit/${product.id}`}>
                        <button className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-indigo-50 text-left">
                          <Edit size={16} /> Edit
                        </button>
                      </Link>
                      <button className="w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 text-left">
                        <Trash2 size={14} className="inline mr-1" /> Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
