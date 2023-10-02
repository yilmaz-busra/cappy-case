import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
function Share() {
  return (
    <div>
      <div>
        <Link>
          <img className="sharecappy" src="share1.png" alt="sharewithcappy" />
        </Link>
        <p>
          Hadi sen de şanslı Cappyler arasında yerini almak için bize katıl!
        </p>
      </div>
      <div className="style">
        <button className="btnstyle">Twitter</button>
        <button className="btnstyle">
          <BsInstagram />
        </button>
        <button className="btnstyle">Facebook</button>
      </div>
    </div>
  );
}

export default Share;
