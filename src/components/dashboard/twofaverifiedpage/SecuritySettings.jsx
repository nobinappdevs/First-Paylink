// import React from "react";

// const SecuritySettings = () => {
//   return (
    // <section aria-labelledby="kyc-heading" className="">
    //   <div className="mx-auto max-w-6xl">
    //     {/* KYC Information Card */}
    //     <div className="rounded-2xl border border-gray-100  bg-white p-6 shadow-sm sm:p-8">
    //       <header className="flex flex-wrap items-center gap-3">
    //         <h2
    //           id="kyc-heading"
    //           className="text-lg font-bold  text-slate-800 sm:text-xl"
    //         >
    //           KYC Information
    //         </h2>

    //         {/* Status Badge */}
    //         <span
    //           role="status"
    //           aria-live="polite"
    //           className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
    //         >
    //           <span className="h-2 w-2 rounded-full bg-emerald-500" />
    //           Verified
    //         </span>
    //       </header>

    //       <p className="mt-2 text-sm text-emerald-600">
    //         Your KYC information has been successfully verified.
    //       </p>
    //     </div>
    //   </div>
    // </section>
//   );
// };

// export default SecuritySettings;




// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import Select from 'react-select';

// export default function KycPage() {
//   const [idTypes, setIdTypes] = useState([]);
//   const [status, setStatus] = useState('unverified');

//   const frontRef = useRef();
//   const backRef = useRef();
//   const idRef = useRef();

//   const [files, setFiles] = useState({
//     front: null,
//     back: null,
//     id: null,
//   });

//   useEffect(() => {
//     fetch('/api/kyc')
//       .then((res) => res.json())
//       .then((data) => {
//         setStatus(data.status);
//         setIdTypes(data.idTypes);
//       });
//   }, []);

//   const handleFile = (name, file) => {
//     setFiles((prev) => ({ ...prev, [name]: file }));
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 flex justify-center py-10">
//       <div className="w-full max-w-xl bg-white rounded-xl p-8">
//         {/* Header */}
//         <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
//           KYC Information
//           <span className="flex items-center gap-1 text-sm text-red-500">
//             <span className="w-2 h-2 bg-red-500 rounded-full" />
//             Unverified
//           </span>
//         </h2>

//         <p className="text-sm text-slate-500 mt-1">
//           Please submit your KYC information with valid data.
//         </p>

//         <div className="mt-6 space-y-5">

//           {/* Front */}
//           <KycFile
//             label="Front"
//             file={files.front}
//             onClick={() => frontRef.current.click()}
//           />
//           <input
//             type="file"
//             ref={frontRef}
//             hidden
//             onChange={(e) => handleFile('front', e.target.files[0])}
//           />

//           {/* Back */}
//           <KycFile
//             label="Back"
//             file={files.back}
//             onClick={() => backRef.current.click()}
//           />
//           <input
//             type="file"
//             ref={backRef}
//             hidden
//             onChange={(e) => handleFile('back', e.target.files[0])}
//           />

//           {/* ID Type */}
//           <div>
//             <label className="text-sm font-medium block mb-1">
//               ID Type
//             </label>
//             <Select
//               options={idTypes}
//               placeholder="Choose One"
//               styles={{
//                 control: (base) => ({
//                   ...base,
//                   minHeight: '48px',
//                   borderRadius: '8px',
//                 }),
//               }}
//             />
//           </div>

//           {/* ID */}
//           <KycFile
//             label="ID"
//             file={files.id}
//             onClick={() => idRef.current.click()}
//           />
//           <input
//             type="file"
//             ref={idRef}
//             hidden
//             onChange={(e) => handleFile('id', e.target.files[0])}
//           />

//           <p className="text-sm text-indigo-600 cursor-pointer">
//             Back to Dashboard
//           </p>

