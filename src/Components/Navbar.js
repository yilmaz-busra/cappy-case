import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
function Navbar() {
  return (
    <div className={styles.logo}>
      <Link to={"/"}>
        <img
          className={styles.lgimg}
          src="https://www.coca-cola.com/content/dam/onexp/tr/tr/brands/brands-sp/tr_cappy_brandlogo_180x339.png"
          alt=""
        />
      </Link>
    </div>
  );
}

export default Navbar;
