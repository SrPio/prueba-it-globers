import React from "react";
import styles from "./Nap.module.css";

function Nap() {
  return (
    <div className={styles.nap}>
      <div className={styles.container_image}>
        <div className={styles.filter}>
          <button className={styles.btn_shop}>SHOP</button>
        </div>
      </div>
      <div className={styles.container_info}>
        <img src="/assets/backpack.png" alt="" />
        <h2>Pufi NAP</h2>
        <div className={styles.separator}></div>
        <p>Descripción del producto. Este es un texto simulado</p>
        <div className={styles.btn_verMas}>
          <img src="/assets/down-arrow.svg" alt="" />
          VER MAS
        </div>
      </div>
    </div>
  );
}

export default Nap;
