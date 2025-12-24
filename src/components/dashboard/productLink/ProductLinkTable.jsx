// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { MoreVertical, Copy, Trash2, Plus, Edit } from "lucide-react";
// import Swal from "sweetalert2";
// import Link from "next/link";
// import Button from "@/components/ui/Button";
// import { getProductLinkList } from "@/services/apiClient";
// import SkeletonLoader from "@/components/Sheared/Skeleton";



// export default function ProductLinkTable({id}) {
//   const productLinkId = id;
//     const [loading, setLoading] = useState(true);
//   const [products, setProducts] = useState([]);
//   const [openMenuId, setOpenMenuId] = useState(null);
//   const menuRefs = useRef({});

//   console.log(products);

//   const toggleStatus = (id) => {
//     setProducts((prev) =>
//       prev.map((p) =>
//         p.id === id
//           ? { ...p, status: p.status === "Active" ? "Inactive" : "Active" }
//           : p
//       )
//     );
//   };

//   const handleCopy = (product) => {
//     if (product.product_links.status !== "Active") {
//       Swal.fire({
//         icon: "warning",
//         title: "Inactive Product",
//         text: "You can't copy link for inactive product",
//       });
//       return;
//     }
//     Swal.fire({
//       icon: "success",
//       title: "Link Copied",
//       timer: 1200,
//       showConfirmButton: false,
//     });
//   };

//     const fetchProducts = async () => {
//       try {
//         const res = await getProductLinkList(productLinkId);
//         const data = res?.data?.data;
//         setProducts(data?.product_links || [])
//       } catch (error) {
//         console.error(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     useEffect(() => {
//       fetchProducts();
//     }, []);

//   useEffect(() => {
//     const close = (e) => {
//       if (
//         openMenuId &&
//         menuRefs.current[openMenuId] &&
//         !menuRefs.current[openMenuId].contains(e.target)
//       ) {
//         setOpenMenuId(null);
//       }
//     };
//     document.addEventListener("mousedown", close);
//     return () => document.removeEventListener("mousedown", close);
//   }, [openMenuId]);
//   if (loading) {
//     return <SkeletonLoader />
//   }

//   return (
//     <>
//       <div className="flex justify-between items-center mb-8">
//         <h4>Product Link</h4>
//         <Link href={"/dashboard/product-link/create/2"}>
//         <Button rightIcon={<Plus size={18} />}>Create Link</Button>
//         </Link>
//       </div>
//       <div className="w-full overflow-x-auto">
//         <div className="min-w-[900px] bg-white rounded-xl  shadow-sm border border-slate-100">
//           {/* Table Header */}
//           <div className="grid grid-cols-12 px-6 py-3 text-xs font-semibold text-slate-500 bg-slate-50 rounded-t-xl whitespace-nowrap">
//             <div className="col-span-4">Product Price</div>
//             <div className="col-span-2 text-center">Quantity</div>
//             <div className="col-span-4 text-center">Status</div>
//             <div className="col-span-2 text-right">Action</div>
//           </div>

//           {/* Table Body */}
//           <div className="divide-y divide-slate-100">
//             {products.map((product) => (
//               <div
//                 key={product.product_links.product_links.id}
//                 className="grid grid-cols-12 items-center px-6 py-4 hover:bg-slate-50 transition whitespace-nowrap"
//               >
//                 {/* Price */}
//                 <div className="col-span-4 font-medium text-slate-800">
//                   {product.product_links.product_links.price}
//                 </div>

//                 {/* Quantity */}
//                 <div className="col-span-2 text-center text-slate-600">
//                   {product.product_links.product_links.qty}
//                 </div>

//                 {/* Status */}
//                 <div className="col-span-4 flex items-center justify-center gap-3">
//                   <button
//                     onClick={() => toggleStatus(product.product_links.product_links.id)}
//                     className={`relative w-14 h-6 rounded-full transition
//                 ${
//                   product.product_links.product_links.status === "Active"
//                     ? "bg-emerald-500"
//                     : "bg-slate-300"
//                 }`}
//                   >
//                     <span
//                       className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition
//                   ${product.product_links.product_links.status === "Active" ? "translate-x-8" : ""}`}
//                     />
//                   </button>

//                   <span
//                     className={`text-xs font-semibold ${
//                       product.product_links.product_links.status === "Active"
//                         ? "text-emerald-600"
//                         : "text-rose-500"
//                     }`}
//                   >
//                     {product.product_links.product_links.status}
//                   </span>
//                 </div>

//                 {/* Action */}
//                 <div className="col-span-2 flex justify-end gap-1 relative">
//                   <button
//                     onClick={() => handleCopy(product.product_links.product_links)}
//                     className="p-2 rounded-md text-slate-400 hover:text-indigo-600 hover:bg-indigo-50"
//                   >
//                     <Copy size={16} />
//                   </button>

