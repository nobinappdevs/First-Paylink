import LinkPreview from "./LinkPreview";

export default function ProductLinkCreate() {
  return (
    <div className="flex flex-col font-roboto lg:flex-row gap-6">
      {/* ===== Left Side ===== */}
      <div className="w-full lg:w-1/2 xl:p-8 p-4 bg-white h-auto">
        <div className="rounded-2xl space-y-6">
          {/* Select */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Select Type
            </label>
            <select
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm shadow-gray-200/60 focus:ring-2 focus:ring-slate-800 focus:shadow-md focus:outline-none cursor-pointer transition-all"
            >
              <option>Fixed Price</option>
              <option>Variable Price</option>
              <option>Subscription</option>
            </select>
          </div>

          {/* Input 1 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Price
            </label>
            <input
              type="text"
              placeholder="Enter price"
              className="w-full px-4 py-3 rounded-xl border border-gray-200  shadow-sm shadow-gray-200/60 focus:ring-2 focus:ring-slate-800 focus:shadow-md focus:outline-none transition-all"
            />
          </div>

          {/* Input 2 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Quantity
            </label>
            <input
              type="text"
              placeholder="Enter quantity"
              className="w-full px-4 py-3 rounded-xl border border-gray-200  shadow-sm shadow-gray-200/60 focus:ring-2 focus:ring-slate-800 focus:shadow-md focus:outline-none transition-all"
            />
          </div>

          {/* Input 3 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description
            </label>
            <input
              type="text"
              placeholder="Optional description"
              className="w-full px-4 py-3 rounded-xl border border-gray-200  shadow-sm shadow-gray-200/60 focus:ring-2 focus:ring-slate-800 focus:shadow-md focus:outline-none transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            className="w-full bg-slate-900 hover:bg-slate-800 text-white  py-3 rounded-xl font-bold shadow-lg shadow-slate-900/30 transition-all cursor-pointer active:scale-[0.98]"
          >
            Submit
          </button>
        </div>
      </div>

      {/* ===== Right Side Preview ===== */}
      <div className="w-full lg:w-1/2 xl:p-8 p-4 ">
        <LinkPreview />
      </div>
    </div>
  );
}
