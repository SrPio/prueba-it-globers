import React from "react";
import styles from "./Newsletter.module.css";

function Newsletter() {
  return (
    <div className={styles.newsletter}>
      <div className={styles.container_titles}>
        <p>NEWSLETTER</p>
        <h3>SUSCRIBITE</h3>
        <h2>Y enterarte de todas las novedades</h2>
      </div>
      <div>
        <form>
          <div className={styles.conatiner_input}>
            <input type="email" placeholder="Ingresa tu email" />
            <button className={styles.btn_submit}>
              <img src="/assets/right-arrow.svg" alt="" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
