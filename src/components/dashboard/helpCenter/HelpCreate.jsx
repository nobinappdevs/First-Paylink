// "use client";
// import React, { useState } from "react";
// import { CloudUpload, Send, X } from "lucide-react";
// import Button from "@/components/Sheared/Button";
// import Link from "next/link";

// const HelpCreate = () => {
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files
//       ? e.target.files[0]
//       : e.dataTransfer.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//     }
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     handleFileChange(e);
//   };

//   const handleSubmit = () => {
//     console.log("Subject:", subject);
//     console.log("Message:", message);
//     console.log("Attachment:", file);
//     alert("Ticket submitted! (Check console for data)");
//   };

//   const handleReset = () => {
//     setSubject("");
//     setMessage("");
//     setFile(null);
//   };

//   const removeFile = () => {
//     setFile(null);
//   };

//   return (
//       <div className="">
//         <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
//           {/* Header Section */}
//           <div className="bg-linear-to-r from-primary to-primary_light px-8 py-6">
//             <h2 className="text-3xl font-bold text-white mb-2">
//               Create Support Ticket
//             </h2>
//             <p className="text-blue-100 text-sm">
//               We&apos;re here to help! Submit your query and our team will get
//               back to you shortly.
//             </p>
//           </div>

//           {/* Form Section */}
//           <div className="p-8">
//             <div className="space-y-6">
//               {/* Subject Input */}
//               <div>
//                 <label
//                   htmlFor="subject"
//                   className="block text-sm font-semibold text-gray-700 mb-2"
//                 >
//                   Subject <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   id="subject"
//                   type="text"
//                   value={subject}
//                   onChange={(e) => setSubject(e.target.value)}
//                   placeholder="Brief description of your issue..."
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl shadow-md focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:border-primary-500 focus-visible:outline-none transition"
//                 />
//               </div>

//               {/* Message Textarea */}
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-semibold text-gray-700 mb-2"
//                 >
//                   Message <span className="text-red-500">*</span>
//                 </label>
//                 <textarea
//                   id="message"
//                   rows="8"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   placeholder="Describe your issue in detail. Include any relevant information that might help us assist you better..."
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl shadow-md focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:border-primary-500 focus-visible:outline-none transition"
//                 ></textarea>
//               </div>

//               {/* Attachments - Drag and Drop Area */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Attachments{" "}
//                   <span className="text-gray-400 font-normal">(Optional)</span>
//                 </label>

//                 <div
//                   className="border-2 border-dashed border-gray-300 shadow-md  rounded-xl p-12 text-center transition duration-200 hover:border-blue-400 hover:bg-blue-50/50 cursor-pointer relative"
//                   onDragOver={handleDragOver}
//                   onDrop={handleDrop}
//                   onClick={() => document.getElementById("file-upload").click()}
//                 >
//                   <input
//                     id="file-upload"
//                     type="file"
//                     onChange={handleFileChange}
//                     className="hidden"
//                   />
//                   {file ? (
//                     <div className="flex items-center justify-center gap-3">
//                       <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-lg">
//                         <p className="text-sm text-gray-700">
//                           <span className="font-semibold text-blue-600">
//                             {file.name}
//                           </span>
//                         </p>
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             removeFile();
//                           }}
//                           className="text-red-500 hover:text-red-700 transition"
//                         >
//                           <X className="h-4 w-4" />
//                         </button>
//                       </div>
//                     </div>
//                   ) : (
//                     <>
//                       <CloudUpload className="mx-auto h-12 w-12 text-blue-400 mb-4" />
//                       <p className="text-base text-gray-600 mb-1">
//                         <span className="text-blue-600 font-semibold hover:text-blue-700 transition duration-150">
//                           Click to upload
//                         </span>{" "}
//                         or drag and drop
//                       </p>
//                       <p className="text-xs text-gray-500">
//                         PNG, JPG, PDF up to 10MB
//                       </p>
//                     </>
//                   )}
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex gap-4 pt-4">
//                 <Link href={"/dashboard/helpCenter"}>
//                   <Button
//                     gradient
//                     size="lg"
//                     className="flex justify-center w-full"
//                     rightIcon={<Send className="h-5 w-5" />}
//                   >
//                     Submit Ticket
//                   </Button>
//                 </Link>
//                 <Button size="lg">Reset</Button>
//               </div>
//             </div>

