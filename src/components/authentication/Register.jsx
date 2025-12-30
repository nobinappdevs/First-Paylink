// "use client";
// import Button from "@/components/ui/Button";
// import Link from "next/link";
// import Image from "next/image";
// import InputField from "../ui/InputField";
// import Select from "react-select";
// import { reactSelectStyles } from "@/style/selectStyles";
// import logo from "@assets/logo.webp";
// import { useForm, Controller } from "react-hook-form";
// import Swal from "sweetalert2";
// import { useRouter } from "next/navigation";
// import { registerAPI } from "@/services/apiClient";

// const RegisterPage = () => {
//   const router = useRouter();
//   const countryOptions = [
//     { label: "Bangladesh", value: "Bangladesh" },
//     { label: "India", value: "India" },
//     { label: "United States", value: "United States" },
//     { label: "United Kingdom", value: "United Kingdom" },
//   ];

//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors, isSubmitting  },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const payload = {
//       first_name: data.first_name,
//       last_name: data.last_name,
//       email: data.email,
//       password: data.password,
//       company_name: data.company_name,
//       country: data.country?.value,
//       policy: data.policy ? "on" : "",
//     };

//     try {
//       const res = await registerAPI(payload);

//       localStorage.setItem("authToken", res?.data?.data?.token);
//       localStorage.setItem("user", JSON.stringify(res?.data?.data?.user));

//       Swal.fire({
//         icon: "success",
//         title: "Registration Successful",
//         text: res?.data?.data?.message || "Account created successfully!",
//         confirmButtonColor: "#10b981",
//       });
//       router.push("/dashboard");
//     } catch (error) {
//       const message =
//         error?.response?.data?.data?.message || "Something went wrong!";

//       Swal.fire({
//         icon: "error",
//         title: "Registration Failed",
//         text: message,
//         confirmButtonColor: "#ef4444",
//       });
//     }
//   };

//   return (
//     <main className="min-h-screen flex items-center justify-center p-4">
//       <section className="w-full max-w-[600px] bg-white rounded-2xl p-8 border border-text/10">
//         {/* Logo */}
//         <div className="flex justify-center mb-8">
//           <Link href="/">
//             <Image src={logo} alt="Logo" width={150} height={42} />
//           </Link>
//         </div>

//         <header className="text-center mb-8">
//           <h4 className="text-2xl font-bold text-secondery">
//             Register for an Account
//           </h4>
//           <p className="text-gray-500 mt-2 text-sm">
//             Create your account to get started.
//           </p>
//         </header>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <InputField
//                 label="First Name"
//                 placeholder="First Name"
//                 {...register("first_name", {
//                   required: "First name is required",
//                   maxLength: 50,
//                 })}
//               />
//               {errors.first_name && (
//                 <p className="text-red-500!! text-xs">
//                   {errors.first_name.message}
//                 </p>
//               )}
//             </div>

//             <div>
//               <InputField
//                 label="Last Name"
//                 placeholder="Last Name"
//                 {...register("last_name", {
//                   required: "Last name is required",
//                   maxLength: 50,
//                 })}
//               />
//               {errors.last_name && (
//                 <p className="text-red-500!! text-xs">
//                   {errors.last_name.message}
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Email */}
//           <div>
//             <InputField
//               label="Email Address"
//               placeholder="Email Address"
//               type="email"
//               {...register("email", {
//                 required: "Email is required",
//                 maxLength: 160,
//                 pattern: {
//                   value: /^\S+@\S+$/i,
//                   message: "Invalid email address",
//                 },
//               })}
//             />
//             {errors.email && (
//               <p className="text-red-500!! text-xs">{errors.email.message}</p>
//             )}
//           </div>

//           {/* Country */}
//           <div>
//             <label className="text-sm font-medium text-slate-700 mb-1 block">
//               Country *
//             </label>
//             <Controller
//               name="country"
//               control={control}
//               rules={{ required: "Country is required" }}
//               render={({ field }) => (
//                 <Select
//                   {...field}
//                   options={countryOptions}
//                   placeholder="Select Country"
//                   styles={reactSelectStyles}
//                 />
//               )}
//             />
//             {errors.country && (
//               <p className="text-red-500!! text-xs">{errors.country.message}</p>
//             )}
//           </div>

//           {/* Company */}
//           <div>
//             <InputField
//               label="Company Name"
//               placeholder="Company Name"
//               {...register("company_name", {
//                 required: "Company name is required",
//               })}
//             />
//             {errors.company_name && (
//               <p className="text-red-500!! text-xs">
//                 {errors.company_name.message}
//               </p>
//             )}
//           </div>

//           {/* Password */}
//           <div>
//             <InputField
//               label="Password"
//               placeholder="Password"
//               type="password"
//               {...register("password", {
//                 required: "Password is required",
//                 minLength: {
//                   value: 6,
//                   message: "Minimum 6 characters required",
//                 },
//               })}
//             />
//             {errors.password && (
//               <p className="text-red-500!! text-xs">{errors.password.message}</p>
//             )}
//           </div>

