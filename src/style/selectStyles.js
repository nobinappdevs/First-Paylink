// // src/styles/reactSelectStyles.js
// export const reactSelectStyles = {
//   control: (base, state) => ({
//     ...base,
//     padding: "6px",
//     borderRadius: "12px",
//     border: state.isFocused
//       ? "2px solid #00000018"
//       : "2px solid #00000018",
//     boxShadow: state.isFocused
//       ? "0 0 0 2px rgba(16,185,129,0.2)"
//       : "none",
//     cursor: "pointer",
//     minHeight: "48px",
//   }),

//   option: (base, state) => ({
//     ...base,
//     backgroundColor: state.isFocused ? "#ecfdf5" : "#fff",
//     color: "#334155",
//     cursor: "pointer",
//   }),

//   placeholder: (base) => ({
//     ...base,
//     color: "#94a3b8",
//   }),

//   singleValue: (base) => ({
//     ...base,
//     color: "#334155",
//   }),
// };



// src/styles/reactSelectStyles.js

export const reactSelectStyles = {
  control: (base, state) => ({
    ...base,
    width: "100%",
    backgroundColor: "#ffffff",
    border: "1px solid #e5e5e5",
    borderRadius: "5px",
    minHeight: "45px",
    height: "45px",
    boxShadow: "none",
    cursor: "pointer",
    paddingLeft: "15px",
    fontSize: "14px",
    fontWeight: 500,
    color: "#425466",
    outline: "none",

    // focus state
    borderColor: state.isFocused ? "#5b39c9" : "#e5e5e5",

    "&:hover": {
      borderColor: "#5b39c9",
    },
  }),

  valueContainer: (base) => ({
    ...base,
    padding: "0", // react-select default padding remove
    height: "45px",
    display: "flex",
    alignItems: "center",
  }),

  input: (base) => ({
    ...base,
    margin: 0,
    padding: 0,
    color: "#425466",
    fontWeight: 500,
  }),

  placeholder: (base) => ({
    ...base,
    color: "#94a3b8",
    fontSize: "14px",
    fontWeight: 500,
  }),

  singleValue: (base) => ({
    ...base,
    color: "#425466",
    fontSize: "14px",
    fontWeight: 500,
  }),

  indicatorsContainer: (base) => ({
    ...base,
    height: "45px",
  }),

  dropdownIndicator: (base) => ({
    ...base,
    color: "#6e6e6e",

  }),

  indicatorSeparator: () => ({
    display: "none",
  }),

  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#f8f8f8" : "#ffffff",
    color: "#425466",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
  }),

  menu: (base) => ({
    ...base,
    borderRadius: "5px",
    border: "1px solid #e5e5e5",
    boxShadow: "none",
    overflow: "hidden",
  }),
};
