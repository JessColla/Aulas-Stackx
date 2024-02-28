import React, { useState } from "react";
import Title from "../title";
import ImagePlans from "../imagePlans";
import Button from "../button";
import Modal from "../modal";
import Register from "../register";
import Values from "../values";
import sesi from "../../img/sesi.png";
import sesi2 from "../../img/sesi2.png";
import sesi3 from "../../img/sesi3.png";
import "./index.css";

const listItems = [
  {
    title: "Combo 1",
    src: sesi,
    alt: "Descrição de imagem",
    value: "99,90",
  },
  {
    title: "Combo 2",
    src: sesi2,
    alt: "Descrição de imagem",
    value: "119,90",
  },
  {
    title: "Combo 3",
    src: sesi3,
    alt: "Descrição de imagem",
    value: "159,90",
  },
];

function PlansAndPrices() {
  const [selectedCombo, setSeletedCombo] = useState(null);

  const handleOpenModal = (index) => {
    setSeletedCombo(index);
  };

  const handleCloseModal = () => {
    setSeletedCombo(null);
  };

  const handlePurchase = () => {
    alert(
      `Cadastro para o Combo ${
        selectedCombo + 1
      } realizado com sucesso, estraremos em contato em 24h
      `
    );
    handleCloseModal();
  };

  return (
    <div className="plansAndPrices">
      {listItems.map(function (item, index) {
        return (
          <div>
            <div className="plansContainer">
              <Title className="title" title={item.title} />
              <ImagePlans src={item.src} alt={item.alt} />
              <Values className="values" value={item.value} />
            </div>
            <div className="modal">
              <Button
                className="buttonBuy"
                onClick={() => handleOpenModal(index)}
                text="Comprar"
              />
              <Modal
                onClose={handleCloseModal}
                isOpen={selectedCombo === index}
              >
                <Register />
                <Button
                  className="buttonRegister"
                  onClick={handlePurchase}
                  text="Cadastrar"
                />
              </Modal>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PlansAndPrices;
