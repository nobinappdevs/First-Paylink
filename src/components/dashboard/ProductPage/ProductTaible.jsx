"use client";
import React, { useState, useEffect, useRef } from "react";
import { Search, MoreVertical, Trash2, Edit, Plus, Link2 } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import InputField from "@/components/ui/InputField";

const MOCK_PRODUCTS = [
  {
    id: 1,
    image: "/path/to/amazfit_watch.png",
    name: "Amazfit Balance AMOLED Display Bluetooth Calling AI-Powered Fitness Smart Watch",
    description: "150+ Sports Modes with Personal AI Coach...",
    price: "30.00 AUD",
    status: "Inactive",
  },
  {
    id: 2,
    image: "/path/to/lenovo_laptop.png",
    name: 'Lenovo IdeaPad 1 15AMN7 Ryzen 5 7520U 15.6" FHD Laptop',
    description: "AMD Ryzen 5 7520U | 4C / 8T, 2.8 / 4.3GHz...",
    price: "100.00 USD",
    status: "Active",
  },
  {
    id: 3,
    image: "/path/to/rogan_massey.png",
    name: "Rogan Massey",
    description: "N/A",
    price: "50.00 USD",
    status: "Active",
  },
];

export default function ProductTaible() {
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRefs = useRef({});
  const router = useRouter();

  const handleClick = (product) => {
    if (product.status !== "Active") {
      Swal.fire({
        icon: "warning",
        title: "Product Inactive",
        text: "This product is not active. You cannot access the link.",
        confirmButtonText: "OK",
      });
      return;
    }
    router.push(`/dashboard/product-link/${product.id}`);
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        openMenuId &&
        menuRefs.current[openMenuId] &&
        !menuRefs.current[openMenuId].contains(e.target)
      ) {
        const isMoreButton = e.target.closest(
          `[data-menu-toggle="${openMenuId}"]`
        );
        if (!isMoreButton) {
          setOpenMenuId(null);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenuId]);

  const handleStatusChange = (id, newStatus) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, status: newStatus } : product
      )
    );
  };

  return (
    <div className="bg-white  rounded-xl  border border-text/15 overflow-hidden text-slate-900">
      <div className="px-6 py-4 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 mb-4">
        <div className="relative w-full sm:max-w-sm">
          <InputField icon={Search} placeholder="Search products..." name={Search} />
        </div>
        <Link href={"/dashboard/products/create"}>
          <Button rightIcon={<Plus size={18} />}>Add New Product</Button>
        </Link>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="w-full text-left text-sm table-auto">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="py-3.5 px-6 text-slate-600  text-xs font-semibold uppercase tracking-wider w-16 min-w-[60px]">
                Image
              </th>
              <th className="py-3.5 px-6 text-slate-600  text-xs font-semibold uppercase tracking-wider w-60 min-w-[250px]">
                Product Name
              </th>
              <th className="py-3.5 px-6 text-slate-600  text-xs font-semibold uppercase tracking-wider w-60 min-w-[300px]">
                Description
              </th>
              <th className="py-3.5 px-6 text-slate-600  text-xs font-semibold uppercase tracking-wider w-24 min-w-[100px]">
                Price
              </th>
              <th className="py-3.5 px-6 text-slate-600  text-xs font-semibold uppercase tracking-wider w-40 min-w-40 text-center">
                Status
              </th>
              <th className="py-3.5 px-6 text-right text-slate-600  text-xs font-semibold uppercase tracking-wider w-20 min-w-20">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {products.map((product) => (
              <tr
                key={product.id}
                className="group hover:bg-slate-50 transition-colors"
              >
                <td className="py-3 px-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg overflow-hidden flex items-center justify-center border border-slate-200">
                    <span className="text-xs text-slate-500">
                      P-{product.id}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="font-medium text-slate-800 line-clamp-2">
                    {product.name}
                  </span>
                </td>
                <td className="py-4 px-6 text-slate-600">
                  <span className="text-sm line-clamp-2">
                    {product.description || "N/A"}
                  </span>
                </td>

                <td className="py-4 px-6 font-bold text-slate-700 whitespace-nowrap">
                  {product.price}
                </td>
                <td className="py-4 px-6 text-center">
                  <div className="flex items-center justify-center gap-4">
                    {/* Toggle */}
                    <button
                      onClick={() =>
                        handleStatusChange(
                          product.id,
                          product.status === "Active" ? "Inactive" : "Active"
                        )
                      }
                      aria-pressed={product.status === "Active"}
                      className={`relative inline-flex cursor-pointer h-6 w-14 items-center rounded-full
        transition-all duration-300 ease-in-out
        ${
          product.status === "Active"
            ? "bg-emerald-500  shadow-[inset_0_2px_6px_rgba(255,255,255,0.25),0_6px_12px_rgba(115,103,240,0.45)]"
            : "bg-slate-300 shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),0_4px_10px_rgba(0,0,0,0.15)]"
        }
      `}
                    >
                      {/* Knob */}
                      <span
                        className={`absolute h-4 w-4 rounded-full bg-white
          transition-all duration-300 ease-in-out
          shadow-[0_6px_12px_rgba(0,0,0,0.25),inset_0_-2px_4px_rgba(0,0,0,0.15)]
          ${product.status === "Active" ? "translate-x-9" : "translate-x-1"}
        `}
                      />

                      {/* Soft highlight */}
                      <span className="pointer-events-none absolute inset-0 rounded-full bg-linear-to-b from-white/30 to-transparent" />
                    </button>

                    {/* Status Text */}
                    <span
                      className={`text-sm font-semibold  tracking-wide transition-colors duration-300
        ${
          product.status === "Active"
            ? "text-green-600 "
            : "text-red-500 "
        }
      `}
                    >
                      {product.status === "Active" ? "Active" : "Inactive"}
                    </span>
                  </div>
                </td>

                {/* Actions */}
                <td className="py-4 px-6 text-right relative">
                  <div className="flex items-center justify-end gap-1">
                    <button
                      onClick={() => handleClick(product)}
                      className="p-2 text-slate-400 cursor-pointer hover:text-white hover:bg-primary rounded-md transition-all"
                      title="Copy Product Link"
                    >
                      <Link2 size={16} />
                    </button>
                    <button
                      onClick={() =>
                        setOpenMenuId(
                          openMenuId === product.id ? null : product.id
                        )
                      }
                      data-menu-toggle={product.id}
                      className={`p-2 rounded-md transition-all cursor-pointer ${
                        openMenuId === product.id
                          ? "bg-slate-100 text-slate-700"
                          : "text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                      }`}
                      aria-expanded={openMenuId === product.id}
                      aria-controls={`menu-${product.id}`}
                      aria-label="More options"
                    >
                      <MoreVertical size={16} />
                    </button>
                  </div>

                  {openMenuId === product.id && (
                    <div
                      ref={(el) => (menuRefs.current[product.id] = el)}
                      id={`menu-${product.id}`}
                      className="absolute right-6 mt-2 w-40 bg-white border border-slate-200 rounded-lg shadow-xl z-30 origin-top-right animate-fade-in-up"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <Link href={`/dashboard/products/edit/${product.id}`}>
                        <button
                          className="w-full flex items-center cursor-pointer gap-2 text-left px-4 py-2 text-sm text-slate-700 hover:text-white hover:bg-primary transition-colors rounded-t-lg"
                          role="menuitem"
                        >
                          <Edit size={16} /> Edit
                        </button>
                      </Link>
                      <button
                        className="w-full flex items-center cursor-pointer gap-2 text-left px-4 py-2 text-sm text-red-600 hover:text-white hover:bg-primary transition-colors rounded-b-lg"
                        role="menuitem"
                      >
                        <Trash2 size={16} /> Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 text-center sm:text-left">
        Showing {products.length} products.
      </div>
    </div>
  );
}
