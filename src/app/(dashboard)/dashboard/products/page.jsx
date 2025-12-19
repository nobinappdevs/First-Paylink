import ProductTaible from "@/components/dashboard/ProductPage/ProductTaible";
import React from "react";

const page = () => {
  return (
    <div className="xl:p-8 p-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 mb-4 border-b border-b-text/10 ">
        <div>
          <h4 className="text-2xl font-bold tracking-tight text-secondery">
            Products
          </h4>
          <h6 className="text-text  text-sm mt-1">
            Manage your payment links and track transactions.
          </h6>
        </div>
      </div>
      <ProductTaible />
    </div>
  );
};

export default page;
