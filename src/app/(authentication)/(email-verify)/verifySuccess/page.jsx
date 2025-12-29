"use client";
import Button from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/5">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow text-center">
        <CheckCircle className="mx-auto text-primary" size={60} />

        <h4 className="text-2xl font-bold text-primary mt-4">
          Email Verified Successfully
        </h4>

        <h6 className="text-sm text-gray-500 mt-2">
       You can now use the dashboard.
        </h6>
        <Link href={'/dashboard'}>
        <Button className="w-full mt-6">
          Go to Dashboard
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
