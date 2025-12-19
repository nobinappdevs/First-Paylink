/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";

const page = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <div className="w-full md:w-6/12 mx-auto xl:p-8 p-4">
      <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
        <h2 className="text-xl font-bold text-text/90 mb-6">
          Change Password
        </h2>

        {/* Current Password */}
        <div className="mb-5">
          <InputField
            label="Current Password"
            type="password"
            name="currentPassword"
            placeholder="Enter Password..."
            required
          />
        </div>

        {/* New Password */}
        <div className="mb-5">
          <InputField
            label="New Password"
            type="password"
            name="newPassword"
            placeholder="Enter Password..."
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <InputField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder="Enter Password..."
            required
          />
        </div>

        <Button className="w-full">
          Change Password
        </Button>
      </div>
    </div>
  );
};

export default page;
