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
  const handleUpdatePassword = (e) => {
    // Handle forgot password logic here
    e.preventDefault();
    router.push('/password/success');
  }
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-slate-50">
      <section className="w-full max-w-[520px] bg-white rounded-2xl p-8 border border-text/10 shadow-sm">

        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image src={logo} alt="Logo" width={150} height={42} />
          </Link>
        </div>

        <h4 className="text-2xl font-bold text-center">
          Reset Password
        </h4>
        <p className="text-sm text-gray-500 text-center mt-2">
          Create a new password for your account.
        </p>

        <form className="space-y-6 mt-8">
          <InputField
            label="New Password"
            type="password"
            placeholder="••••••••"
          />

          <InputField
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
          />

          <Button onClick={handleUpdatePassword} className="w-full py-3">
            Update Password
          </Button>
        </form>
      </section>
    </main>
  );
};

export default page;
