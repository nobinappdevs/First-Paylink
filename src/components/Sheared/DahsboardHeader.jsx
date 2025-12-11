import { Plus, Filter } from "lucide-react";
import Button from "./Button";

const DahsboardHeader = () => {
  return (
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 mb-4 border-b border-b-text/10 ">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-secondery font-montserrat">
            Payment Links
          </h1>
          <p className="text-text font-roboto text-sm mt-1">
            Manage your payment links and track transactions.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="hidden sm:flex items-center">
            <div className="relative">
              <Filter
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
              />
              <select className="cursor-pointer font-roboto  appearance-none pl-10 pr-8 py-2 bg-white border border-gray-200 text-text rounded-lg hover:bg-gray-50 text-sm font-bold transition-all shadow-sm">
                <option>Filter</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Donation</option>
                <option>Products</option>
              </select>

              {/* Dropdown arrow */}
              <svg
                className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <Button className="cursor-pointer" rightIcon={<Plus size={16} />}>
            New Payment Link
          </Button>
        </div>
      </div>
  );
};

export default DahsboardHeader;