//             {/* Help Text */}
//             <div className="mt-8 p-4 bg-secondery/5 border border-secondery/5 rounded-xl">
//               <p className="text-sm text-secondery/80">
//                 <span className="font-semibold">Tip:</span> Providing detailed
//                 information helps us resolve your issue faster. Include
//                 screenshots if applicable.
//               </p>
//             </div>
//           </div>
//         </div>
//     </div>
//   );
// };

// export default HelpCreate;


"use client";
import React, { useState } from "react";
import { CloudUpload, Send, RotateCcw, X, Info } from "lucide-react";
import Button from "@/components/Sheared/Button";
import Link from "next/link";

const HelpCreate = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files
      ? e.target.files[0]
      : e.dataTransfer.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e) => {
    e.preventDefault();
    handleFileChange(e);
  };

  const handleReset = () => {
    setSubject("");
    setMessage("");
    setFile(null);
  };

  const removeFile = () => setFile(null);

  return (
    <div className="w-full">
      <div className="bg-white border border-gray-100 font-roboto shadow-xl shadow-gray-200/50 rounded-2xl overflow-hidden">
        {/* Header Section - No Gradient, Solid White with Bottom Border */}
        <div className="px-8 py-8 border-b border-gray-100 bg-gray-50/30">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-3xl font-black text-secondery/80 font-montserrat tracking-tight">
              Create Support Ticket
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-2xl leading-relaxed">
            We&apos;re here to help! Submit your query and our dedicated team will get
            back to you shortly. Detailed reports help us assist you faster.
          </p>
        </div>

        {/* Form Section */}
        <div className="p-8">
          <div className="space-y-8">
            {/* Subject Input */}
            <div className="group">
              <label
                htmlFor="subject"
                className="block text-sm font-bold text-gray-800 mb-2 transition-colors group-focus-within:text-primary"
              >
                Subject <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Withdrawal issue in Starling Bank"
                  className="w-full px-5 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary focus:outline-none transition-all duration-200 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="group">
              <label
                htmlFor="message"
                className="block text-sm font-bold text-gray-800 mb-2 transition-colors group-focus-within:text-primary"
              >
                Detailed Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your issue in detail. Include transaction IDs if necessary..."
                className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary focus:outline-none transition-all duration-200 placeholder-gray-400 resize-none"
              ></textarea>
            </div>

            {/* Attachments Area */}
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">
                Attachments <span className="text-gray-400 font-normal ml-1">(Optional)</span>
              </label>

              <div
                className={`border-2 border-dashed rounded-2xl p-10 text-center transition-all duration-300 relative ${
                  file 
                  ? "border-primary bg-primary/5" 
                  : "border-gray-200 hover:border-primary hover:bg-gray-50"
                }`}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => document.getElementById("file-upload").click()}
              >
                <input
                  id="file-upload"
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                />
                
                {file ? (
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl border border-primary/20 shadow-sm">
                      <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        <Info size={20} />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-bold text-gray-900 truncate max-w-[200px]">
                          {file.name}
                        </p>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                          {(file.size / (1024 * 1024)).toFixed(2)} MB
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFile();
                        }}
                        className="ml-2 h-8 w-8 rounded-full flex items-center justify-center bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="h-14 w-14 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 mb-4 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                      <CloudUpload size={28} />
                    </div>
                    <p className="text-gray-600 font-medium">
                      Drag & drop your files or <span className="text-primary font-bold">browse</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      Supports: PNG, JPG, PDF (Max 10MB)
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
              <Link href={"/dashboard/helpCenter"} className="flex-1">
                <Button
                gradient
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Submit Ticket
                </Button>
              </Link>
              
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-4 rounded-xl border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <RotateCcw size={18} />
                Reset
              </button>
            </div>
          </div>

          {/* Bottom Alert/Tip */}
          <div className="mt-10 flex gap-4 p-5 bg-blue-50/50 rounded-2xl border border-blue-100/50">
            <div className="h-10 w-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-500 shrink-0">
               <Info size={20} />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              <span className="font-bold text-gray-900 block mb-0.5">Quick Tip:</span> 
              Providing detailed information and relevant screenshots helps our support team 
              analyze and resolve your ticket up to <span className="text-blue-600 font-bold">50% faster</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCreate;