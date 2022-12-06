import React from "react";

import logo from "../../image/svg/Logo.svg";

import styles from "./Navigation.module.scss";

const Navigation: React.FC = () => {
  return (
    <header className={styles.header}>
      <a href="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </a>

      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a className={styles.link} href="1">
              Pricing
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="2">
              Use Cases
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="3">
              Book a Demo
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.containerLink}>
        <a className={`${styles.button} ${styles.singIn}`} href="3">
          Sing In
        </a>
        <a className={`${styles.button} ${styles.contactSales}`} href="3">
          Contact sales
        </a>
      </div>
    </header>
  );
};

export default Navigation;
