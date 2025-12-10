

export default function Button({
  children,
  size = "md",
  gradient = false,
  rightIcon = null,
  onClick,
}) {
  const sizeStyles = {
    sm: { padding: "6px 12px", fontSize: "14px" },
    md: { padding: "10px 18px", fontSize: "16px" },
    lg: { padding: "14px 24px", fontSize: "18px" },
  };

  return (
    <button
    className="font-roboto"
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px", 
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        color: "#fff",

        background: gradient
          ? `linear-gradient(90deg, var(--color-primary), var(--color-primary_light))`
          : "#012C20",

        ...sizeStyles[size],
      }}
    >
      {children}

      {rightIcon && (
        <span style={{ display: "flex", alignItems: "center" }}>
          {rightIcon}
        </span>
      )}
    </button>
  );
}
