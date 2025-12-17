import Image from "next/image";
import { Upload, Mail, Trash2 } from "lucide-react";
import Button from "@/components/Sheared/Button";

const ProfilePage = () => {

  return (
    <div className="max-w-6xl mx-auto px-4 font-roboto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-secondery/80 font-montserrat">User Profile</h1>
        <Button
          rightIcon={<Trash2 size={20}  />}
          className="bg-red-600 hover:bg-red-700 cursor-pointer"
        >
          Delete Profile
        </Button>
      </div>

        {/* Left Section */}
        <div className=" space-y-6">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
            {/* Cover */}
            <div className="relative h-48 bg-linear-to-r from-primary to-primary_light">
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
                <h2 className="text-xl font-bold text-white font-montserrat">App Devs</h2>
                <div className="flex items-center text-indigo-100 text-sm mt-1">
                  <Mail size={14} className="mr-2" />
                  user@appdevs.net
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="pt-20 p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                ["First Name*", "App"],
                ["Last Name*", "Devs"],
              ].map(([label, value]) => (
                <div key={label}>
                  <label className="block text-sm font-semibold text-text/80 mb-2 font-montserrat">
                    {label}
                  </label>
                  <input
                    defaultValue={value}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-text/80 focus:border-transparent transition-all"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-semibold text-text/80 mb-2 font-montserrat">
                  Country
                </label>
                <select className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-text/80 focus:border-transparent transition-all bg-white">
                  <option>Bangladesh</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-text/80 mb-2 font-montserrat">
                  Mobile
                </label>
                <input
                  placeholder="Enter Number..."
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-text/80 focus:border-transparent transition-all"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-text/80 mb-2 font-montserrat">
                  Company Name
                </label>
                <input
                  defaultValue="ABC LTD"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-text/80 focus:border-transparent transition-all"
                />
              </div>

              {["Address", "City", "State", "Zip Code"].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-semibold text-text/80 mb-2 font-montserrat">
                    {field}
                  </label>
                  <input
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-text/80 focus:border-transparent transition-all"
                  />
                </div>
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

