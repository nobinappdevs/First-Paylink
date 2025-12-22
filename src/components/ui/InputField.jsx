// "use client";
// import { Eye, EyeClosed } from "lucide-react";
// import React, { useState } from "react";

// const InputField = ({
//   label,
//   type = "text",
//   name,
//   value,
//   onChange,
//   placeholder,
//   defaultValue,
//   required = false,
//   readOnly = false,
//   icon: Icon,
//   className = "",
// }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="flex flex-col gap-1  w-full">
//       {label && (
//         <label className="block text-sm font-medium text-text/80 mb-1">
//           {label}{" "}
//           <span className="text-red-500" aria-label="required">
//             *
//           </span>
//         </label>
//       )}

//       {/* ===== TEXTAREA ===== */}
//       {type === "textarea" && (
//         <textarea
//           name={name}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           defaultValue={defaultValue}
//           required={required}
//           readOnly={readOnly}
//           rows={4}
//           className={`w-full bg-white border border-[#e5e5e5] rounded-[5px] px-[15px] py-2.5 text-[14px] font-medium text-[#425466] shadow-none outline-none focus:ring-0 focus:border-primary resize-y ${className}`}
//         />
//       )}

//       {/* ===== PASSWORD ===== */}
//       {type === "password" && (
//         <div className="relative w-full">
//           <input
//             type={showPassword ? "text" : "password"}
//             name={name}
//             value={value}
//             onChange={onChange}
//             placeholder={placeholder}
//             defaultValue={defaultValue}
//             required={required}
//             readOnly={readOnly}
//             className={`w-full bg-white border border-[#e5e5e5] rounded-[5px] h-[45px] leading-[45px] px-[15px] pr-11 py-2.5 text-[14px] font-medium text-[#425466] shadow-none outline-none focus:ring-0 focus:border-primary ${className}`}
//           />

//           {!readOnly && (
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6e6e6e] hover:text-primary cursor-pointer"
//             >
//               {showPassword ? <Eye size={18} /> : <EyeClosed size={18} />}
//             </button>
//           )}
//         </div>
//       )}
//       {/* ===== DEFAULT INPUT (WITH ICON SUPPORT) ===== */}
//       {type !== "textarea" && type !== "password" && (
//         <div className={`relative ${Icon ? "flex-1 max-w-sm" : ""}`}>
//           {Icon && (
//             <Icon
//               size={18}
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//             />
//           )}

//           <input
//             type={type}
//             name={name}
//             value={value}
//             onChange={onChange}
//             placeholder={placeholder}
//             defaultValue={defaultValue}
//             required={required}
//             readOnly={readOnly}
//             className={`w-full bg-white border border-[#e5e5e5] rounded-[5px] h-[45px] text-[14px] font-medium text-[#425466] outline-none focus:border-primary
//               ${Icon ? "pl-10 pr-4" : "px-[15px]"}
//               ${className}
//             `}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default InputField;


"use client";
import { Eye, EyeClosed } from "lucide-react";
import React, { useState, forwardRef } from "react";

const InputField = forwardRef(
  (
    {
      label,
      type = "text",
      name,
      value,
      onChange,
      onBlur,
      placeholder,
      defaultValue,
      required = false,
      readOnly = false,
      icon: Icon,
      className = "",
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <label className="block text-sm font-medium text-text/80 mb-1">
            {label}{" "}
            {required && <span className="text-red-500">*</span>}
          </label>
        )}

        {/* ===== TEXTAREA ===== */}
        {type === "textarea" && (
          <textarea
            ref={ref} // ✅ important
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            defaultValue={defaultValue}
            required={required}
            readOnly={readOnly}
            rows={4}
            {...props}
            className={`w-full bg-white border border-[#e5e5e5] rounded-[5px] px-[15px] py-2.5 text-[14px] font-medium text-[#425466] outline-none focus:border-primary ${className}`}
          />
        )}

        {/* ===== PASSWORD ===== */}
        {type === "password" && (
          <div className="relative w-full">
            <input
              ref={ref} // ✅ important
              type={showPassword ? "text" : "password"}
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              defaultValue={defaultValue}
              required={required}
              readOnly={readOnly}
              {...props}
              className={`w-full bg-white border border-[#e5e5e5] rounded-[5px] h-[45px] px-[15px] pr-11 text-[14px] font-medium text-[#425466] outline-none focus:border-primary ${className}`}
            />

            {!readOnly && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6e6e6e] hover:text-primary"
              >
                {showPassword ? <Eye size={18} /> : <EyeClosed size={18} />}
              </button>
            )}
          </div>
        )}

        {/* ===== DEFAULT INPUT ===== */}
        {type !== "textarea" && type !== "password" && (
          <div className="relative">
            {Icon && (
              <Icon
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
            )}

            <input
              ref={ref} // ✅ important
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              defaultValue={defaultValue}
              required={required}
              readOnly={readOnly}
              {...props}
              className={`w-full bg-white border border-[#e5e5e5] rounded-[5px] h-[45px] text-[14px] font-medium text-[#425466] outline-none focus:border-primary
                ${Icon ? "pl-10 pr-4" : "px-[15px]"}
                ${className}
              `}
            />
          </div>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
