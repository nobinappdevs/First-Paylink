"use client";

import Image from "next/image";
import { Upload, Mail, Trash2 } from "lucide-react";
import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import { useRef, useState } from "react";
import profile from "@assets/profile-default.webp";

const ProfilePage = () => {
  const fileRef = useRef(null);
  const [avatarPreview, setAvatarPreview] = useState(profile);

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setAvatarPreview(previewUrl);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 ">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h4>User Profile</h4>
        <Button rightIcon={<Trash2 size={20} />} className="bg-red-600!">
          Delete Profile
        </Button>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-2xl  overflow-hidden border border-text/10">
          {/* Cover */}
          <div className="relative h-48 bg-linear-to-r from-primary to-primary">
            {/* Avatar */}
            <div className="absolute -bottom-14 left-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-md">
                  <Image
                    src={avatarPreview}
                    alt="Profile"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Upload Button */}
                <button
                  type="button"
                  onClick={() => fileRef.current.click()}
                  className="absolute bottom-1 right-1 bg-slate-900 p-2 rounded-full text-white border-2 border-white hover:bg-slate-700 transition cursor-pointer"
                >
                  <Upload size={14} />
                </button>

                {/* Hidden Input */}
                <input
                  type="file"
                  accept="image/*"
                  ref={fileRef}
                  hidden
                  onChange={handleAvatarChange}
                />
              </div>
            </div>

            {/* Info */}
            <div className="absolute bottom-6 left-44">
              <h4 className="text-xl font-bold text-white! ">App Devs</h4>
              <div className="flex items-center text-indigo-100 text-sm mt-1">
                <Mail size={14} className="mr-2" />
                user@appdevs.net
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="pt-20 p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
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

            <div className="flex flex-col gap-1 w-full">
              <label className="block text-sm font-medium text-text/80 mb-1">
                Country <span className="text-red-500">*</span>
              </label>
              <select className="w-full bg-white border border-[#e5e5e5] rounded-[5px] h-[45px] px-[15px] text-[14px] font-medium text-[#425466] outline-none focus:border-primary">
                <option>Bangladesh</option>
              </select>
            </div>

            <InputField
              label="Mobile"
              name="mobile"
              placeholder="Enter Number..."
              type="text"
            />

            <div className="md:col-span-2">
              <InputField
                label="Company Name"
                name="company"
                defaultValue="ABC LTD"
              />
            </div>

            {["Address", "City", "State", "Zip Code"].map((field) => (
              <InputField
                key={field}
                label={field}
                name={field.toLowerCase().replace(" ", "_")}
              />
            ))}
          </div>

          <div className="p-8 pt-0">
            <Button className="w-full">Update Profile</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
