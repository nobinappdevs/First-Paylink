"use client";
import React, { useState, useEffect, useRef } from "react";
import { Search, Link, MoreVertical, Trash2, Edit, CheckCircle, Plus } from "lucide-react";
import Button from "@/components/Sheared/Button"; 

const MOCK_PRODUCTS = [
    {
      id: 1,
      image: "/path/to/rogan_massey.png",
      name: 'Rogan Massey',
      description: 'N/A',
      price: '50.00 USD',
      status: 'Active',
    },
    {
      id: 2,
      image: "/path/to/amazfit_watch.png", 
      name: 'Amazfit Balance AMOLED Display Bluetooth Calling AI-Powered Fitness Smart Watch',
      description: '150+ Sports Modes with Personal AI Coach...',
      price: '30.00 AUD',
      status: 'Inactive',
    },
    {
      id: 3,
      image: "/path/to/lenovo_laptop.png",
      name: 'Lenovo IdeaPad 1 15AMN7 Ryzen 5 7520U 15.6" FHD Laptop',
      description: 'AMD Ryzen 5 7520U | 4C / 8T, 2.8 / 4.3GHz...',
      price: '100.00 USD',
      status: 'Active',
    },
];

export default function ProductTaible() {
  const [products, setProducts] = useState(MOCK_PRODUCTS);
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

  const handleStatusChange = (id, newStatus) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id
          ? { ...product, status: newStatus }
          : product
      )
    );
  };
  
  return (
    <div className="bg-white font-roboto rounded-xl shadow-lg border border-slate-100 overflow-hidden  text-slate-900">
      

      <div className="px-6 py-4 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:max-w-sm">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 text-sm border border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition-all placeholder:text-slate-400"
            aria-label="Search products"
          />
        </div>
        <Button rightIcon={<Plus size={18} />}>
            Add New Product
        </Button>
      </div>
      
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left text-sm table-auto">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="py-3.5 px-6 text-slate-600 font-montserrat text-xs font-semibold uppercase tracking-wider w-16 min-w-[60px]">
                Image
              </th>
              <th className="py-3.5 px-6 text-slate-600 font-montserrat text-xs font-semibold uppercase tracking-wider w-60 min-w-[250px]">
                Product Name
              </th>
              <th className="py-3.5 px-6 text-slate-600 font-montserrat text-xs font-semibold uppercase tracking-wider w-60 min-w-[300px]">
                Description
              </th>
              <th className="py-3.5 px-6 text-slate-600 font-montserrat text-xs font-semibold uppercase tracking-wider w-24 min-w-[100px]">
                Price
              </th>
              <th className="py-3.5 px-6 text-slate-600 font-montserrat text-xs font-semibold uppercase tracking-wider w-40 min-w-40 text-center">
                Status
              </th>
              <th className="py-3.5 px-6 text-right text-slate-600 font-montserrat text-xs font-semibold uppercase tracking-wider w-20 min-w-20">
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
                    {product.description || 'N/A'}
                  </span>
                </td>


                <td className="py-4 px-6 font-bold text-slate-700 whitespace-nowrap">
                  {product.price}
                </td>
                <td className="py-4 px-6 text-center">
                  <div className="relative inline-flex h-8 rounded-lg p-0.5 border border-slate-200 bg-slate-100 shadow-inner w-28">
                    <span
                      aria-hidden="true"
                      className={`absolute top-0.5 h-7 w-1/2 rounded-lg bg-primary_light transition-transform duration-300 ease-in-out ${
                        product.status === 'Active' ? 'translate-x-0' : 'translate-x-full'
                      }`}
                    ></span>

                    <button
                      onClick={() => handleStatusChange(product.id, 'Active')}
                      className={`w-1/2 z-10 cursor-pointer text-xs font-semibold transition-colors duration-300 ${
                        product.status === 'Active'
                          ? 'text-white' 
                          : 'text-slate-700 hover:text-slate-900' 
                      }`}
                      aria-pressed={product.status === 'Active'}
                    >
                      Active
                    </button>
                    
                    <button
                      onClick={() => handleStatusChange(product.id, 'Inactive')}
                      className={`w-1/2 z-10 text-xs cursor-pointer font-semibold transition-colors duration-300 ${
                        product.status === 'Inactive'
                          ? 'text-white' 
                          : 'text-slate-700 hover:text-slate-900' 
                      }`}
                      aria-pressed={product.status === 'Inactive'}
                    >
                      Inactive
                    </button>
                  </div>
                </td>
                
                <td className="py-4 px-6 text-right relative">
                  <div className="flex items-center justify-end gap-1">
                    <button
                      className="p-2 text-slate-400 cursor-pointer hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-all"
                      title="Copy Product Link"
                    >
                      <Link size={16} />
                    </button>
                    <button
                      onClick={() =>
                        setOpenMenuId(openMenuId === product.id ? null : product.id)
                      }
                      data-menu-toggle={product.id}
                      className={`p-2 rounded-md transition-all cursor-pointer ${openMenuId === product.id ? 'bg-slate-100 text-slate-700' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'}`}
                      aria-expanded={openMenuId === product.id}
                      aria-controls={`menu-${product.id}`}
                      aria-label="More options"
                    >
                      <MoreVertical size={16} />
                    </button>
                  </div>

                  {openMenuId === product.id && (
                    <div
                      ref={el => menuRefs.current[product.id] = el}
                      id={`menu-${product.id}`}
                      className="absolute right-6 mt-2 w-40 bg-white border border-slate-200 rounded-lg shadow-xl z-30 origin-top-right animate-fade-in-up"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <button 
                        className="w-full flex items-center cursor-pointer gap-2 text-left px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50/50 hover:text-indigo-600 transition-colors rounded-t-lg"
                        role="menuitem"
                      >
                        <Edit size={16} /> Edit
                      </button>
                      <button 
                        className="w-full flex items-center cursor-pointer gap-2 text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50/50 hover:text-red-700 transition-colors rounded-b-lg"
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