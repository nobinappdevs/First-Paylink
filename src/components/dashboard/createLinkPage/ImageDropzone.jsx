// 'use client';

// import Image from "next/image";
// import { useState, useCallback } from "react";
// import { useDropzone } from "react-dropzone";
// import { Upload, X } from "lucide-react";

// export default function ImageUploadField({ className = "", value, onChange }) {
//   const [fileData, setFileData] = useState(value || null);

//   const onDrop = useCallback(
//     (acceptedFiles) => {
//       const file = acceptedFiles?.[0];
//       if (!file) return;

//       const preview = URL.createObjectURL(file);
//       const newFileData = { file, preview };
//       setFileData(newFileData);
//     onChange?.(newFileData); // parent update
//     },
//     [onChange]
//   );

//   const removeImage = () => {
//     setFileData(null);
//     onChange?.(null); // parent update
//   };

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: { "image/*": [] },
//     multiple: false,
//     disabled: !!fileData,
//   });

//   return (
//     <div>
//       <label className="block text-sm font-medium text-text/80 mb-2">
//         Image <span className="text-red-500">*</span>
//       </label>

//       <div
//         {...getRootProps()}
//         className={`relative border-2 rounded-lg border-dashed overflow-hidden cursor-pointer transition-colors ${
//           isDragActive ? "border-primary bg-primary/5" : "border-slate-300"
//         } hover:border-primary focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-200`}
//       >
//         <input {...getInputProps()} />
//         <div className={`relative h-[180px] ${className}`}>
//           {!fileData && (
//             <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
//               <Upload className="w-8 h-8 text-primary mb-2" />
//               <p className="text-sm text-slate-600">
//                 {isDragActive ? (
//                   <span className="font-semibold text-primary">Drop the image here</span>
//                 ) : (
//                   <>
//                     Drop your file or <span className="text-primary font-bold">click</span> to select
//                   </>
//                 )}
//               </p>
//             </div>
//           )}

//           {fileData && (
//             <>
//               <Image src={fileData.preview} alt="Preview" fill className="object-cover" />
//               <button
//                 type="button"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   removeImage();
//                 }}
//                 className="absolute top-2 right-2 cursor-pointer z-10 bg-red-500 text-white w-7 h-7 rounded-full flex items-center justify-center transition"
//               >
//                 <X size={20} />
//               </button>
//             </>
//           )}
//         </div>

//         {fileData && (
//           <div className="p-3 bg-white border-t">
//             <p className="text-sm font-medium truncate">{fileData?.file?.name}</p>
//             <p className="text-xs text-slate-500">{(fileData?.file?.size / 1024).toFixed(1)} KB</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }









"use client";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, X } from "lucide-react";

export default function ImageUploadField({ className = "", imagePath, baseUrl, value, onChange }) {
  const [fileData, setFileData] = useState(value || null);
  console.log(fileData?.preview);

  // Update local state when parent value changes
  useEffect(() => {
    setFileData(value || null);
  }, [value]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles?.[0];
      if (!file) return;

      const preview = URL.createObjectURL(file);
      const newFileData = { file, preview };
      setFileData(newFileData);
      onChange?.(newFileData); // parent update
    },
    [onChange]
  );

  const removeImage = () => {
    setFileData(null);
    onChange?.(null); // parent update
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
    disabled: !!fileData,
  });

  // Compute proper image src
  const getImageSrc = () => {
    if (!fileData) return "";

    if (fileData?.file) return fileData?.preview; // new upload

    if (fileData?.preview) {
      // backend image
      if (fileData.preview.startsWith("http") || fileData?.preview.startsWith("blob:")) {
        return fileData?.preview;
      }
      // Example backend URL (adjust to your actual path)
      return `${baseUrl}/${imagePath}/${fileData?.preview}`;
    }

    return "";
  };

  return (
    <div>
      <label className="block text-sm font-medium text-text/80 mb-2">
        Image <span className="text-red-500">*</span>
      </label>

      <div
        {...getRootProps()}
        className={`relative border-2 rounded-lg border-dashed overflow-hidden cursor-pointer transition-colors ${
          isDragActive ? "border-primary bg-primary/5" : "border-slate-300"
        } hover:border-primary focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-200`}
      >
        <input {...getInputProps()} />
        <div className={`relative h-[180px] ${className}`}>
          {!fileData && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <Upload className="w-8 h-8 text-primary mb-2" />
              <p className="text-sm text-slate-600">
                {isDragActive ? (
                  <span className="font-semibold text-primary">Drop the image here</span>
                ) : (
                  <>
                    Drop your file or <span className="text-primary font-bold">click</span> to select
                  </>
                )}
              </p>
            </div>
          )}

          {fileData && (
            <>
              <Image src={getImageSrc()} alt="Preview" fill className="object-cover" />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeImage();
                }}
                className="absolute top-2 right-2 cursor-pointer z-10 bg-red-500 text-white w-7 h-7 rounded-full flex items-center justify-center transition"
              >
                <X size={20} />
              </button>
            </>
          )}
        </div>

        {fileData && fileData.file && (
          <div className="p-3 bg-white border-t">
            <p className="text-sm font-medium truncate">{fileData.file.name}</p>
            <p className="text-xs text-slate-500">{(fileData.file.size / 1024).toFixed(1)} KB</p>
          </div>
        )}
      </div>
    </div>
  );
}




