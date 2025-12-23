// /* eslint-disable react-hooks/rules-of-hooks */
// 'use client';

// import Button from "@/components/ui/Button";
// import Link from "next/link";
// import Image from "next/image";
// import logo from "@assets/logo.webp";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useEffect, useRef, useState } from "react";
// import { verifyOtpAPI } from "@/services/apiClient";

// const page = () => {
  
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const token = searchParams.get("token");
//   const inputRefs = useRef([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e, index) => {
//     let value = e.target.value;
//     value = value.replace(/[^0-9]/g, "");
//     e.target.value = value;

//     if (value && index < inputRefs.current.length - 1) {
//       inputRefs.current[index + 1].focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace" && !e.target.value && index > 0) {
//       inputRefs.current[index - 1].focus();
//     }
//   };

//   const handlePaste = (e) => {
//     e.preventDefault();
//     const paste = e.clipboardData.getData("text").replace(/[^0-9]/g, "");
//     if (!paste) return;
//     paste.split("").slice(0, 6).forEach((num, i) => {
//       if (inputRefs.current[i]) inputRefs.current[i].value = num;
//     });
//     const nextIndex = paste.length >= 6 ? 5 : paste.length;
//     inputRefs.current[nextIndex].focus();
//   };

//   const handleSubmitOtp = async (e) => {
//     e.preventDefault();
//     setError("");

//     const otp = inputRefs.current.map((input) => input.value).join("");
//     if (otp.length !== 6) {
//       setError("Please enter a 6-digit OTP.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const res = await verifyOtpAPI({ otp, token });
      
//       if (res.data.message.success?.[0]) {
//         router.push(`/password/reset?token=${token}`);
//       } else {
//         setError("Invalid OTP, please try again.");
//       }
//     } catch (err) {
//       setError(err?.response?.data?.message || "Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (!token) {
//       router.push("/password/forgot");
//     }
//   }, [token, router]);

//   return (
//     <main className="min-h-screen flex items-center justify-center p-4">
//       <section className="w-full max-w-[520px] bg-white rounded-2xl p-8 border border-text/10">
//         {/* Logo */}
//         <div className="flex justify-center mb-8">
//           <Link href="/">
//             <Image src={logo} alt="Logo" width={150} height={42} />
//           </Link>
//         </div>

//         <h4 className="text-2xl font-bold text-center">Verify OTP</h4>
//         <p className="text-sm text-gray-500 text-center mt-2">
//           Enter the 6-digit code sent to your email.
//         </p>

//         {error && (
//           <p className="text-red-600 text-sm text-center mt-2">{error}</p>
//         )}

//         {/* OTP Inputs */}
//         <div className="flex justify-center gap-3 mt-8">
//           {[...Array(6)].map((_, i) => (
//             <input
//               key={i}
//               ref={(el) => (inputRefs.current[i] = el)}
//               type="text"
//               inputMode="numeric"
//               maxLength={1}
//               onChange={(e) => handleChange(e, i)}
//               onKeyDown={(e) => handleKeyDown(e, i)}
//               onPaste={handlePaste}
//               className="w-12 h-12 text-center border border-text/30 rounded-lg text-lg focus:border-primary outline-none"
//             />
//           ))}
//         </div>

//         <Button
//           onClick={handleSubmitOtp}
//           className="w-full mt-8 py-3"
//           disabled={loading}
//         >
//           {loading ? "Verifying..." : "Verify OTP"}
//         </Button>

//         <p className="text-center text-sm mt-6">
//           Didn’t receive code?{" "}
//           <button className="text-primary font-semibold">Resend</button>
//         </p>
//       </section>
//     </main>
//   );
// };

// export default page;



'use client';

import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import logo from "@assets/logo.webp";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { verifyOtpAPI } from "@/services/apiClient";

const OTPPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const inputRefs = useRef([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Redirect if no token
  useEffect(() => {
    if (!token) {
      router.replace("/password/forgot"); // replace avoids setState in render warning
    }
  }, [token, router]);

  // Input handlers
  const handleChange = (e, index) => {
    let value = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = value;

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").replace(/[^0-9]/g, "");
    if (!paste) return;
    paste.split("").slice(0, 6).forEach((num, i) => {
      if (inputRefs.current[i]) inputRefs.current[i].value = num;
    });
    const nextIndex = paste.length >= 6 ? 5 : paste.length;
    inputRefs.current[nextIndex]?.focus();
  };

  const handleSubmitOtp = async (e) => {
    e.preventDefault();
    setError("");

    const otp = inputRefs.current.map((input) => input.value).join("");
    if (otp.length !== 6) {
      setError("Please enter a 6-digit OTP.");
      return;
    }

    try {
      setLoading(true);
      const res = await verifyOtpAPI({ otp, token });

      if (res.data?.message?.success?.[0]) {
        router.push(`/password/reset?token=${token}`);
      } else {
        setError("Invalid OTP, please try again.");
      }
    } catch (err) {
      const message = err?.response?.data?.message || "Something went wrong.";
      setError(typeof message === "string" ? message : JSON.stringify(message.error?.[0]));
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

        <h4 className="text-2xl font-bold text-center">Verify OTP</h4>
        <p className="text-sm text-gray-500 text-center mt-2">
          Enter the 6-digit code sent to your email.
        </p>

        {error && (
          <p className="text-red-600! text-sm text-center mt-2">{error}</p>
        )}

        {/* OTP Inputs */}
        <div className="flex justify-center gap-3 mt-8">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              ref={(el) => (inputRefs.current[i] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              onPaste={handlePaste}
              className="w-12 h-12 text-center border border-text/30 rounded-lg text-lg focus:border-primary outline-none"
            />
          ))}
        </div>

        <Button
          onClick={handleSubmitOtp}
          className="w-full mt-8 py-3"
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </Button>

      </section>
    </main>
  );
};

export default OTPPage;
