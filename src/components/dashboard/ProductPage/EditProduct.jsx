import Button from "@/components/Sheared/Button";
import Link from "next/link";

const EditProduct = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border font-roboto border-gray-100 p-8">
      <h2 className="text-2xl font-bold text-secondery/80 font-montserrat mb-8">Product Create</h2>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Image Upload */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-text/80 mb-2">
              Image*
            </label>
            <div className="flex-1 border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center p-10 bg-gray-50 hover:bg-white hover:border-indigo-400 transition-all cursor-pointer group">
              <div className="p-4 bg-white rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-500 text-center">
                Drop your file Or{" "}
                <span className="text-indigo-600 font-medium underline">
                  click
                </span>{" "}
                to select
              </p>
            </div>
          </div>

          {/* Right Side: Basic Info */}
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-text/80 mb-1 block">
                Product Name*
              </label>
              <input
                type="text"
                placeholder="Enter Product Name..."
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all shadow-sm"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-text/80 mb-1 block">
                Currency*
              </label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all shadow-sm appearance-none bg-white">
                <option>Select One</option>
                <option>USD - US Dollar</option>
                <option>BDT - Taka</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold text-text/80 mb-1 block">
                Price*
              </label>
              <input
                type="number"
                placeholder="Enter Amount..."
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Bottom Side: Description */}
        <div>
          <label className="text-sm font-semibold text-text/80 mb-1 block">
            Description{" "}
            <span className="text-indigo-500 font-normal">(Optional)</span>
          </label>
          <textarea
            rows="4"
            placeholder="Write Here..."
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all shadow-sm resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <Link href={'/dashboard/products'}>
        <Button gradient className="w-full flex justify-center" size="lg">Submit</Button>
        </Link>
      </form>
    </div>
  );
};

export default EditProduct;
