import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.Navbar}>
      <img loading="lazy" src="/assets/logo.svg" alt="logo" />
      <div className={styles.container_options}>
        <div>
          <img loading="lazy" src="/assets/bean.svg" alt="img PUFI PUFF" />
          <p>PUFI PUFF</p>
        </div>
        <div>
          <img loading="lazy" src="/assets/umbrella.svg" alt="img PUFI RAIN" />
          <p>PUFI RAIN</p>
        </div>
        <div>
          <img
            loading="lazy"
            src="/assets/shopping-bag.svg"
            alt="img PUFI CART"
          />
          <p>PUFI CART</p>
        </div>
        <div>
          <img loading="lazy" src="/assets/backpack.svg" alt="img PUFI NAP" />
          <p>PUFI NAP</p>
        </div>
      </div>
      <div className={styles.container_acount_options}>
        <div>
          <p>MI CUENTA</p>
          <img
            loading="lazy"
            src="/assets/down-arrow-white.svg"
            alt="img down arrow"
          />
        </div>
        <div>
          <p>MI COMPRA</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