//           {/* Policy */}
//           <label className="flex items-start gap-2 text-sm text-gray-600">
//             <input
//               type="checkbox"
//               {...register("policy", {
//                 required: "You must accept the policy",
//               })}
//               className="mt-1 w-4 h-4 accent-primary"
//             />
//             <span>
//               I agree with{" "}
//               <span className="text-primary font-medium">
//                 Terms Of Use & Privacy Policy
//               </span>
//             </span>
//           </label>
//           {errors.policy && (
//             <p className="text-red-500!! text-xs">{errors.policy.message}</p>
//           )}

//           {/* Submit */}
//                    <Button type="submit" className="w-full" disabled={isSubmitting }>
//                       {isSubmitting  ? "Signing up..." : "    Register Now"}
//                     </Button>
//         </form>

//         {/* Switch */}
//         <p className="text-center text-sm text-gray-600 mt-8">
//           Already have an account?{" "}
//           <Link href="/login" className="text-primary font-semibold">
//             Login Now
//           </Link>
//         </p>
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
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { registerAPI } from "@/services/apiClient";
import countryList from "react-select-country-list";
import { useMemo } from "react";
import { toast } from "react-hot-toast";
import { Loader2 } from "lucide-react";
import useAuthRedirect from "@/hooks/useAuthRedirect";
import SkeletonLoader from "../Sheared/Skeleton";

const RegisterPage = () => {
  const router = useRouter();
    const authloading = useAuthRedirect()

  // 🌍 Country list from package
  const countryOptions = useMemo(() => countryList().getData(), []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
      company_name: data.company_name,
      country: data.country?.label,
      policy: data.policy ? "on" : "",
    };

    try {
      const res = await registerAPI(payload);
      localStorage.setItem("jwtToken", res?.data?.data?.token);
      localStorage.setItem("userInfo", JSON.stringify(res?.data?.data?.user));
      toast.success("Registration successful!", { position: "top-right" });

      router.push("/dashboard");
    } catch (error) {
      const messages = error?.response?.data?.message?.error;

      if (Array.isArray(messages)) {
        messages.forEach((msg) => {
          toast.error(msg, { position: "top-right" });
        });
      } else if (messages) {
        toast.error(messages, { position: "top-right" });
      } else {
        toast.error("Something went wrong", { position: "top-right" });
      }
    }
  };

    if (authloading) {
    return <SkeletonLoader layout="layout" />
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <section className="w-full max-w-[600px] bg-white rounded-2xl p-8 border border-text/10">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image src={logo} alt="Logo" width={150} height={42} priority />
          </Link>
        </div>

        {/* Header */}
        <header className="text-center mb-8">
          <h4 className="text-2xl font-bold text-secondery">
            Register for an Account
          </h4>
          <p className="text-gray-500 mt-2 text-sm">
            Create your account to get started.
          </p>
        </header>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
          noValidate
        >
          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <InputField
                label="First Name"
                placeholder="First Name"
                {...register("first_name", {
                  required: "First name is required",
                  maxLength: {
                    value: 50,
                    message: "Max 50 characters allowed",
                  },
                })}
              />
              {errors.first_name && (
                <p className="text-red-500! text-xs">
                  {errors.first_name.message}
                </p>
              )}
            </div>

            <div>
              <InputField
                label="Last Name"
                placeholder="Last Name"
                {...register("last_name", {
                  required: "Last name is required",
                  maxLength: {
                    value: 50,
                    message: "Max 50 characters allowed",
                  },
                })}
              />
              {errors.last_name && (
                <p className="text-red-500! text-xs">
                  {errors.last_name.message}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <InputField
              label="Email Address"
              placeholder="Email Address"
              type="email"
              {...register("email", {
                required: "Email is required",
                maxLength: {
                  value: 160,
                  message: "Max 160 characters allowed",
                },
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500! text-xs">{errors.email.message}</p>
            )}
          </div>

          {/* Country */}
          <div>
            <label className="text-sm font-medium text-slate-700 mb-1 block">
              Country *
            </label>
            <Controller
              name="country"
              control={control}
              rules={{ required: "Country is required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={countryOptions}
                  placeholder="Select Country"
                    instanceId="currency-select"
                  styles={reactSelectStyles}
                  isSearchable
                />
              )}
            />
            {errors.country && (
              <p className="text-red-500! text-xs">{errors.country.message}</p>
            )}
          </div>

          {/* Company */}
          <div>
            <InputField
              label="Company Name"
              placeholder="Company Name"
              {...register("company_name", {
                required: "Company name is required",
              })}
            />
            {errors.company_name && (
              <p className="text-red-500! text-xs">
                {errors.company_name.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <InputField
              label="Password"
              placeholder="Password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters required",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500! text-xs">{errors.password.message}</p>
            )}
          </div>

          {/* Policy */}
          <label className="flex items-start cursor-pointer gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              {...register("policy", {
                required: "You must accept the policy",
              })}
              className="mt-1 w-4 h-4 cursor-pointer accent-primary"
            />
            <span>
              I agree with{" "}
              <span className="text-primary font-medium">
                Terms Of Use & Privacy Policy
              </span>
            </span>
          </label>
          {errors.policy && (
            <p className="text-red-500! text-xs">{errors.policy.message}</p>
          )}

          {/* Submit */}
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="size-6 animate-spin" />
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>

        {/* Switch */}
        <p className="text-center text-sm text-gray-600 mt-8">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-semibold">
            Login Now
          </Link>
        </p>
      </section>
    </main>
  );
};

export default RegisterPage;
