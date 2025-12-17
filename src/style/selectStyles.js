// src/styles/reactSelectStyles.js
export const reactSelectStyles = {
  control: (base, state) => ({
    ...base,
    padding: "6px",
    borderRadius: "12px",
    border: state.isFocused
      ? "2px solid #00000018"
      : "2px solid #00000018",
    boxShadow: state.isFocused
      ? "0 0 0 2px rgba(16,185,129,0.2)"
      : "none",
    cursor: "pointer",
    minHeight: "48px",
  }),

  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#ecfdf5" : "#fff",
    color: "#334155",
    cursor: "pointer",
  }),

  placeholder: (base) => ({
    ...base,
    color: "#94a3b8",
  }),

  singleValue: (base) => ({
    ...base,
    color: "#334155",
  }),
};
