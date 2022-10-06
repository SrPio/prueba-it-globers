import React from "react";
import styles from "./Cart.module.css";

function Cart() {
  return (
    <div className={styles.cart}>
      <div className={styles.container_image}>
        <div className={styles.filter}>
          <button className={styles.btn_shop}>SHOP</button>
        </div>
      </div>
      <div className={styles.container_info}>
        <img loading="lazy" src="/assets/Shopping-Bag.png" alt="" />
        <h2>Pufi CART</h2>
        <div className={styles.separator}></div>
        <p>Descripción del producto. Este es un texto simulado</p>
        <div className={styles.btn_verMas}>
          <img loading="lazy" src="/assets/down-arrow.svg" alt="" />
          VER MAS
        </div>
      </div>
    </div>
  );
}

export default Cart;
