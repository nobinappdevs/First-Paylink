// 'use client';

// import React, { useState } from 'react';
// import {
//   Eye,
//   EyeOff,
//   Mail,
//   Lock,
//   User,
//   Phone,
//   CloudUpload
// } from 'lucide-react';
// import Button from '@/components/Sheared/Button';
// import Link from 'next/link';

// const RegistrationPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [profileImage, setProfileImage] = useState(null);

//   return (
//     <main
//       role="main"
//       className="min-h-screen flex items-center justify-center p-4 bg-linear-to-br from-indigo-50/50 via-white to-purple-50/50"
//     >
//       <section
//         aria-labelledby="registersecondery"
//         className="md:w-5/12 w-full  bg-white rounded-2xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50"
//       >
//         {/* Header */}
//         <header className="text-center mb-8">
//           <h1
//             id="registersecondery"
//             className="text-3xl font-extrabold text-gray-900"
//           >
//             Create Account
//           </h1>
//           <p className="text-gray-500 mt-1">
//             Join us and get started
//           </p>
//         </header>

//         {/* Form (NO BUSINESS LOGIC) */}
//         <form className="space-y-5" noValidate>
//           {/* Profile Image */}
//           <div>
//             <label
//               htmlFor="profile-upload"
//               className="block text-sm font-semibold text-gray-700 mb-1"
//             >
//               Profile Picture (optional)
//             </label>

//             <label
//               htmlFor="profile-upload"
//               className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer bg-gray-50 hover:border-primary-500 transition"
//             >
//               <CloudUpload className="h-7 w-7 text-gray-400 mb-2" />
//               <span className="text-sm text-gray-600">
//                 {profileImage ? profileImage.name : 'Click to upload image'}
//               </span>
//             </label>

//             <input
//               id="profile-upload"
//               type="file"
//               accept="image/*"
//               className="hidden"
//               onChange={(e) => setProfileImage(e.target.files?.[0] || null)}
//             />
//           </div>

//           {/* Full Name */}
//           <div>
//             <label
//               htmlFor="fullName"
//               className="block text-sm font-semibold text-gray-700 mb-1"
//             >
//               Full Name
//             </label>
//             <div className="relative">
//               <User
//                 aria-hidden
//                 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
//               />
//               <input
//                 id="fullName"
//                 type="text"
//                 placeholder="John Doe"
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl shadow-md focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:border-primary-500 focus-visible:outline-none transition"
//               />
//             </div>
//           </div>

//           {/* Email */}
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-semibold text-gray-700 mb-1"
//             >
//               Email Address
//             </label>
//             <div className="relative">
//               <Mail
//                 aria-hidden
//                 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
//               />
//               <input
//                 id="email"
//                 type="email"
//                 placeholder="you@example.com"
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl shadow-md focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:border-primary-500 focus-visible:outline-none transition"
//               />
//             </div>
//           </div>

//           {/* Phone */}
//           <div>
//             <label
//               htmlFor="phone"
//               className="block text-sm font-semibold text-gray-700 mb-1"
//             >
//               Phone Number
//             </label>
//             <div className="relative">
//               <Phone
//                 aria-hidden
//                 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
//               />
//               <input
//                 id="phone"
//                 type="tel"
//                 placeholder="+880..."
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl shadow-md focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:border-primary-500 focus-visible:outline-none transition"
//               />
//             </div>
//           </div>

//           {/* Password */}
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-semibold text-gray-700 mb-1"
//             >
//               Password
//             </label>
//             <div className="relative">
//               <Lock
//                 aria-hidden
//                 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
//               />
//               <input
//                 id="password"
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder="••••••••"
//                 className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl shadow-md focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:border-primary-500 focus-visible:outline-none transition"
//               />
//               <button
//                 type="button"
//                 aria-label={showPassword ? 'Hide password' : 'Show password'}
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary-600 p-1 rounded-full"
//               >
//                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </div>
//           </div>

