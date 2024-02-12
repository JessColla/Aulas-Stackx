import Title from "../title";
import ImagePlans from "../imagePlans";
import Button from "../button";
import Input from "../input";
import sesi from "../../img/sesi.png";
import sesi2 from "../../img/sesi2.png";
import sesi3 from "../../img/sesi3.png";

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
    <div>
      {listItems.map(function (item) {
        return (
          <div>
            <Title title={item.title} />
            <ImagePlans src={item.src} alt={item.alt} />
            <Button onClick={handleOnClick} text="Comprar" />
            <Input
              type="text"
              onChange={handleShowMessage}
              planceholder="Digite uma letra"
            />
          </div>
        );
      })}
    </div>
  );
}

export default PlansAndPrices;
