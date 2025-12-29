// "use client";

// import { useEffect, useRef, useState } from "react";
// import Button from "@/components/ui/Button";

// const page = () => {
//   const inputRefs = useRef([]);
//   const [error, setError] = useState("");
//   const [timeLeft, setTimeLeft] = useState(60);
//   const [canResend, setCanResend] = useState(false);

//   // ⏳ countdown timer
//   useEffect(() => {
//     if (timeLeft === 0) {
//       setCanResend(true);
//       return;
//     }

//     const timer = setInterval(() => {
//       setTimeLeft((prev) => prev - 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [timeLeft]);

//   // OTP input logic
//   const handleChange = (e, index) => {
//     const value = e.target.value.replace(/[^0-9]/g, "");
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
//     const paste = e.clipboardData
//       .getData("text")
//       .replace(/[^0-9]/g, "")
//       .slice(0, 6);

//     paste.split("").forEach((num, i) => {
//       if (inputRefs.current[i]) {
//         inputRefs.current[i].value = num;
//       }
//     });

//     inputRefs.current[paste.length - 1]?.focus();
//   };

//   const handleSubmit = () => {
//     const otp = inputRefs.current.map((i) => i.value).join("");

//     if (otp.length !== 6) {
//       setError("Please enter the 6-digit OTP.");
//       return;
//     }

//     setError("");
//     console.log("OTP:", otp);
//   };

//   // 🔁 resend (UI only)
//   const handleResend = () => {
//     setTimeLeft(60);
//     setCanResend(false);
//     inputRefs.current.forEach((i) => (i.value = ""));
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-secondary/5 px-4">
//       <div className="w-full max-w-md bg-white p-6 rounded-xl shadow">
//         <h4 className="text-xl font-semibold text-primary text-center">
//           Verify OTP
//         </h4>

//         <p className="text-sm text-gray-500 text-center mt-1">
//           Enter the 6-digit OTP we have sent to your email to verify.
//         </p>

//         {error && (
//           <p className="text-sm text-red-500! text-center mt-3">{error}</p>
//         )}

//         {/* OTP inputs */}
//         <div className="flex justify-center gap-3 mt-6">
//           {[...Array(6)].map((_, i) => (
//             <input
//               key={i}
//               ref={(el) => (inputRefs.current[i] = el)}
//               type="text"
//               maxLength={1}
//               inputMode="numeric"
//               onChange={(e) => handleChange(e, i)}
//               onKeyDown={(e) => handleKeyDown(e, i)}
//               onPaste={handlePaste}
//               className="w-12 h-12 text-center text-lg border border-text/30 rounded-lg focus:border-primary outline-none"
//             />
//           ))}
//         </div>

//         <Button onClick={handleSubmit} className="w-full mt-6">
//           Verify OTP
//         </Button>

//         {/*  Countdown / Resend */}
//         <div className="text-center mt-4">
//           {!canResend ? (
//             <p className="text-sm text-gray-500">
//               Resend OTP in <span className="text-primary">{timeLeft}</span>{" "}
//               seconds
//             </p>
//           ) : (
//             <button
//               onClick={handleResend}
//               className="text-sm text-primary hover:underline"
//             >
//               Resend OTP
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { toast } from "react-hot-toast";
import { emailverifyAPI, otpResendAPI } from "@/services/apiClient";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@assets/logo.webp";

const Page = () => {
  const inputRefs = useRef([]);
  const router = useRouter()
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  // ⏳ Countdown timer
  useEffect(() => {
    if (timeLeft === 0) {
      setCanResend(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // OTP input logic
  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
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
    const paste = e.clipboardData
      .getData("text")
      .replace(/[^0-9]/g, "")
      .slice(0, 6);

    paste.split("").forEach((num, i) => {
      if (inputRefs.current[i]) {
        inputRefs.current[i].value = num;
      }
    });

    inputRefs.current[paste.length - 1]?.focus();
  };

  // ✅ Submit OTP
  const handleSubmit = async () => {
    const otp = inputRefs.current.map((i) => i.value).join("");
    console.log(otp);

    if (otp.length !== 6) {
      setError("Please enter the 6-digit OTP.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await emailverifyAPI(otp);
      // toast.success(res?.data?.message || "OTP verified successfully.", {
      //   position: "top-right",
      // });
      toast.success('OTP verified successfully.')
      router.push('/verifySuccess')
      // Optional: redirect user if needed
    } catch (err) {
      const messages = err?.response?.data?.message?.error;

      if (Array.isArray(messages)) {
        messages.forEach((msg) => {
          toast.error(msg, { position: "top-right" });
        });
      } else if (messages) {
        toast.error(messages, { position: "top-right" });
      } else {
        toast.error("Failed to verify OTP. Please try again.", {
          position: "top-right",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  // ✅ Resend OTP
  const handleResend = async () => {
    setResending(true);
    try {
      const res = await otpResendAPI();
      console.log(res);
      // toast.success(res?.data?.message || "OTP resent successfully.", {
      //   position: "top-right",
      // });
       toast.success('OTP resent successfully.')
      setTimeLeft(60);
      setCanResend(false);
      inputRefs.current.forEach((i) => (i.value = ""));
    }  catch (err) {
      const messages = err?.response?.data?.message?.error;

      if (Array.isArray(messages)) {
        messages.forEach((msg) => {
          toast.error(msg, { position: "top-right" });
        });
      } else if (messages) {
        toast.error(messages, { position: "top-right" });
      } else {
        toast.error("Failed to verify OTP. Please try again.", {
          position: "top-right",
        });
      }
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center flex-col justify-center bg-secondary/5 px-4">
      <div className="w-full max-w-lg bg-white p-6 rounded-xl shadow">
            <div className="flex justify-center mb-8">
        <Link href="/">
          <Image src={logo} alt="Logo" width={150} height={42} />
        </Link>
      </div>
      <div className="">
        <h4 className="text-xl font-semibold text-primary text-center">
          Verify OTP
        </h4>

        <p className="text-sm text-gray-500 text-center mt-1">
          Enter the 6-digit OTP we have sent to your email to verify.
        </p>

        {error && (
          <p className="text-sm text-red-500! text-center mt-3">{error}</p>
        )}

        {/* OTP inputs */}
        <div className="flex justify-center gap-3 mt-6">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              ref={(el) => (inputRefs.current[i] = el)}
              type="text"
              maxLength={1}
              inputMode="numeric"
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              onPaste={handlePaste}
              className="w-12 h-12 text-center text-lg border border-text/30 rounded-lg focus:border-primary outline-none"
            />
          ))}
        </div>

        <Button
          onClick={handleSubmit}
          className="w-full mt-6"
          disabled={loading}
        >
                      {loading ? (
              <>
                <Loader2 className="size-6 animate-spin" />
              </>
            ) : (
              "Verify OTP"
            )}
        </Button>

        {/* Countdown / Resend */}
        <div className="text-center mt-4">
          {!canResend ? (
            <p className="text-sm text-gray-500">
              Resend OTP in <span className="text-primary">{timeLeft}</span>{" "}
              seconds
            </p>
          ) : (
            <button
              onClick={handleResend}
              disabled={resending}
              className="text-sm text-primary cursor-pointer hover:underline"
            >
                      {resending ? (
              <>
                <Loader2 className="size-6 animate-spin" />
              </>
            ) : (
              "Resend OTP"
            )}
            </button>
          )}
        </div>
      </div>
            
      </div>
    </div>
  );
};

export default Page;
