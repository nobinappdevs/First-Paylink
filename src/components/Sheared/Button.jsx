export default function Button({
  children,
  size = "md",
  gradient = false,
  rightIcon,
  onClick,
  className = "",
}) {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-7 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`font-roboto flex items-center cursor-pointer gap-2 rounded-xl text-white transition-all duration-200 
        ${gradient ? "bg-linear-to-r from-primary to-primary_light" : "bg-[#012C20]"}
        ${sizeClasses[size]} 
        ${className}
      `}
    >
      {children}
      {rightIcon && <span className="flex">{rightIcon}</span>}
    </button>
  );
}
