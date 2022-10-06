import React from "react";
import styles from "./Newsletter.module.css";
import { useForm, ValidationError } from "@formspree/react";

function Newsletter() {
  const [state, handleSubmit] = useForm("xaykqdlb");
  if (state.succeeded) {
    return (
      <div className={styles.container_alerta_subs}>
        <h2 className={styles.alerta_subs}>
          Tu correo ha sido registrado con éxito. ¡Gracias por suscribirte!
        </h2>
      </div>
    );
  }
  return (
    <div className={styles.newsletter}>
      <div className={styles.container_titles}>
        <p>NEWSLETTER</p>
        <h3>SUSCRIBITE</h3>
        <h2>Y enterarte de todas las novedades</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className={styles.conatiner_input}>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Ingresa tu email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <button
              className={styles.btn_submit}
              type="submit"
              disabled={state.submitting}
            >
              <img loading="lazy" src="/assets/right-arrow.svg" alt="" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
