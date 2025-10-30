import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.copy}>© 2025 LiftlyApp.</p>
      <p>Desenvolvido por Leonardo Baestero.</p>
    </div>
  );
};

export default Footer;
