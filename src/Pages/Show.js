import React from "react";
import { Link } from "react-router-dom";

function Show() {
  return (
    <div>
      <div className="">
        <Link to="/End">
          <img className="mikros " src="incele.png" alt="mikroskop" />
        </Link>
        <div>
          İşte senin için bir mikroskop! Lezzet ve vitamin dolu yararlı bir
          canavar olduğumu anlayabilmek için içerik listemi oluşturuyorum.
        </div>
      </div>
    </div>
  );
}

export default Show;
