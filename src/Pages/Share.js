import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
function Share() {
  return (
    <div>
      <div>
        <Link className="img-container">
          <img className="sharecappy" src="share1.png" alt="sharewithcappy" />
        </Link>
        <p className="textContentStyle">
          Hadi sen de şanslı Cappyler arasında yerini almak için bize katıl!
        </p>
      </div>
      <div className="style">
        <Link className="btnstyle">
          <BsTwitter />
        </Link>
        <Link className="btnstyle">
          <BsInstagram />
        </Link>
        <Link className="btnstyle">
          <BsFacebook />
        </Link>
      </div>
    </div>
  );
}

export default Share;
