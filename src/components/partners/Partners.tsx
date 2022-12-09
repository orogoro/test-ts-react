import React from "react";

import anexTour from "../../image/svg/anexTour.svg";
import prom from "../../image/svg/prom.svg";
import subaru from "../../image/svg/subaru.svg";
import softServer from "../../image/svg/softServer.svg";
import ukrPoshta from "../../image/svg/ukrPoshta.svg";

import styles from "./Partners.module.scss";

const Partners: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Trusted by some of the world's largest enterprises
      </p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <img className={styles.img} src={softServer} alt="softServer" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={subaru} alt="subaru" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={anexTour} alt="anexTour" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={prom} alt="prom" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={ukrPoshta} alt="ukrPoshta" />
        </li>
      </ul>
    </div>
  );
};

export default Partners;
