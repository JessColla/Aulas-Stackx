import Title from "../title";
import ImagePlans from "../imagePlans";
import Button from "../button";
import Input from "../input";
import sesi from "../../img/sesi.png";
import sesi2 from "../../img/sesi2.png";
import sesi3 from "../../img/sesi3.png";
import "./index.css";

const listItems = [
  {
    title: "Combo 1",
    src: sesi,
    alt: "Descrição de imagem",
  },
  {
    title: "Combo 2",
    src: sesi2,
    alt: "Descrição de imagem",
  },
  {
    title: "Combo 3",
    src: sesi3,
    alt: "Descrição de imagem",
  },
];

function PlansAndPrices() {
  const handleOnClick = () => {
    alert("Botão Clicado");
  };

  const handleShowMessage = (event) => {
    alert(`Letra alterada para: ${event.target.value}`);
  };

  return (
    <div className="plansAndPrices">
      {listItems.map(function (item) {
        return (
          <div>
            <div className="plansContainer">
              <Title className="title" title={item.title} />
              <ImagePlans src={item.src} alt={item.alt} />
            </div>
            <div className="buttonBuy">
              <Button onClick={handleOnClick} text="Comprar" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PlansAndPrices;
