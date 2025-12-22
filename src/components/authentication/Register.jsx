// "use client";
// import Button from "@/components/ui/Button";
// import Link from "next/link";
// import InputField from "../ui/InputField";
// import Select from "react-select";
// import { reactSelectStyles } from "@/style/selectStyles";
// import logo from "@assets/logo.webp";

// const RegisterPage = () => {

//   const country = [
//     { label: "Bangladesh", value: "Bangladesh" },
//     { label: "India", value: "India" },
//     { label: "United States", value: "United States" },
//     { label: "United Kingdom", value: "United Kingdom" },
//   ];

//   return (
//     <main
//       role="main"
//       className="min-h-screen flex items-center  justify-center p-4"
//     >
//       <section
//         aria-labelledby="registersecondery"
//         className="w-full md:w-4/12 bg-white rounded-xl p-8 border border-text/10"
//       >
//         {/* Header */}
//         <header className="text-center mb-8">
//           <h4>Register for an Account Today</h4>
//           <h6 className="text-gray-500 mt-2 text-sm">
//             Become a part of our community by registering for an account today.
//             Enjoy a range of benefits and features tailored to meet your needs.
//           </h6>
//         </header>

//         {/* Form */}
//         <form className="space-y-5" noValidate>
//           {/* First & Last Name */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <InputField
//                 label={"First Name"}
//                 placeholder={"First Name"}
//                 type="text"
//               />
//             </div>
//             <div>
//               <InputField
//                 label={"Last Name"}
//                 placeholder={"Last Name"}
//                 type="text"
//               />
//             </div>
//           </div>

//           {/* Email */}
//           <div>
//             <InputField
//               label={"Email Address"}
//               placeholder={"Email Address"}
//               type="email"
//             />
//           </div>

//           {/* Country */}
//           <div>
//             <label className="text-sm font-medium text-slate-700 mb-1 block">
//               Payment Gateway *
//             </label>
//             <Select
//               options={country}
//               instanceId="gateway-select"
//               placeholder="Select Gateway"
//               styles={reactSelectStyles}
//               isSearchable
//             />
//           </div>

//           {/* Company */}
//           <div>
//             <InputField
//               label={"Company Name"}
//               placeholder={"Company Name"}
//               type="text"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <InputField
//               label={"Password"}
//               placeholder={"Password"}
//               type="password"
//             />
//           </div>

//           {/* Terms */}
//           <label className="flex cursor-pointer items-start gap-2 text-sm text-gray-600">
//             <input
//               type="checkbox"
//               className="mt-1 w-4 h-4 accent-primary cursor-pointer rounded"
//             />
//             <span>
//               I have agreed with{" "}
//               <span className="text-primary-600 font-medium">
//                 Terms Of Use & Privacy Policy
//               </span>
//             </span>
//           </label>

//           {/* Submit */}
//           <Button type="button" className="w-full">
//             Register Now
//           </Button>
//         </form>

//         {/* Switch */}
//         <h6 className="text-center  mt-8">
//           Already Have An Account?{" "}
//           <Link
//             href="/login"
//             className="text-primary-600 font-semibold hover:underline"
//           >
//             Login Now
//           </Link>
//         </h6>
//       </section>
//     </main>
//   );
// };

// export default RegisterPage;



"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import InputField from "../ui/InputField";
import Select from "react-select";
import { reactSelectStyles } from "@/style/selectStyles";
import logo from "@assets/logo.webp";

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
      className="min-h-screen flex items-center justify-center p-4 bg-slate-50"
    >
      <section
        aria-labelledby="register-title"
        className="w-full max-w-[600px] bg-white rounded-2xl p-8 border border-text/10 shadow-sm"
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/" className="cursor-pointer">
            <Image
              src={logo}
              alt="Logo"
              width={150}
              height={42}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Header */}
        <header className="text-center mb-8">
          <h4
            id="register-title"
            className="text-2xl font-bold text-secondery"
          >
            Register for an Account
          </h4>
          <h6 className="text-gray-500 mt-2 text-sm leading-relaxed">
            Become a part of our community by registering for an account today.
            Enjoy features tailored to meet your needs.
          </h6>
        </header>

        {/* Form */}
        <form className="space-y-5" noValidate>
          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="First Name"
              placeholder="First Name"
              type="text"
            />
            <InputField
              label="Last Name"
              placeholder="Last Name"
              type="text"
            />
          </div>

          {/* Email */}
          <InputField
            label="Email Address"
            placeholder="Email Address"
            type="email"
          />

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
          <InputField
            label="Company Name"
            placeholder="Company Name"
            type="text"
          />

          {/* Password */}
          <InputField
            label="Password"
            placeholder="Password"
            type="password"
          />

          {/* Terms */}
          <label className="flex cursor-pointer items-start gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              className="mt-1 w-4 h-4 accent-primary cursor-pointer rounded"
            />
            <span>
              I have agreed with{" "}
              <span className="text-primary font-medium">
                Terms Of Use & Privacy Policy
              </span>
            </span>
          </label>

          {/* Submit */}
          <Button type="button" className="w-full py-3">
            Register Now
          </Button>
        </form>

        {/* Switch */}
        <p className="text-center text-sm text-gray-600 mt-8">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-primary font-semibold hover:underline"
          >
            Login Now
          </Link>
        </p>
      </section>
    </main>
  );
};

export default RegisterPage;
