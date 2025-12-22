'use client';
import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import Link from "next/link";
import Image from "next/image";
import logo from "@assets/logo.webp";
import { useRouter } from "next/navigation";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const handleForgotPassword = (e) => {
    // Handle forgot password logic here
    e.preventDefault();
    router.push('/password/otp');
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

        <h4 className="text-2xl font-bold text-center text-secondery">
          Forgot Password
        </h4>
        <p className="text-sm text-gray-500 text-center mt-2">
          Enter your email address to receive an OTP.
        </p>

        <form className="space-y-6 mt-8">
          <InputField
            label="Email Address"
            type="email"
            placeholder="you@example.com"
          />

          <Button onClick={handleForgotPassword} className="w-full py-3">
            Send OTP
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
