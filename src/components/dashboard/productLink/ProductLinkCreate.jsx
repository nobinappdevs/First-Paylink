'use client';
import InputField from "@/components/ui/InputField";
import LinkPreview from "./LinkPreview";
import Button from "@/components/ui/Button";
import Select from "react-select";
import { reactSelectStyles } from "@/style/selectStyles";

export default function ProductLinkCreate() {
  const pricingTypeOptions = [
  { value: 'fixed_price', label: 'Fixed Price' },
  { value: 'variable_price', label: 'Variable Price' },
  { value: 'subscription', label: 'Subscription' },
];

  return (
    <div className="flex flex-col  lg:flex-row gap-4">
      {/* ===== Left Side ===== */}
      <div className="w-full lg:w-1/2 xl:p-8 p-4 bg-white h-auto">
        <div className="rounded-2xl pt-0 lg:pt-12 space-y-6">
          {/* Select */}
            <div>
              <label className="block text-sm font-medium text-text/80 mb-2">
                Currency{" "}
                <span className="text-red-500" aria-label="required">
                  *
                </span>
              </label>
              <Select
                options={pricingTypeOptions}
                instanceId="currency-select"
                placeholder="Select Currency"
                styles={reactSelectStyles}
                isSearchable
              />
            </div>

          {/* Input 1 */}
          <div>
            <InputField type="text" placeholder="Enter price" label={'Price'} />
          </div>

          {/* Input 2 */}
          <div>
            <InputField type="number" placeholder="Enter quantity" label={'Quantity'} />
          </div>
          {/* Input 3 */}
          <div>
            <InputField type="textarea" placeholder="Enter description" label={'Description'} />
          </div>

          {/* Submit Button */}
          <Button className="w-full">Submit</Button>
        </div>
      </div>

      {/* ===== Right Side Preview ===== */}
      <div className="w-full lg:w-1/2 xl:p-8 p-4 ">
        <LinkPreview />
      </div>
    </div>
  );
}
