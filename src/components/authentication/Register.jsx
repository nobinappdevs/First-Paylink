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
//         aria-labelledby="register-title"
//         className="md:w-5/12 w-full  bg-white rounded-2xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50"
//       >
//         {/* Header */}
//         <header className="text-center mb-8">
//           <h1
//             id="register-title"
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



'use client';

import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Building2, Globe } from 'lucide-react';
import Button from '@/components/Sheared/Button';
import Link from 'next/link';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main
      role="main"
      className="min-h-screen flex items-center font-roboto justify-center p-4 bg-linear-to-br from-indigo-50/50 via-white to-purple-50/50"
    >
      <section
        aria-labelledby="register-title"
        className="w-full md:w-5/12 bg-white rounded-2xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50"
      >
        {/* Header */}
        <header className="text-center mb-8">
          <h2
            id="register-title"
            className="text-2xl font-extrabold font-montserrat  text-secondery/90"
          >
            Register for an Account Today
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Become a part of our community by registering for an account today.
            Enjoy a range of benefits and features tailored to meet your needs.
          </p>
        </header>

        {/* Form */}
        <form className="space-y-5" noValidate>
          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User
                  aria-hidden
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                />
                <input
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl shadow-md focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:border-primary-500 focus-visible:outline-none transition"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User
                  aria-hidden
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                />
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl shadow-md focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:border-primary-500 focus-visible:outline-none transition"
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Mail
                aria-hidden
                className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
              />
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl shadow-md focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:border-primary-500 focus-visible:outline-none transition"
              />
            </div>
          </div>

          {/* Country */}
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Country <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Globe
                aria-hidden
                className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
              />
              <select
                id="country"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl shadow-md bg-white focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:border-primary-500 focus-visible:outline-none transition"
              >
                <option value="">Select Country</option>
                <option>Bangladesh</option>
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
              </select>
            </div>
          </div>

          {/* Company */}
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Company Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Building2
                aria-hidden
                className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
              />
              <input
                id="company"
                type="text"
                placeholder="Company Name"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl shadow-md focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:border-primary-500 focus-visible:outline-none transition"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Lock
                aria-hidden
                className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
              />
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl shadow-md focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:border-primary-500 focus-visible:outline-none transition"
              />
              <button
                type="button"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary-600 p-1 rounded-full"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Terms */}
          <label className="flex items-start gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              className="mt-1 rounded border-gray-300 text-primary-600 focus-visible:ring-primary-500"
            />
            <span>
              I have agreed with{' '}
              <span className="text-primary-600 font-medium">
                Terms Of Use & Privacy Policy
              </span>
            </span>
          </label>

          {/* Submit */}
          <Button
          gradient
            type="button"
            className="w-full flex justify-center py-3 text-lg font-semibold rounded-xl shadow-lg shadow-primary-500/30"
          >
            Register Now
          </Button>
        </form>

        {/* Switch */}
        <p className="text-center text-sm text-gray-600 mt-8">
          Already Have An Account?{' '}
          <Link
            href="/login"
            className="text-primary-600 font-semibold hover:underline"
          >
            Login Now
          </Link>
        </p>
      </section>
    </main>
  );
};

export default RegisterPage;
