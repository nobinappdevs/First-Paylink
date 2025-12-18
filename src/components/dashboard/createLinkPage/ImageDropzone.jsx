'use client';

import Image from "next/image";
import { useState } from "react";
import { Upload, X } from "lucide-react";

export default function ImageUploadField() {
  const [fileData, setFileData] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const preview = URL.createObjectURL(file);
    setFileData({ file, preview });
    setProgress(0);

    let value = 0;
    const interval = setInterval(() => {
      value += 10;
      setProgress(value);
      if (value >= 100) clearInterval(interval);
    }, 120);
  };

  const removeImage = () => {
    setFileData(null);
    setProgress(0);
  };

  return (
    <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                    Image{" "}
                    <span className="text-red-500" aria-label="required">
                      *
                    </span>
                  </label>

      <div className="relative border-2 border-dashed border-slate-300 rounded-xl overflow-hidden hover:border-primary transition-colors focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-200">

        {/* Fixed Height Container */}
        <div className="relative h-[180px]">

          {/* Default Upload UI */}
          {!fileData && (
            <label className="absolute inset-0 flex flex-col items-center justify-center text-center cursor-pointer">
              <Upload className="w-8 h-8 text-primary mb-2" />
              <p className="text-sm text-slate-600">
                Drop your file Or{" "}
                <span className="text-primary  font-bold">click</span> to select
              </p>
              <input
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={handleFileChange}
              />
            </label>
          )}

          {/* Image Preview (same height) */}
          {fileData && (
            <>
              <Image
                src={fileData.preview}
                alt="Preview"
                fill
                className="object-cover"
              />

              {/* Remove Button */}
              <button
                onClick={removeImage}
                className="absolute cursor-pointer top-2 right-2 z-10 bg-black/60 text-white w-7 h-7 rounded-full flex items-center justify-center hover:bg-black transition"
              >
                <X size={14} />
              </button>
            </>
          )}
        </div>

        {/* File info + progress (below, height doesn't change image area) */}
        {fileData && (
          <div className="p-3 bg-white border-t">
            <p className="text-sm font-medium truncate">
              {fileData.file.name}
            </p>
            <p className="text-xs text-slate-500">
              {(fileData.file.size / 1024).toFixed(1)} KB
            </p>

            {progress < 100 && (
              <div className="mt-2 h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
