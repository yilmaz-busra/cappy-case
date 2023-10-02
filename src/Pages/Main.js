import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <Link to="/Show">
        <img className="cappymons" src="ayarlicappp.png" alt="Cappy_Monster" />
      </Link>
      <div className="textstyle">
        <div> BU CANAVAR BAŞKA CANAVAR!</div>
        <p>
          Merhaba! Ben Happy Cappy Canavarı. Seninle karşılaştığım için oldukça
          mutluyum! Organik meyvelerden bir araya getirilen Cappy meyve
          sularının lezzet ve vitamin dolu meyve posasıyım. Her 100 kutuda 1 kez
          görülüyorum. Beni yakından incelemek için devam edebilirsin.
        </p>
      </div>
    </div>
  );
}

export default Main;
