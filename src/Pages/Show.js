import React from "react";
import { Link } from "react-router-dom";

function Show() {
  return (
    <div>
      <div className="duzen1">
        <Link to="/End">
          <img className="mikros " src="mikro.png" alt="mikroskop" />
        </Link>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis,
          quos quasi? Enim at, alias sequi expedita magnam eos libero sit
          aliquid nihil quia esse inventore tempor.
        </span>
      </div>
    </div>
  );
}

export default Show;