//           {/* Confirm Password */}
//           <div>
//             <label
//               htmlFor="confirmPassword"
//               className="block text-sm font-semibold text-gray-700 mb-1"
//             >
//               Confirm Password
//             </label>
//             <div className="relative">
//               <Lock
//                 aria-hidden
//                 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
//               />
//               <input
//                 id="confirmPassword"
//                 type={showConfirmPassword ? 'text' : 'password'}
//                 placeholder="••••••••"
//                 className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl shadow-md focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:border-primary-500 focus-visible:outline-none transition"
//               />
//               <button
//                 type="button"
//                 aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary-600 p-1 rounded-full"
//               >
//                 {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </div>
//           </div>

//           {/* Submit */}
//           <Button
//             type="button"
//             className="w-full py-3 text-lg font-semibold rounded-xl shadow-lg shadow-primary-500/30"
//           >
//             Create Account
//           </Button>
//         </form>

//         {/* Switch */}
//         <p className="text-center text-sm text-gray-600 mt-8">
//           Already have an account?{' '}
//           <Link
//             href="/login"
//             className="text-primary-600 font-semibold hover:underline"
//           >
//             Sign In
//           </Link>
//         </p>
//       </section>
//     </main>
//   );
// };

// export default RegistrationPage;

"use client";
import Button from "@/components/ui/Button";
import Link from "next/link";
import InputField from "../ui/InputField";
import Select from "react-select";
import { reactSelectStyles } from "@/style/selectStyles";

const RegisterPage = () => {

  const country = [
    { label: "Bangladesh", value: "Bangladesh" },
    { label: "India", value: "India" },
    { label: "United States", value: "United States" },
    { label: "United Kingdom", value: "United Kingdom" },
  ];

  return (
    <main
      role="main"
      className="min-h-screen flex items-center  justify-center p-4"
    >
      <section
        aria-labelledby="registersecondery"
        className="w-full md:w-5/12 bg-white rounded-xl p-8 border border-text/10"
      >
        {/* Header */}
        <header className="text-center mb-8">
          <h4>Register for an Account Today</h4>
          <h6 className="text-gray-500 mt-2 text-sm">
            Become a part of our community by registering for an account today.
            Enjoy a range of benefits and features tailored to meet your needs.
          </h6>
        </header>

        {/* Form */}
        <form className="space-y-5" noValidate>
          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <InputField
                label={"First Name"}
                placeholder={"First Name"}
                type="text"
              />
            </div>
            <div>
              <InputField
                label={"Last Name"}
                placeholder={"Last Name"}
                type="text"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <InputField
              label={"Email Address"}
              placeholder={"Email Address"}
              type="email"
            />
          </div>

          {/* Country */}
          <div>
            <label className="text-sm font-medium text-slate-700 mb-1 block">
              Payment Gateway *
            </label>
            <Select
              options={country}
              instanceId="gateway-select"
              placeholder="Select Gateway"
              styles={reactSelectStyles}
              isSearchable
            />
          </div>

          {/* Company */}
          <div>
            <InputField
              label={"Company Name"}
              placeholder={"Company Name"}
              type="text"
            />
          </div>

          {/* Password */}
          <div>
            <InputField
              label={"Password"}
              placeholder={"Password"}
              type="password"
            />
          </div>

          {/* Terms */}
          <label className="flex cursor-pointer items-start gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              className="mt-1 w-4 h-4 accent-primary cursor-pointer rounded"
            />
            <span>
              I have agreed with{" "}
              <span className="text-primary-600 font-medium">
                Terms Of Use & Privacy Policy
              </span>
            </span>
          </label>

          {/* Submit */}
          <Button type="button" className="w-full">
            Register Now
          </Button>
        </form>

        {/* Switch */}
        <h6 className="text-center  mt-8">
          Already Have An Account?{" "}
          <Link
            href="/login"
            className="text-primary-600 font-semibold hover:underline"
          >
            Login Now
          </Link>
        </h6>
      </section>
    </main>
  );
};

export default RegisterPage;
