// /* eslint-disable react-hooks/rules-of-hooks */
// "use client";
// import Button from "@/components/ui/Button";
// import InputField from "@/components/ui/InputField";
// import logo from "@assets/logo.webp";
// import Link from "next/link";
// import Image from "next/image";
// const page = () => {
//   return (
//     <div className="w-full md:w-5/12 mx-auto xl:p-8  mt-28 bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
//               <div className="flex justify-center mb-8">
//           <Link href="/">
//             <Image src={logo} alt="Logo" width={150} height={42} />
//           </Link>
//         </div>
//       <div className="">
//         <h4 className="text-xl font-bold text-text/90 mb-6">
//           Change Password
//         </h4>

//         {/* Current Password */}
//         <div className="mb-5">
//           <InputField
//             label="Current Password"
//             type="password"
//             name="currentPassword"
//             placeholder="Enter Password..."
//             required
//           />
//         </div>

//         {/* New Password */}
//         <div className="mb-5">
//           <InputField
//             label="New Password"
//             type="password"
//             name="newPassword"
//             placeholder="Enter Password..."
//             required
//           />
//         </div>

//         {/* Confirm Password */}
//         <div className="mb-6">
//           <InputField
//             label="Confirm Password"
//             type="password"
//             name="confirmPassword"
//             placeholder="Enter Password..."
//             required
//           />
//         </div>

//         <Button className="w-full">
//           Change Password
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default page;



/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import logo from "@assets/logo.webp";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { updatePasswordAPI } from "@/services/apiClient"; // ensure path correct
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const page = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const router = useRouter()

  const onSubmit = async (data) => {
    // structure API expects
    const payload = {
      current_password: data.currentPassword,
      password: data.newPassword,
      password_confirmation: data.confirmPassword
    };

    try {
      await updatePasswordAPI(payload);
      toast.success("Password updated successfully");
      reset(); // clear form after success
      router.push('/dashboard')
    }  catch (err) {
      const messages = err?.response?.data?.message?.error;

      if (Array.isArray(messages)) {
        messages.forEach((msg) => {
          toast.error(msg, { position: "top-right" });
        });
      } else if (messages) {
        toast.error(messages, { position: "top-right" });
      } else {
        toast.error("Failed to verify OTP. Please try again.", {
          position: "top-right",
        });
      }
    } finally {
    }
  };

  return (
    <div className="w-full md:w-5/12 mx-auto xl:p-8 mt-28 bg-white rounded-2xl shadow-sm p-8 border border-gray-100">

      <div className="flex justify-center mb-8">
        <Link href="/">
          <Image src={logo} alt="Logo" width={150} height={42} />
        </Link>
      </div>

      <h4 className="text-xl font-bold text-text/90 mb-6">Change Password</h4>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Current Password */}
        <div className="mb-5">
          <InputField
            label="Current Password"
            type="password"
            {...register("currentPassword", { required: "Current password is required" })}
            placeholder="Enter Password..."
          />
          {errors.currentPassword && <p className="text-red-500 text-xs">{errors.currentPassword.message}</p>}
        </div>

        {/* New Password */}
        <div className="mb-5">
          <InputField
            label="New Password"
            type="password"
            {...register("newPassword", { required: "New password is required" })}
            placeholder="Enter Password..."
          />
          {errors.newPassword && <p className="text-red-500 text-xs">{errors.newPassword.message}</p>}
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <InputField
            label="Confirm Password"
            type="password"
            {...register("confirmPassword", { required: "Confirm password is required" })}
            placeholder="Enter Password..."
          />
          {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
              <>
                <Loader2 className="size-6 animate-spin" />
              </>
            ) : (
              "Change Password"
            )}
        </Button>
      </form>
    </div>
  );
};

export default page;
