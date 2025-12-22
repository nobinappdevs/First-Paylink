'use client';

import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import logo from "@assets/logo.webp";
import { useRouter } from "next/navigation";

const page = () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const router = useRouter();
      const handleSubmitOtp = (e) => {
        // Handle forgot password logic here
        e.preventDefault();
        router.push('/password/reset');
      }
  return (
    <main className="min-h-screen flex items-center justify-center p-4 ">
      <section className="w-full max-w-[520px] bg-white rounded-2xl p-8 border border-text/10 ">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image src={logo} alt="Logo" width={150} height={42} />
          </Link>
        </div>

        <h4 className="text-2xl font-bold text-center">
          Verify OTP
        </h4>
        <p className="text-sm text-gray-500 text-center mt-2">
          Enter the 6-digit code sent to your email.
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-3 mt-8">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center border border-text/30 rounded-lg text-lg focus:border-primary outline-none"
            />
          ))}
        </div>

        <Button onClick={handleSubmitOtp} className="w-full mt-8 py-3">
          Verify OTP
        </Button>

        <p className="text-center text-sm mt-6">
          Didn’t receive code?{" "}
          <button className="text-primary font-semibold">
            Resend
          </button>
        </p>
      </section>
    </main>
  );
};

export default page;
