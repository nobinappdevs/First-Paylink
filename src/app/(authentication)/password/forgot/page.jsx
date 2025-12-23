/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import Link from "next/link";
import Image from "next/image";
import logo from "@assets/logo.webp";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { forgotPasswordAPI } from "@/services/apiClient";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";

const page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setApiError("");
    setLoading(true);
  

    try {
      const res = await forgotPasswordAPI( data.email );
      const token = res?.data?.data?.user?.token;

      if (res?.data?.data && token) {
        router.push(`/password/otp?token=${token}`);
        toast.success("OTP sent to your email.", { position: "top-right" });
      } else {
        toast.error("Failed to send OTP. Please try again.", { position: "top-right" });
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
        
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image src={logo} alt="Logo" width={150} height={42} />
          </Link>
        </div>

        <h4 className="text-2xl font-bold text-center text-secondery">
          Forgot Password
        </h4>
        <p className="text-sm text-gray-500 text-center mt-2">
          Enter your email address to receive an OTP.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-8">
          <InputField
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            error={errors?.email?.message}
          />

          {apiError && (
            <p className="text-red-600 text-sm">{apiError}</p>
          )}

          <Button
            type="submit"
            className="w-full py-3"
            disabled={loading}
          >
                        {loading ? (
              <>
                <Loader2 className="size-6 animate-spin" />
              </>
            ) : (
              "Send OTP"
            )}
          </Button>
        </form>

        <p className="text-center text-sm mt-6">
          Back to{" "}
          <Link href="/login" className="text-primary font-semibold">
            Login
          </Link>
        </p>
      </section>
    </main>
  );
};

export default page;
