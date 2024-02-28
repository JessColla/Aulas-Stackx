import React, { useState } from "react";

function MiniGame() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Mini Game de Contagem</h2>
      <p>Contagem:{count}</p>
      <button onClick={handleButtonClick}>Clique Aqui!</button>
    </div>
  );
}

export default MiniGame;
