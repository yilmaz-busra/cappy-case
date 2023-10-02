import React from "react";
import { Link } from "react-router-dom";

function End() {
  return (
    <div>
      <div>
        <Link to="/Share">
          <img className="cappyorgan" src="orga.png" alt="Cappy_organizma" />
        </Link>
      </div>
      <span>Lorem ipsum dolor sit amet.</span>
    </div>
  );
}

export default End;
