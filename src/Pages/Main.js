import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <Link to="/Show">
        <img className="cappymons" src="giris.jpg" alt="Cappy_Monster" />
      </Link>
      <div className="textstyle">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, error
          ipsum pariatur a eaque optio, adipisci magnam sunt et, laboriosam
          soluta nihil tenetur excepturi aliquam vero quo? Sint, non porro? Eos
          aliquam quia ducimus ipsum accusantium. Magnam temporibus, enim
          eveniet incidunt fuga sed doloribus dolore. Facilis, incidunt?
        </p>
      </div>
    </div>
  );
}

export default Main;