//           <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold">
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* 🔹 Choose File UI Component */
// function KycFile({ label, file, onClick }) {
//   return (
//     <div>
//       <label className="text-sm font-medium block mb-1">{label}</label>
//       <div className="flex items-center gap-3 border rounded-lg px-4 py-3">
//         <button
//           type="button"
//           onClick={onClick}
//           className="border px-3 py-1.5 rounded text-sm"
//         >
//           Choose File
//         </button>
//         <span className="text-sm text-slate-500">
//           {file ? file.name : 'No file chosen'}
//         </span>
//       </div>
//     </div>
//   );
// }



'use client';

import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useRef, useState } from 'react';
import Select from 'react-select';
import { reactSelectStyles } from "@/style/selectStyles";

const kycFields = [
  { id: 'front', label: 'Front', type: 'file' },
  { id: 'back', label: 'Back', type: 'file' },
  {
    id: 'idType',
    label: 'ID Type',
    type: 'select',
    options: [
      { value: 'nid', label: 'National ID' },
      { value: 'passport', label: 'Passport' },
      { value: 'driving', label: 'Driving License' },
    ],
  },
  { id: 'id', label: 'ID', type: 'file' },
];

export default function KycPage() {
  const inputRefs = useRef({});
  const [files, setFiles] = useState({});
  const [selected, setSelected] = useState(null);
  const [isVerified, setIsVerified] = useState(false);

  const handleFile = (key, file) => {
    setFiles((prev) => ({ ...prev, [key]: file }));
  };

  return (
    <>
    {
      isVerified ?(
        <section className="">
      <div className="mx-auto max-w-6xl">
        {/* KYC Information Card */}
        <div className="rounded-2xl border border-gray-100  bg-white p-6 shadow-sm sm:p-8">
          <header className="flex flex-wrap items-center gap-3">
            <h2
              id="kyc-heading"
              className="text-lg font-bold  text-slate-800 sm:text-xl"
            >
              KYC Information
            </h2>

            {/* Status Badge */}
            <span
              role="status"
              aria-live="polite"
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
              >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Verified
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

        {/* Header */}
        <h4 className=" flex items-center gap-2">
          KYC Information
          <span className="flex items-center gap-1 text-sm text-red-500">
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            Unverified
          </span>
        </h4>

        <p className="text-sm text-slate-500 mt-1">
          Please submit your KYC information with valid data.
        </p>

        {/* Dynamic Fields */}
        <div className="mt-6 space-y-5">
          {kycFields.map((field) => {
            // FILE TYPE
            if (field.type === 'file') {
              return (
                <div key={field.id}>
                  <label className="text-sm font-medium block mb-1">
                    {field.label}
                  </label>

                  <div className="flex items-center gap-3 bg-white border border-[#e5e5e5] rounded-[5px] text-[14px] text-[#425466] h-[45px] px-2 py-3">
                    <button
                      type="button"
                      onClick={() => inputRefs.current[field.id].click()}
                      className="border border-[#e5e5e5] cursor-pointer px-3 py-1.5 rounded text-sm"
                    >
                      Choose File
                    </button>

                    <span className="text-sm text-slate-500">
                      {files[field.id]
                        ? files[field.id].name
                        : 'No file chosen'}
                    </span>
                  </div>

                  <input
                    type="file"
                    hidden
                    ref={(el) => (inputRefs.current[field.id] = el)}
                    onChange={(e) =>
                      handleFile(field.id, e.target.files[0])
                    }
                  />
                </div>
              );
            }
            
            // SELECT TYPE
            if (field.type === 'select') {
              return (
                <div key={field.id}>
                  <label className="text-sm font-medium block mb-1">
                    {field.label}
                  </label>

                  <Select
                    options={field.options}
                    placeholder="Choose One"
                    value={selected}
                    onChange={setSelected}
                    styles={reactSelectStyles}
                  />
                </div>
              );
            }
          })}

          <Link href="/dashboard" className="text-sm text-primary mb-3 block cursor-pointer">
            Back to Dashboard
          </Link>
          <Button className='w-full'>
              Submit
          </Button>
        </div>
      </div>
      )
    }

    </>

  );
}