//                   <button
//                     onClick={() =>
//                       setOpenMenuId(
//                         openMenuId === product.product_links.product_links.id ? null : product.product_links.product_links.id
//                       )
//                     }
//                     className="p-2 rounded-md cursor-pointer text-slate-400 hover:bg-slate-100"
//                   >
//                     <MoreVertical size={16} />
//                   </button>

//                   {openMenuId === product.product_links.product_links.id && (
//                     <div
//                       ref={(el) => (menuRefs.current[product.product_links.product_links.id] = el)}
//                       className="absolute right-0 top-10 w-36 bg-white border border-slate-200 rounded-lg shadow-lg z-20"
//                     >
//                       <Link href={`/dashboard/product-link/edit/${product.product_links.product_links.id}`}>
//                         <button className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-indigo-50 text-left">
//                           <Edit size={16} /> Edit
//                         </button>
//                       </Link>
//                       <button className="w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 text-left">
//                         <Trash2 size={14} className="inline mr-1" /> Delete
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


"use client";

import React, { useState, useRef, useEffect } from "react";
import { MoreVertical, Copy, Trash2, Plus, Edit } from "lucide-react";
import Swal from "sweetalert2";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { getProductLinkList, UpdateProductLinkStatus } from "@/services/apiClient";
import SkeletonLoader from "@/components/Sheared/Skeleton";

export default function ProductLinkTable({ id }) {
  const productLinkId = id;
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [toggleLoadingId, setToggleLoadingId] = useState(null);
  const menuRefs = useRef({});

  const fetchProducts = async () => {
    try {
      const res = await getProductLinkList(productLinkId);
      const data = res?.data?.data;
      setProducts(data?.product_links || []);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [productLinkId]);

  const handleCopy = (product) => {
    if (product.product_links.status !== "Active") {
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

  const toggleStatus = async (product) => {
    const newStatus = product.product_links.status === "Active" ? "Inactive" : "Active";
    setToggleLoadingId(product.product_links.id);

    try {
      await UpdateProductLinkStatus({
        data_target: product.product_links.id,
        status: product.product_links.status,
      });

      // update UI immediately
      setProducts((prev) =>
        prev.map((p) =>
          p.id === product.product_links.id ? { ...p, status: newStatus } : p
        )
      );
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to update status",
      });
    } finally {
      setToggleLoadingId(null);
    }
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

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h4>Product Link</h4>
        <Link href={`/dashboard/product-link/create/${productLinkId}`}>
          <Button rightIcon={<Plus size={18} />}>Create Link</Button>
        </Link>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="min-w-[900px] bg-white rounded-xl shadow-sm border border-slate-100">
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
                key={product.product_links.id}
                className="grid grid-cols-12 items-center px-6 py-4 hover:bg-slate-50 transition whitespace-nowrap"
              >
                {/* Price */}
                <div className="col-span-4 font-medium text-slate-800">
                  {product.product_links.price}
                </div>

                {/* Quantity */}
                <div className="col-span-2 text-center text-slate-600">
                  {product.product_links.qty}
                </div>

                {/* Status */}
                <div className="col-span-4 flex items-center justify-center gap-3">
                  <button
                    onClick={() => toggleStatus(product)}
                    disabled={toggleLoadingId === product.product_links.id}
                    className={`relative w-14 h-6 rounded-full transition ${
                      product.product_links.status === "Active" ? "bg-emerald-500" : "bg-slate-300"
                    }`}
                  >
                    {toggleLoadingId === product.product_links.id ? (
                      <span className="absolute top-1 left-1 w-4 h-4 bg-gray-200 rounded-full animate-pulse" />
                    ) : (
                      <span
                        className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition ${
                          product.product_links.status === "Active" ? "translate-x-8" : ""
                        }`}
                      />
                    )}
                  </button>

                  <span
                    className={`text-xs font-semibold ${
                      product.product_links.status === "Active" ? "text-emerald-600" : "text-rose-500"
                    }`}
                  >
                    {product.product_links.status}
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
                      setOpenMenuId(openMenuId === product.product_links.id ? null : product.product_links.id)
                    }
                    className="p-2 rounded-md cursor-pointer text-slate-400 hover:bg-slate-100"
                  >
                    <MoreVertical size={16} />
                  </button>

                  {openMenuId === product.product_links.id && (
                    <div
                      ref={(el) => (menuRefs.current[product.product_links.id] = el)}
                      className="absolute right-0 top-10 w-36 bg-white border border-slate-200 rounded-lg shadow-lg z-20"
                    >
                      <Link href={`/dashboard/product-link/edit/${product.product_links.id}`}>
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
