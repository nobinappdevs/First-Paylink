// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { Copy, Smartphone, Apple, ShieldCheck, Info } from "lucide-react";
// import Button from "@/components/ui/Button";
// import autenticator from "@assets/autenticator.png";
// import { getTWOFAAPI } from "@/services/apiClient";
// import SkeletonLoader from "@/components/Sheared/Skeleton";

// const TwoFactorSetup = () => {
//   const [fAData, setFAData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   console.log(fAData);

//   const fetchTwoFAData = async () => {
//     try {
//       const res = await getTWOFAAPI();
//       setFAData(res.data.data);
//     } catch (error) {
//       const messages = error?.response?.data?.message?.error;

//       if (Array.isArray(messages)) {
//         messages.forEach((msg) => {
//           toast.error(msg, { position: "top-right" });
//         });
//       } else if (messages) {
//         toast.error(messages, { position: "top-right" });
//       } else {
//         toast.error("Something went wrong", { position: "top-right" });
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTwoFAData();
//   }, []);

//   const address = fAData?.qr_secrete;

//   if (loading) {
//     return <SkeletonLoader />;
//   }

//   return (
//     <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-6">
//       {/* LEFT – QR & SECRET */}
//       <div className="bg-white rounded-2xl border border-text/10  p-6 sm:p-8 flex flex-col">
//         {/* Header */}
//         <div className="flex items-center gap-3 mb-6">
//           <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600">
//             <ShieldCheck size={22} />
//           </div>
//           <h4>Security Configuration</h4>
//         </div>

//         {/* Secret Key */}
//         <div className="mb-6">
//           <label className="block text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">
//             Secret Address
//           </label>
//           <div className="flex items-stretch">
//             <input
//               readOnly
//               value={address}
//               className="flex-1 px-4 py-3 text-sm font-mono text-gray-700 bg-gray-50 border border-gray-200 rounded-l-xl outline-none"
//             />
//             <button
//               className="px-4 bg-slate-900 text-white rounded-r-xl hover:bg-primary transition cursor-pointer"
//               onClick={() => navigator.clipboard.writeText(address)}
//             >
//               <Copy size={18} />
//             </button>
//           </div>
//         </div>

//         {/* QR */}
//         <div className="flex flex-col items-center justify-center flex-1">
//           <div className="p-4 border-2 border-dashed border-gray-200 rounded-2xl bg-white mb-4">
//             <Image
//               src={fAData?.qr_code}
//               alt="QR Code"
//               width={180}
//               height={180}
//               className="w-40 h-40 sm:w-44 sm:h-44"
//             />
//           </div>
//           <p className="text-center text-sm text-gray-500 max-w-xs">
//             Scan this QR code using your authenticator app to connect your
//             account securely.
//           </p>
//         </div>

//         {/* Action */}
//         <div className="mt-6">
//           <Button className="w-full justify-center">
//             Enable Two-Factor Authentication
//           </Button>
//         </div>
//         {fAData.qr_status == 1 && (
//           <p className="pt-3 text-red-600!">{fAData?.alert}</p>
//         )}
//       </div>

//       {/* RIGHT – APP INFO */}
//       <div className="bg-white rounded-2xl border border-text/10   p-6 sm:p-8">
//         <h4 className=" mb-4">Download Google Authenticator App</h4>

//         {/* Info Box */}
//         <div className="flex gap-3 bg-indigo-50 border-l-4 border-primary p-4 rounded-xl mb-8">
//           <Info size={20} className="text-primary shrink-0 mt-0.5" />
//           <p className="text-sm text-gray-600 leading-relaxed">
//             Google Authenticator is a product based authenticator by Google that
//             executes two-venture confirmation administrations for verifying
//             clients of any programming applications
//             <a className="ml-1 text-primary font-semibold cursor-pointer hover:underline">
//               How to setup?
//             </a>
//           </p>
//         </div>

//         {/* App Logo */}
//         <div className="flex justify-center mb-10">
//           <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gray-100 flex items-center justify-center">
//             <Image
//               src={autenticator}
//               alt="Google Authenticator"
//               width={120}
//               height={120}
//               className="object-contain"
//             />
//           </div>
//         </div>

//         {/* Store Buttons */}
//         <div className="space-y-4">
//           <Button className="w-full ">
//             <Smartphone size={20} />
//             Google Play
//           </Button>

//           <Button className="w-full">
//             <Apple size={20} />
//             App Store
//           </Button>
//           <p></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TwoFactorSetup;



"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Copy, Smartphone, Apple, ShieldCheck, Info, X } from "lucide-react";
import Button from "@/components/ui/Button";
import autenticator from "@assets/autenticator.png";
import { getTWOFAAPI, twoFAStatusUpdateAPI } from "@/services/apiClient";
import SkeletonLoader from "@/components/Sheared/Skeleton";
import toast, { Toaster } from "react-hot-toast";

