import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <h1>ESTÁR CÓMODO, NUNCA FUE TAN FÁCIL.</h1>
      <button className={styles.btn_shop_home}>SHOP</button>
    </div>
  );
}

export default Home;
