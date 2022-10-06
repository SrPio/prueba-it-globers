import React from "react";
import styles from "./Puff.module.css";

function Puff() {
  return (
    <div className={styles.puff}>
      <div className={styles.container_image}>
        <div className={styles.filter}>
          <button className={styles.btn_shop}>SHOP</button>
        </div>
      </div>
      <div className={styles.container_info}>
        <img loading="lazy" src="/assets/puff.png" alt="" />
        <h2>Pufi PUFF</h2>
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

export default Puff;