const TwoFactorSetup = () => {
  const [fAData, setFAData] = useState(null); // Initial state null rakha valo object er khetre
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [updating, setUpdating] = useState(false);

  const fetchTwoFAData = async () => {
    try {
      const res = await getTWOFAAPI();
      // Laravel response logic: res.data.data
      setFAData(res.data.data);
    } catch (error) {
      toast.error("Failed to fetch 2FA data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTwoFAData();
  }, []);

  const handleTwoFAUpdate = async () => {
    setUpdating(true);
    try {
      // Logic: 0 hole 1 hobe, 1 hole 0 hobe
      const newStatus = fAData.qr_status === 0 ? 1 : 0;

      // Laravel API-te 'status' key hisebe data pathano hocche
      await twoFAStatusUpdateAPI({ 
       newStatus 
      });

      toast.success(
        newStatus === 1
          ? "Two-Factor Authentication Enabled"
          : "Two-Factor Authentication Disabled"
      );
      
      setModalOpen(false);
      // Update successful hole abar data fetch korbe state refresh korar jonno
      fetchTwoFAData();
    } catch (err) {
      toast.error("Failed to update status");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <SkeletonLoader />;

  const address = fAData?.qr_secrete;

  return (
    <>
      <Toaster position="top-right" />
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* LEFT – QR & SECRET */}
        <div className="bg-white rounded-2xl border border-text/10 p-6 sm:p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600">
              <ShieldCheck size={22} />
            </div>
            <h4>Security Configuration</h4>
          </div>

          <div className="mb-6">
            <label className="block text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">
              Secret Address
            </label>
            <div className="flex items-stretch">
              <input
                readOnly
                value={address || ""}
                className="flex-1 px-4 py-3 text-sm font-mono text-gray-700 bg-gray-50 border border-gray-200 rounded-l-xl outline-none"
              />
              <button
                className="px-4 bg-slate-900 text-white rounded-r-xl hover:bg-primary transition cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(address);
                  toast.success("Copied to clipboard");
                }}
              >
                <Copy size={18} />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center flex-1">
            <div className="p-4 border-2 border-dashed border-gray-200 rounded-2xl bg-white mb-4">
              {fAData?.qr_code && (
                <Image
                  src={fAData.qr_code}
                  alt="QR Code"
                  width={180}
                  height={180}
                  className="w-40 h-40 sm:w-44 sm:h-44"
                />
              )}
            </div>
            <p className="text-center text-sm text-gray-500 max-w-xs">
              Scan this QR code using your authenticator app to connect your
              account securely.
            </p>
          </div>

          <div className="mt-6">
            <Button
              className="w-full justify-center"
              onClick={() => setModalOpen(true)}
            >
              {fAData?.qr_status === 0
                ? "Enable Two-Factor Authentication"
                : "Disable Two-Factor Authentication"}
            </Button>
          </div>

          {/* Status 1 thakle alert text dekhabe */}
          {fAData?.qr_status === 1 && fAData?.alert && (
            <p className="pt-3 text-red-600 text-sm italic">{fAData.alert}</p>
          )}
        </div>

        {/* RIGHT – APP INFO */}
        <div className="bg-white rounded-2xl border border-text/10 p-6 sm:p-8">
          <h4 className="mb-4">Download Google Authenticator App</h4>
          <div className="flex gap-3 bg-indigo-50 border-l-4 border-primary p-4 rounded-xl mb-8">
            <Info size={20} className="text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600 leading-relaxed">
              Google Authenticator is a product based authenticator by Google
              that executes two-venture confirmation administrations for
              verifying clients of any programming applications
              <a className="ml-1 text-primary font-semibold cursor-pointer hover:underline">
                How to setup?
              </a>
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gray-100 flex items-center justify-center">
              <Image
                src={autenticator}
                alt="Google Authenticator"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          </div>

          <div className="space-y-4">
            <Button className="w-full flex items-center gap-2 justify-center">
              <Smartphone size={20} />
              Google Play
            </Button>

            <Button className="w-full flex items-center gap-2 justify-center">
              <Apple size={20} />
              App Store
            </Button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-sm shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold text-lg">
                {fAData?.qr_status === 0
                  ? "Enable 2FA"
                  : "Disable 2FA"}
              </h4>
              <button 
                onClick={() => setModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>
            <p className="mb-6 text-sm text-gray-600">
              {fAData?.qr_status === 0
                ? "Are you sure you want to enable Two-Factor Authentication? This will add an extra layer of security to your account."
                : "Are you sure you want to disable Two-Factor Authentication? Your account will be less secure."}
            </p>
            <div className="flex gap-3">
              <Button
                className="flex-1 justify-center"
                onClick={handleTwoFAUpdate}
                disabled={updating}
              >
                {updating ? "Processing..." : fAData?.qr_status === 0 ? "Enable Now" : "Disable Now"}
              </Button>
              <Button
                className="flex-1 justify-center"
                variant="outline"
                onClick={() => setModalOpen(false)}
                disabled={updating}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TwoFactorSetup;