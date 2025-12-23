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
import { toast } from "react-toastify";

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
      toast.error("Passwords do not match.", { position: "top-right" });
      return;
    }

    try {
      setLoading(true);
      const res = await resetPasswordAPI({
        password: data.password,
        password_confirmation: data.confirm_password,
        token: token,
      });
      console.log(res?.data);
      if (res?.data) {
        router.push("/password/success");
        toast.success("Password reset successfully.", { position: "top-right" });
      } else {
        toast.error("Failed to reset password. Please try again.", { position: "top-right" });
      }
    }  catch (error) {
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
