/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useState } from 'react';
import Button from '@/components/Sheared/Button';
import { Eye, EyeOff } from 'lucide-react';

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

            {[
              ["Current Password*", showCurrent, setShowCurrent],
              ["New Password*", showNew, setShowNew],
              ["Confirm Password*", showConfirm, setShowConfirm],
            ].map(([label, show, setShow], i) => (
              <div key={i} className="mb-5 relative">
                <label className="block text-sm font-semibold text-text/80 mb-2 font-montserrat">
                  {label}
                </label>
                <input
                  type={show ? "text" : "password"}
                  placeholder="Enter Password..."
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-text/80 focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-10 text-gray-400 hover:text-indigo-600 cursor-pointer"
                >
                  {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            ))}
            <Button className="w-full ">Change Password</Button>
          </div>
        </div>
    );
};

export default page;