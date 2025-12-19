'use client';

import Image from "next/image";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, X } from "lucide-react";

export default function ImageUploadField({ className = "",}) {
  const [fileData, setFileData] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles?.[0];
    if (!file) return;

    const preview = URL.createObjectURL(file);
    setFileData({ file, preview });
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
    disabled: !!fileData
  });

  const removeImage = () => {
    setFileData(null);
  };

  return (
    <div>
      {/* Label */}
      <label className="block text-sm font-medium text-text/80 mb-2">
        Image <span className="text-red-500">*</span>
      </label>

      {/* Dropzone Wrapper */}
      <div
        {...getRootProps()}
        className={`
          relative border-2 rounded-lg border-dashed overflow-hidden cursor-pointer
          transition-colors
          ${isDragActive ? "border-primary bg-primary/5" : "border-slate-300"}
          hover:border-primary
          focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-200
        `}
      >
        <input {...getInputProps()} />

        {/* Fixed Height */}
        <div className={`relative h-[180px] ${className}`}>
          {/* Empty State */}
          {!fileData && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <Upload className="w-8 h-8 text-primary mb-2" />
              <p className="text-sm text-slate-600">
                {isDragActive ? (
                  <span className="font-semibold text-primary">
                    Drop the image here
                  </span>
                ) : (
                  <>
                    Drop your file or{" "}
                    <span className="text-primary font-bold">click</span> to
                    select
                  </>
                )}
              </p>
            </div>
          )}

          {/* Preview */}
          {fileData && (
            <>
              <Image
                src={fileData.preview}
                alt="Preview"
                fill
                className="object-cover"
              />

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

        {/* Info + Progress */}
        {fileData && (
          <div className="p-3 bg-white border-t">
            <p className="text-sm font-medium truncate">
              {fileData.file.name}
            </p>
            <p className="text-xs text-slate-500">
              {(fileData.file.size / 1024).toFixed(1)} KB
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
