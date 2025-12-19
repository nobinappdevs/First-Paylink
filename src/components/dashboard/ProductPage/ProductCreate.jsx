"use client";
import Button from "@/components/ui/Button";
import Link from "next/link";
import ImageUploadField from "../createLinkPage/ImageDropzone";
import InputField from "@/components/ui/InputField";
import Select from "react-select";
import { reactSelectStyles } from "@/style/selectStyles";

const ProductCreate = () => {
  const currencyOptions = [
    { value: "usd", label: "USD - US Dollar" },
    { value: "eur", label: "EUR - Euro" },
    { value: "gbp", label: "GBP - British Pound" },
    { value: "bdt", label: "BDT - Bangladeshi Taka" },
  ];
  return (
    <div className="bg-white rounded-xl shadow-sm border  border-gray-100 p-8">
      <h4 className="text-2xl font-bold text-secondery/80  mb-4">
        Product Create
      </h4>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Image Upload */}
          <div className="flex flex-col">
            <ImageUploadField className="h-[219px]" />
          </div>

          {/* Right Side: Basic Info */}
          <div className="space-y-4">
            <div>
              <InputField
                label={"Product Name"}
                type="text"
                placeholder={"Enter Product Name..."}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text/80 mb-2">
                Currency{" "}
                <span className="text-red-500" aria-label="required">
                  *
                </span>
              </label>
              <Select
                options={currencyOptions}
                instanceId="currency-select"
                placeholder="Select Currency"
                styles={reactSelectStyles}
                isSearchable
              />
            </div>

            <div>
              <InputField
                label={"Price"}
                type="number"
                placeholder={"Enter Amount..."}
              />
            </div>
          </div>
        </div>

        {/* Bottom Side: Description */}
        <div>
          <InputField
            label={"Description"}
            type="textarea"
            placeholder={"Write Here..."}
          />
        </div>

        {/* Submit Button */}
        <Link href={"/dashboard/products"}>
          <Button className="w-full flex justify-center" size="lg">
            Submit
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default ProductCreate;
