import React from "react";

function Input(props) {
  const { type, onChange, placeholder } = props;
  return <input type={type} onChange={onChange} placeholder={placeholder} />;
}

export default Input;
