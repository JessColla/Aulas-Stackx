import React from "react";
import Imput from "../input";
import Button from "../button";

function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Formulário enviado");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Imput type="text" placeholder="Nome" />
        <Imput type="email" placeholder="e-mail" />
        <Button text="Cadastrar" />
      </form>
    </div>
  );
}

export default Register;
