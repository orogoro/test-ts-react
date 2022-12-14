import { useState } from "react";

import { ActionButton, ContactModal, MobileModalNav } from "../";

import logo from "../../image/svg/Logo.svg";
import mobileBurger from "../../image/svg/mobileBurger.svg";

import styles from "./Navigation.module.scss";

const Navigation: React.FC = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [onOpenMobileModal, setOnOpenMobileModal] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <a href="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </a>

      <nav className={styles.nav}>
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
        <a className={`${styles.singIn}`} href="3">
          Sing In
        </a>
        <ActionButton
          text="Contact sales"
          specificStyles={styles.contactSales}
          onActive={setModalActive}
        />
      </div>

      {/* mobile burger */}
      <div className={styles.burger}>
        <button
          className={styles.button}
          onClick={() => setOnOpenMobileModal(true)}
        >
          <img className={styles.imgB} src={mobileBurger} alt="mobileBurger" />
        </button>
      </div>

      <MobileModalNav
        active={onOpenMobileModal}
        onActive={setOnOpenMobileModal}
      />
      <ContactModal active={modalActive} onActive={setModalActive} />
    </header>
  );
};

export default Navigation;
