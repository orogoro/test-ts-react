import { useEffect } from "react";

import close from "../../image/svg/close.svg";
import logo from "../../image/svg/Logo.svg";

import styles from "./MobileModalNav.module.scss";

interface MobileModalNavProps {
  active: boolean;
  onActive: (value: boolean) => void;
}

const MobileModalNav: React.FC<MobileModalNavProps> = ({
  active,
  onActive,
}) => {
  useEffect(() => {
    if (active) {
      document.body.classList.add(styles.bodyScroll);
      return;
    }
    document.body.classList.remove(styles.bodyScroll);
  }, [active]);

  return (
    <div
      className={styles.container + " " + (active ? styles.active : "")}
      onClick={() => onActive(false)}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.containerLogo}>
          <a href="/">
            <img className={styles.logo} src={logo} alt="logo" />
          </a>
        </div>
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
        </div>

        <button className={styles.button} onClick={() => onActive(false)}>
          <img className={styles.imgClose} src={close} alt="close" />
        </button>
      </div>
    </div>
  );
};

export default MobileModalNav;
