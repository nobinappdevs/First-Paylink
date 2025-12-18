"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, Facebook, Chrome } from "lucide-react";
import Link from "next/link";
import Button from "../ui/Button";

const LoginPage = () => {
  // ✅ ONLY LOGIC: show / hide password
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main
      role="main"
      className="min-h-screen flex items-center justify-center p-4 bg-linear-to-br from-indigo-50/50 via-white to-purple-50/50"
    >
      <section
        aria-labelledby="login title"
        className="md:w-5/12 w-full  bg-white rounded-2xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50"
      >
        <header className="text-center mb-8">
          <h1
            id="login title"
            className="text-3xl font-extrabold text-gray-900"
          >
            Welcome Back
          </h1>
          <p className="text-gray-500 mt-1">Sign in to your account</p>
        </header>

        {/* FORM (NO LOGIC) */}
        <form className="space-y-6" noValidate>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Email address
            </label>
            <div className="relative">
              <Mail
                aria-hidden
                className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
              />
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl shadow-md focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:border-primary-500 focus-visible:outline-none transition duration-150"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <Lock
                aria-hidden
                className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
              />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl shadow-md focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:border-primary-500 focus-visible:outline-none transition duration-150"
              />
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary-600 p-1 rounded-full"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember & Forgot (NO LOGIC) */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-primary-600 focus-visible:ring-primary-500"
              />
              Remember me
            </label>
            <button
              type="button"
              className="text-sm font-medium text-primary-600 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Submit */}
          <Button
            type="button"
            className="w-full py-3 text-lg font-semibold rounded-xl shadow-lg shadow-primary-500/30"
          >
            Sign In
          </Button>
        </form>

        {/* Divider */}
        <div className="my-8 flex items-center" aria-hidden>
          <div className="flex-1 border-t border-gray-200" />
          <span className="px-3 text-sm text-gray-500 font-medium">
            OR CONTINUE WITH
          </span>
          <div className="flex-1 border-t border-gray-200" />
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            type="button"
            variant="outline"
            className="flex items-center justify-center gap-2 py-3 rounded-xl shadow-sm"
          >
            <Chrome size={18} className="text-red-500" />
            Google
          </Button>

          <Button
            type="button"
            variant="outline"
            className="flex items-center justify-center gap-2 py-3 rounded-xl shadow-sm"
          >
            <Facebook size={18} className="text-blue-600" />
            Facebook
          </Button>
        </div>

        {/* Switch */}
        <p className="text-center text-sm text-gray-600 mt-8">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-primary-600 font-semibold hover:underline"
          >
            Create an Account
          </Link>
        </p>
      </section>
    </main>
  );
};

export default LoginPage;

// 'use client';

// import React, { useState } from 'react';
// import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
// import Button from '@/components/Sheared/Button';
// import Link from 'next/link';

// const LoginPage = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <main
//       role="main"
//       className="min-h-screen font-roboto flex items-center justify-center p-4 bg-linear-to-br from-indigo-50/50 via-white to-purple-50/50"
//     >
//       <section
//         aria-labelledby="loginsecondery"
//         className="w-full  md:w-5/12 bg-white rounded-2xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50"
//       >
//         {/* Header */}
//         <header className="text-center mb-8">
//           <h2
//             id="loginsecondery"
//             className="text-2xl font-extrabold font-montserrat text-secondery/90"
//           >
//             Log in and Stay Connected
//           </h2>
//           <p className="text-gray-500 mt-2 text-sm">
//             Our secure login process ensures the confidentiality of your
//             information. Log in today and stay connected to your finances,
//             anytime and anywhere.
//           </p>
//         </header>

//         {/* Form */}
//         <form className="space-y-6" noValidate>
//           {/* Email */}
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-semibold text-gray-700 mb-1"
//             >
//               Email <span className="text-red-500">*</span>
//             </label>
//             <div className="relative">
//               <Mail
//                 aria-hidden
//                 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
//               />
//               <input
//                 id="email"
//                 type="email"
//                 placeholder="Enter Email..."
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl shadow-md focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:border-primary-500 focus-visible:outline-none transition"
//                 autoComplete="email"
//               />
//             </div>
//           </div>

//           {/* Password */}
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-semibold text-gray-700 mb-1"
//             >
//               Password <span className="text-red-500">*</span>
//             </label>
//             <div className="relative">
//               <Lock
//                 aria-hidden
//                 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
//               />
//               <input
//                 id="password"
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder="Enter Password..."
//                 className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl shadow-md focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:border-primary-500 focus-visible:outline-none transition"
//                 autoComplete="current-password"
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

//           {/* Forgot */}
//           <div className="text-right">
//             <Link
//               href="/forgot-password"
//               className="text-sm text-primary-600 font-medium hover:underline"
//             >
//               Forgot Password?
//             </Link>
//           </div>

//           {/* Submit */}
//           <Button
//           gradient
//             type="button"
//             className="w-full flex justify-center py-3 text-lg font-semibold rounded-xl shadow-lg shadow-primary-500/30"
//           >
//             Login In
//           </Button>
//         </form>

//         {/* Footer */}
//         <div className="mt-6 space-y-4 text-center">
//           <p className="text-xs text-gray-500">
//             By clicking Login you are agreeing with our{' '}
//             <span className="font-medium text-gray-700">
//               Terms of Service
//             </span>
//           </p>

//           <p className="text-sm text-gray-600">
//             Don&apos;t Have An Account?{' '}
//             <Link
//               href="/register"
//               className="text-primary-600 font-semibold hover:underline"
//             >
//               Register
//             </Link>
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default LoginPage;
