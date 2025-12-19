import Image from "next/image";
import { Upload, Mail, Trash2 } from "lucide-react";
import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";

const ProfilePage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 ">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h4 className="text-2xl font-bold text-secondery/80 ">
          User Profile
        </h4>
        <Button
          rightIcon={<Trash2 size={20} />}
          className="bg-red-600!"
        >
          Delete Profile
        </Button>
      </div>

      {/* Left Section */}
      <div className=" space-y-6">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
          {/* Cover */}
          <div className="relative h-48 bg-linear-to-r from-primary to-primary">
            {/* Avatar */}
            <div className="absolute -bottom-14 left-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-md">
                  <Image
                    src="/avatar.png"
                    alt="Profile"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <button className="absolute bottom-1 right-1 bg-slate-900 p-2 rounded-full text-white border-2 border-white hover:bg-slate-700 transition cursor-pointer">
                  <Upload size={14} />
                </button>
              </div>
            </div>

            {/* Info */}
            <div className="absolute bottom-6 left-44">
              <h4 className="text-xl font-bold text-white! ">
                App Devs
              </h4>
              <div className="flex items-center text-indigo-100 text-sm mt-1">
                <Mail size={14} className="mr-2" />
                user@appdevs.net
              </div>
            </div>
          </div>

          {/* Form */}
          {/* <div className="pt-20 p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ["First Name*", "App"],
              ["Last Name*", "Devs"],
            ].map(([label, value]) => (
              <div key={label}>
                <label className="block text-sm font-semibold text-text/80 mb-2 ">
                  {label}
                </label>
                <input
                  defaultValue={value}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-text/80 focus:border-transparent transition-all"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-semibold text-text/80 mb-2 ">
                Country
              </label>
              <select className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-text/80 focus:border-transparent transition-all bg-white">
                <option>Bangladesh</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-text/80 mb-2 ">
                Mobile
              </label>
              <input
                placeholder="Enter Number..."
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-text/80 focus:border-transparent transition-all"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-text/80 mb-2 ">
                Company Name
              </label>
              <input
                defaultValue="ABC LTD"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-text/80 focus:border-transparent transition-all"
              />
            </div>

            {["Address", "City", "State", "Zip Code"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-semibold text-text/80 mb-2 ">
                  {field}
                </label>
                <input className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-text/80 focus:border-transparent transition-all" />
              </div>
            ))}
          </div> */}

<div className="pt-20 p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* First & Last Name */}
  {[
    { label: "First Name*", defaultValue: "App", name: "firstName" },
    { label: "Last Name*", defaultValue: "Devs", name: "lastName" },
  ].map((item) => (
    <InputField
      key={item.name}
      label={item.label}
      name={item.name}
      defaultValue={item.defaultValue}
      required
    />
  ))}

  {/* Country */}
  <div className="flex flex-col gap-1 w-full">
    <label className="block text-sm font-medium text-text/80 mb-1">
      Country <span className="text-red-500">*</span>
    </label>
    <select
      className="w-full bg-white border border-[#e5e5e5] rounded-[5px] h-[45px] px-[15px] text-[14px] font-medium text-[#425466] outline-none focus:border-primary"
    >
      <option>Bangladesh</option>
    </select>
  </div>

  {/* Mobile */}
  <InputField
    label="Mobile"
    name="mobile"
    placeholder="Enter Number..."
    type="text"
  />

  {/* Company Name (Full Width) */}
  <div className="md:col-span-2">
    <InputField
      label="Company Name"
      name="company"
      defaultValue="ABC LTD"
    />
  </div>

  {/* Address Fields */}
  {["Address", "City", "State", "Zip Code"].map((field) => (
    <InputField
      key={field}
      label={field}
      name={field.toLowerCase().replace(" ", "_")}
    />
  ))}
</div>


          <div className="p-8 pt-0">
            <Button className="w-full"> Update Profile</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
