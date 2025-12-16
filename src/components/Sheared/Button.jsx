export default function Button({
  children,
  size = "md",
  gradient = false,
  rightIcon,
  onClick,
  className = "",
}) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`
        relative overflow-hidden group font-roboto flex items-center justify-center gap-2 rounded-xl text-white 
        transition-all duration-300 ease-out cursor-pointer
        
        /* Background & Shadow */
        ${gradient 
          ? "bg-linear-to-r from-primary to-primary_light shadow-md shadow-primary/20" 
          : "bg-[#012C20] shadow-sm hover:shadow-lg hover:shadow-black/20"}
        
        /* Movement */
        hover:-translate-y-0.5 active:scale-95
        
        ${sizeClasses[size]} 
        ${className}
      `}
    >

      <span className="absolute top-0 -left-full w-1/2 h-full bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] group-hover:left-[120%] transition-all duration-1000 ease-in-out"></span>

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2 font-medium tracking-wide">
        {children}
        {rightIcon && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {rightIcon}
          </span>
        )}
      </span>
    </button>
  );
}