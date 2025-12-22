'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";

import Button from "../ui/Button";
import InputField from "../ui/InputField";
import logo from "@assets/logo.webp";

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_base_url}/${process.env.NEXT_PUBLIC_version}/user/login`,
        { email, password }
      );

      const token = res?.data?.data?.token;
      const user = res?.data?.data?.user;
      const successMsg =
        res?.data?.message?.success?.[0] || "Login successful";

      if (!token) {
        throw new Error("Token not found");
      }

      // ✅ Save token
      if (remember) {
        localStorage.setItem("authToken", token);
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        sessionStorage.setItem("authToken", token);
        sessionStorage.setItem("user", JSON.stringify(user));
      }

      // ✅ Success alert
      await Swal.fire({
        icon: "success",
        title: "Success",
        text: successMsg,
        timer: 1500,
        showConfirmButton: false,
      });

      router.push("/dashboard");

    } catch (error) {
      const errorMsg =
        error?.response?.data?.message?.error?.[0] ||
        error?.response?.data?.message ||
        "Invalid email or password";

      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: errorMsg,
      });
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
            <Image
              src={logo}
              alt="Logo"
              width={140}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Header */}
        <header className="text-center mb-8">
          <h4 className="text-2xl font-bold text-secondery">
            Welcome Back
          </h4>
          <p className="mt-2 text-sm text-gray-500">
            Sign in to your account
          </p>
        </header>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleLogin}>
          <InputField
            label="Email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />

          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />

          <div className="flex justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
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
