import React from "react";
import styles from "./Social.module.css";

function Social() {
  return (
    <div className={styles.social}>
      <div className={styles.container_titles}>
        <p>INSTAGRAM</p>
        <h3>#ESPUFI</h3>
      </div>
      <div className={styles.container_collage}>
        <img loading="lazy" src="/assets/umbrellas-pic.jpg" alt="" />
        <img loading="lazy" src="/assets/shopping-bag2.jpg" alt="" />
        <img loading="lazy" src="/assets/backpack-pic.jpg" alt="" />
        <img loading="lazy" src="/assets/puff-pic.jpg" alt="" />
        <img loading="lazy" src="/assets/bottle-pic.jpg" alt="" />
        <img loading="lazy" src="/assets/clothing.jpg" alt="" />
      </div>
    </div>
  );
}

export default Social;
