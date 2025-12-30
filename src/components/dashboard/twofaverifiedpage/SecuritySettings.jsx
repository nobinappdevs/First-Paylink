"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Select from "react-select";
import { reactSelectStyles } from "@/style/selectStyles";
import { getKYCVerifyAPI } from "@/services/apiClient";

export default function KycPage() {
  const inputRefs = useRef({});
  const [files, setFiles] = useState({});
  const [selected, setSelected] = useState({});
  const [kycData, setKycData] = useState([]);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState();

  useEffect(() => {
    const fetchKyc = async () => {
      try {
        const res = await getKYCVerifyAPI();
        const data = res.data.data;
        setStatus(data.kyc_status);
        setKycData(data.input_fields || []);
        setIsVerified(data.kyc_status !== 0);
      } catch (err) {
        console.error("Failed to fetch KYC data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchKyc();
  }, []);

  const handleFile = (key, file) => {
    setFiles((prev) => ({ ...prev, [key]: file }));
  };

  const handleSelect = (key, value) => {
    setSelected((prev) => ({ ...prev, [key]: value }));
  };

  // Helper function
  const getKycStatusBadge = (kyc_status) => {
    switch (kyc_status) {
      case 0:
        return { text: "Unverified", color: "red-500", bg: "bg-red-50" };
      case 1:
        return { text: "Verified", color: "emerald-700", bg: "bg-emerald-50" };
      case 2:
        return { text: "Pending", color: "yellow-700", bg: "bg-yellow-50" };
      case 3:
        return { text: "Rejected", color: "rose-700", bg: "bg-rose-50" };
      default:
        return { text: "Unknown", color: "slate-500", bg: "bg-slate-50" };
    }
  };

  const badge = getKycStatusBadge(status);

  if (loading) return null; // Loader or blank while fetching

  return (
    <>
      {isVerified ? (
        <section className="">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-gray-100  bg-white p-6 shadow-sm sm:p-8">
              <header className="flex flex-wrap items-center gap-3">
                <h2
                  id="kyc-heading"
                  className="text-lg font-bold  text-slate-800 sm:text-xl"
                >
                  KYC Information
                </h2>
            <span
              className={`flex items-center gap-1 text-sm text-${badge.color} ${badge.bg} px-2 py-1 rounded-full`}
            >
              <span className={`w-2 h-2 rounded-full bg-${badge.color}`} />
              {badge.text}
            </span>
              </header>

              <p className="mt-2 text-sm text-emerald-600">
                Your KYC information has been successfully verified.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <div className="md:w-6/12 mx-auto border border-text/15 bg-basic px-8 py-10 rounded-xl w-full">
          <h4 className=" flex items-center gap-2">
            KYC Information
            <span
              className={`flex items-center gap-1 text-sm text-${badge.color} ${badge.bg} px-2 py-1 rounded-full`}
            >
              <span className={`w-2 h-2 rounded-full bg-${badge.color}`} />
              {badge.text}
            </span>
          </h4>

          <p className="text-sm text-slate-500 mt-1">
            Please submit your KYC information with valid data.
          </p>

          <div className="mt-6 space-y-5">
            {kycData.map((field) => {
              if (field.type === "file") {
                return (
                  <div key={field.name}>
                    <label className="text-sm font-medium block mb-1">
                      {field.label}
                    </label>
                    <div
                      className="cursor-pointer"
                      onClick={() => inputRefs.current[field.name]?.click()} // Div এ click handle
                    >
                      <div className="flex items-center gap-3 bg-white border border-[#e5e5e5] rounded-[5px] text-[14px] text-[#425466] h-[45px] px-2 py-3">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation(); // Div এর click duplicate na hoar jonno
                            inputRefs.current[field.name]?.click();
                          }}
                          className="border border-[#e5e5e5] cursor-pointer px-3 py-1.5 rounded text-sm"
                        >
                          Choose File
                        </button>

                        <span className="text-sm text-slate-500">
                          {files[field.name]
                            ? files[field.name].name
                            : "No file chosen"}
                        </span>
                      </div>

                      <input
                        type="file"
                        hidden
                        ref={(el) => (inputRefs.current[field.name] = el)}
                        onChange={(e) =>
                          handleFile(field.name, e.target.files[0])
                        }
                      />
                    </div>
                  </div>
                );
              }

              if (field.type === "select") {
                return (
                  <div key={field.name}>
                    <label className="text-sm font-medium block mb-1">
                      {field.label}
                    </label>

                    <Select
                      options={field.validation.options.map((opt) => ({
                        value: opt,
                        label: opt,
                      }))}
                      placeholder="Choose One"
                      value={selected[field.name]}
                      onChange={(value) => handleSelect(field.name, value)}
                      styles={reactSelectStyles}
                    />
                  </div>
                );
              }
            })}

            <Link
              href="/dashboard"
              className="text-sm text-primary mb-3 block cursor-pointer"
            >
              Back to Dashboard
            </Link>
            <Button className="w-full">Submit</Button>
          </div>
        </div>
      )}
    </>
  );
}