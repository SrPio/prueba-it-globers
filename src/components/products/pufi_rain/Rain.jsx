import React from "react";
import styles from "./Rain.module.css";

function Rain() {
  return (
    <div className={styles.rain}>
      <div className={styles.container_image}>
        <div className={styles.filter}>
          <button className={styles.btn_shop}>SHOP</button>
        </div>
      </div>
      <div className={styles.container_info}>
        <img loading="lazy" src="/assets/umbrella-pic2.png" alt="" />
        <h2>Pufi RAIN</h2>
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

export default Rain;
