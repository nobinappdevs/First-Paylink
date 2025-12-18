"use client";
import { Plus, Filter } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";
import Select from "react-select";
import { reactSelectStyles } from "@/style/selectStyles";

const DahsboardHeader = ({ url }) => {
  const filterOptions = [
    { value: "all", label: "Filter" },
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
    { value: "donation", label: "Donation" },
    { value: "products", label: "Products" },
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 mb-4 border-b border-b-text/10 ">
      <div>
        <h4 className="text-2xl font-bold tracking-tight text-secondery/80 font-montserrat">
          Payment Links
        </h4>
        <h6 className="text-text/60 font-roboto text-sm mt-1">
          Manage your payment links and track transactions.
        </h6>
      </div>
      <div className="flex gap-3">
        <div className="hidden sm:flex items-center">
          <div className="relative">
            <Select
              options={filterOptions}
              instanceId="currency-select"
              placeholder="Select Currency"
              styles={reactSelectStyles}
              isSearchable
            />
          </div>
        </div>
        <Link href={url}>
          <Button
            className="cursor-pointer py-10"
            rightIcon={<Plus size={16} />}
          >
            New Payment Link
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DahsboardHeader;
