// 'use client';

// import Button from "@/components/ui/Button";
// import InputField from "@/components/ui/InputField";
// import Link from "next/link";
// import Image from "next/image";
// import logo from "@assets/logo.webp";
// import { useRouter } from "next/navigation";

// const page = () => {
//       // eslint-disable-next-line react-hooks/rules-of-hooks
//       const router = useRouter();
//   const handleUpdatePassword = (e) => {
//     // Handle forgot password logic here
//     e.preventDefault();
//     router.push('/password/success');
//   }
//   return (
//     <main className="min-h-screen flex items-center justify-center p-4 ">
//       <section className="w-full max-w-[520px] bg-white rounded-2xl p-8 border border-text/10 ">

//         <div className="flex justify-center mb-8">
//           <Link href="/">
//             <Image src={logo} alt="Logo" width={150} height={42} />
//           </Link>
//         </div>

//         <h4 className="text-2xl font-bold text-center">
//           Reset Password
//         </h4>
//         <p className="text-sm text-gray-500 text-center mt-2">
//           Create a new password for your account.
//         </p>

//         <form className="space-y-6 mt-8">
//           <InputField
//             label="New Password"
//             type="password"
//             placeholder="••••••••"
//           />

//           <InputField
//             label="Confirm Password"
//             type="password"
//             placeholder="••••••••"
//           />

//           <Button onClick={handleUpdatePassword} className="w-full py-3">
//             Update Password
//           </Button>
//         </form>
//       </section>
//     </main>
//   );
// };

// export default page;

'use client';

import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import Link from "next/link";
import Image from "next/image";
import logo from "@assets/logo.webp";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { resetPasswordAPI } from "@/services/apiClient";

const ResetPasswordPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch("password");

  useEffect(() => {
    if (!token) {
      router.replace("/password/forgot");
    }
  }, [token, router]);

  const onSubmit = async (data) => {
    setError("");
    if (data.password !== data.confirm_password) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      const res = await resetPasswordAPI({
        password: data.password,
        password_confirmation: data.confirm_password,
        token: token,
      });

      const successMessage = res?.data?.message?.success?.[0];
      if (successMessage) {
        router.push("/password/success");
      } else {
        setError("Failed to reset password. Please try again.");
      }
    } catch (err) {
      const message = err?.response?.data?.message?.error?.[0] || "Something went wrong.";
      setError(typeof message === "string" ? message : JSON.stringify(message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <section className="w-full max-w-[520px] bg-white rounded-2xl p-8 border border-text/10">
        
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image src={logo} alt="Logo" width={150} height={42} />
          </Link>
        </div>

        <h4 className="text-2xl font-bold text-center">Reset Password</h4>
        <p className="text-sm text-gray-500 text-center mt-2">
          Create a new password for your account.
        </p>

        {error && (
          <p className="text-red-600! text-sm text-center mt-2">{error}</p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-8">
          <InputField
            label="New Password"
            type="password"
            placeholder="••••••••"
            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
            error={errors?.password?.message}
          />

          <InputField
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
            {...register("confirm_password", { required: "Confirm Password is required" })}
            error={errors?.confirm_password?.message}
          />

          <Button type="submit" className="w-full py-3" disabled={loading}>
            {loading ? "Updating..." : "Update Password"}
          </Button>
        </form>
      </section>
    </main>
  );
};

export default ResetPasswordPage;
