'use client';

import Button from "@/components/ui/Button";
import Link from "next/link";

const page = () => {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 ">
      <section className="w-full max-w-[520px] bg-white rounded-2xl p-8 border border-text/10  text-center">

        <h4 className="text-2xl font-bold text-emerald-600">
          Password Updated
        </h4>

        <p className="text-sm text-gray-500 mt-3">
          Your password has been successfully reset.
        </p>

        <Link href="/login">
          <Button className="mt-8 w-full py-3">
            Back to Login
          </Button>
        </Link>
      </section>
    </main>
  );
};

export default page;
