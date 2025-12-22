// 'use client';

// import Button from "@/components/ui/Button";
// import Link from "next/link";

// const page = () => {
//   return (
//     <main className="min-h-screen flex items-center justify-center p-4 ">
//       <section className="w-full max-w-[520px] bg-white rounded-2xl p-8 border border-text/10  text-center">

//         <h4 className="text-2xl font-bold text-emerald-600">
//           Password Updated
//         </h4>

//         <p className="text-sm text-gray-500 mt-3">
//           Your password has been successfully reset.
//         </p>

//         <Link href="/login">
//           <Button className="mt-8 w-full py-3">
//             Back to Login
//           </Button>
//         </Link>
//       </section>
//     </main>
//   );
// };

// export default page;

'use client';

import Button from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const Page = () => {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <section className="w-full max-w-[520px] bg-white rounded-2xl p-8 border border-text/10 text-center">

        {/* Success Icon */}
        <div className="flex justify-center mb-5">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <CheckCircle size={38} className="text-primary" />
          </div>
        </div>

        <h4 className="text-2xl font-bold text-primary">
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

export default Page;
