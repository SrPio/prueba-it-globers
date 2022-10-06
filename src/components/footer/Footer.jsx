import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container_top}>
        <div className={styles.container_logo}>
          <img loading="lazy" src="/assets/logo.svg" alt="" />
        </div>
        <div className={styles.container_products}>
          <h2>PUFI RAIN</h2>
          <h2>PUFI PUFF</h2>
          <h2>PUFI CART</h2>
          <h2>PUFI NAP</h2>
        </div>
        <div className={styles.container_options}>
          <h2>CONTACTO</h2>
          <h2>AYUDA</h2>
          <h2>CÓMO COMPRAR</h2>
          <h2>TÉRMINOS & CONDICIONES</h2>
        </div>
        <div className={styles.container_warranty}>
          <h2>COMPRA 100% SEGURA</h2>
          <img loading="lazy" src="/assets/warranty-pic.jpg" alt="" />
        </div>
        <div className={styles.container_social}>
          <h2>SEGUINOS EN </h2>
          <img
            loading="lazy"
            src="/assets/facebook-icon.svg"
            alt="icon-facebook"
          />
          <img
            loading="lazy"
            src="/assets/twitter-icon.svg"
            alt="icon-twitter"
          />
          <img
            loading="lazy"
            src="/assets/instagram-icon.svg"
            alt="icon-instagram"
          />
        </div>
      </div>
      <div className={styles.container_bottom}>
        <h2>PUFI Copyright 2017 - Todos los derechos reservados</h2>
        <img loading="lazy" src="/assets/brand-pic.jpg" alt="" />
      </div>
    </div>
  );
}

export default Footer;
