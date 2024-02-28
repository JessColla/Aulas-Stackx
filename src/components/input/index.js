import React from "react";

function Input(props) {
  const { type, onChange, placeholder, className } = props;
  return (
    <input
      className={className}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;
