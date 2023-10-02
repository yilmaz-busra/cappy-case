import React from "react";
import { Link } from "react-router-dom";
function Share() {
  return (
    <div>
      <div>
        <Link>
          <img className="sharecappy" src="share.png" alt="sharewithcappy" />
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          accusamus quasi numquam mollitia eos architecto.
        </p>
      </div>
      <div className="style">
        <button className="btnstyle">Twitter</button>
        <button className="btnstyle">Instagram</button>
        <button className="btnstyle">Facebook</button>
      </div>
    </div>
  );
}

export default Share;
