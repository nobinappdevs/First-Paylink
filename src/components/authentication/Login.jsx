"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import InputField from "../ui/InputField";
import logo from "@assets/logo.webp";
import { loginAPI } from "@/services/apiClient";
import { toast } from "react-toastify";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await loginAPI({
        email: data.email,
        password: data.password,
      });
      const token = res?.data?.data?.token;
      const user = res?.data?.data?.user;
      const successMsg = res?.data?.message?.success?.[0] || "Login successful";

      if (!token) throw new Error("Token not found");

      if (remember) {
        localStorage.setItem("authToken", token);
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        sessionStorage.setItem("authToken", token);
        sessionStorage.setItem("user", JSON.stringify(user));
      }

      toast.success(successMsg, { position: "top-right" });
      router.push("/dashboard");
    } catch (error) {
      const messages = error?.response?.data?.message?.error;
      if (Array.isArray(messages)) {
        messages.forEach((msg) => toast.error(msg, { position: "top-right" }));
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
            <Image src={logo} alt="Logo" width={140} height={40} priority />
          </Link>
        </div>

        <header className="text-center mb-8">
          <h4 className="text-2xl font-bold text-secondery">Welcome Back</h4>
          <p className="mt-2 text-sm text-gray-500">Sign in to your account</p>
        </header>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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

          <div className="flex justify-between text-sm">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                className="accent-primary"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember me
            </label>

            <Link href="/password/forgot" className="text-primary">
              Forgot password?
            </Link>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <p className="text-center text-sm mt-8">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-primary font-semibold">
            Create an Account
          </Link>
        </p>
      </section>
    </main>
  );
};

export default LoginPage;
