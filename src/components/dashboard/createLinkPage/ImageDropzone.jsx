'use client'
import Image from "next/image";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

export default function ImageDropzone() {
  const [previewImages, setPreviewImages] = useState([]);

  const onDrop = (acceptedFiles) => {
    const previews = acceptedFiles.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file)
      })
    );
    setPreviewImages(prev => [...prev, ...previews]);
  };

  const removeImage = (index) => {
    setPreviewImages(prev => prev.filter((_, i) => i !== index));
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    multiple: true,
    onDrop
  });

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className="p-6 border-2 border-dashed rounded-lg cursor-pointer text-center"
      >
        <input {...getInputProps()} />
        <p>Drag & Drop or Click to Upload Images</p>
      </div>

      {/* Image Preview */}
      <div className="flex flex-wrap gap-4">
        {previewImages.map((file, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden border">

            {/* Remove / Close Button */}
            <button
              onClick={() => removeImage(index)}
              className="absolute top-1 right-1 cursor-pointer bg-black/60 text-white w-6 h-6 flex items-center justify-center rounded-full text-sm hover:bg-black"
            >
              ✕
            </button>

            <Image
              src={file.preview}
              className="object-cover w-[500px] h-[200px]"
              alt="Preview"
              width={500}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
