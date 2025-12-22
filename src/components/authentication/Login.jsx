// 'use client';
// import {  Facebook, Chrome } from "lucide-react";
// import Link from "next/link";
// import Button from "../ui/Button";
// import InputField from "../ui/InputField";

// const LoginPage = () => {

//   return (
//     <main
//       role="main"
//       className="min-h-screen flex items-center  justify-center p-4"
//     >
//       <section
//         aria-labelledby="login title"
//         className="md:w-4/12 w-full  bg-white rounded-xl p-8 border border-text/10"
//       >
//         <header className="text-center mb-8">
//           <h4
//             id="login title"
//           >
//             Welcome Back
//           </h4>
//           <h6 className=" mt-1">Sign in to your account</h6>
//         </header>

//         {/* FORM (NO LOGIC) */}
//         <form className="space-y-6" noValidate>
//           {/* Email */}
//           <div>
//             <InputField label={'Email address'} type="email" placeholder={'you@example.com'} />
//           </div>
//           {/* Password */}
//           <div>
//             <InputField label={'Password'} type="password" placeholder={'••••••••'} />
//           </div>

//           {/* Remember & Forgot (NO LOGIC) */}
//           <div className="flex items-center justify-between pt-1">
//             <label className="flex items-center cursor-pointer gap-2 text-sm text-gray-600">
//               <input
//                 type="checkbox"
//                 className="w-4 h-4 accent-primary cursor-pointer rounded"
//               />
//               Remember me
//             </label>
//             <Link href="password/forgot">  
//             <button
//               type="button"
//               className="text-sm cursor-pointer font-medium text-primary-600 hover:underline"
//               >
//               Forgot password?
//             </button>
//               </Link>
//           </div>

//           {/* Submit */}
//           <Button
//             type="button"
//             className="w-full"
//           >
//             Sign In
//           </Button>
//         </form>

//         {/* Divider */}
//         <div className="my-6 flex items-center" aria-hidden>
//           <div className="flex-1 border-t border-gray-200" />
//           <span className="px-3 text-xs text-gray-500 font-medium">
//             OR CONTINUE WITH
//           </span>
//           <div className="flex-1 border-t border-gray-200" />
//         </div>

//         {/* Social Buttons */}
//         <div className="grid grid-cols-2 gap-3">
//           <Button
//             type="button"
//             variant="outline"
//             className=""
//           >
//             <Chrome size={18} className="text-white" />
//             Google
//           </Button>

//           <Button
//             type="button"
//             variant="outline"
//             className=""
//           >
//             <Facebook size={18} className="text-white" />
//             Facebook
//           </Button>
//         </div>

//         {/* Switch */}
//         <p className="text-center text-sm text-gray-600 mt-8">
//           Don&apos;t have an account?{" "}
//           <Link
//             href="/register"
//             className="text-primary-600 text-sm font-semibold hover:underline"
//           >
//             Create an Account
//           </Link>
//         </p>
//       </section>
//     </main>
//   );
// };

// export default LoginPage;



'use client';

import { Facebook, Chrome } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import InputField from "../ui/InputField";
import logo from "@assets/logo.webp";

const LoginPage = () => {
  return (
    <main
      role="main"
      className="min-h-screen flex items-center justify-center p-4 "
    >
      <section
        aria-labelledby="login-title"
        className="w-full max-w-[520px] bg-white rounded-2xl p-8 border border-text/10"
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/" className="cursor-pointer">
            <Image
              src={logo}     // 👈 আপনার logo path
              alt="Logo"
              width={140}
              height={40}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Header */}
        <header className="text-center mb-8">
          <h4
            id="login-title"
            className="text-2xl font-bold text-secondery"
          >
            Welcome Back
          </h4>
          <h6 className="mt-2 text-sm text-gray-500">
            Sign in to your account
          </h6>
        </header>

        {/* FORM */}
        <form className="space-y-6" noValidate>
          <InputField
            label="Email address"
            type="email"
            placeholder="you@example.com"
          />

          <InputField
            label="Password"
            type="password"
            placeholder="••••••••"
          />

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center cursor-pointer gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                className="w-4 h-4 accent-primary cursor-pointer rounded"
              />
              Remember me
            </label>

            <Link
              href="/password/forgot"
              className="text-sm font-medium text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <Button type="button" className="w-full py-3">
            Sign In
          </Button>
        </form>

        {/* Divider */}
        {/* <div className="my-8 flex items-center" aria-hidden>
          <div className="flex-1 border-t border-gray-200" />
          <span className="px-3 text-xs text-gray-500 font-medium">
            OR CONTINUE WITH
          </span>
          <div className="flex-1 border-t border-gray-200" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Button type="button" variant="outline">
            <Chrome size={18} />
            Google
          </Button>

          <Button type="button" variant="outline">
            <Facebook size={18} />
            Facebook
          </Button>
        </div> */}

        {/* Switch */}
        <p className="text-center text-sm text-gray-600 mt-8">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-primary font-semibold hover:underline"
          >
            Create an Account
          </Link>
        </p>
      </section>
    </main>
  );
};

export default LoginPage;
