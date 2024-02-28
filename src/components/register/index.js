import React from "react";
import Input from "../input";
import "./index.css";

function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Formulário Enviado");
  };
  return (
    <div className="registerContainer">
      <form onSubmit={handleSubmit}>
        <Input className="registerInput" type="text" placeholder="Nome" />
        <Input className="registerInput" type="email" placeholder="E-mail" />
      </form>
    </div>
  );
}

export default Register;
