export default function Button({
  children,
  rightIcon,
  onClick,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative overflow-hidden group font-roboto
        flex items-center justify-center gap-2
        rounded-md text-white
        transition-all duration-300 ease-out cursor-pointer

        bg-secondery shadow-sm
        hover:shadow-sm hover:shadow-black/20

        hover:-translate-y-0.5 active:scale-95

        /* Responsive Size */
        px-4 py-2 text-sm
        md:px-6 md:py-[9.5px] md:text-base

        ${className}
      `}
    >
      {/* Shine Effect */}
      <span className="absolute top-0 -left-full w-1/2 h-full bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] group-hover:left-[120%] transition-all duration-1000 ease-in-out"></span>

      {/* Content */}
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
