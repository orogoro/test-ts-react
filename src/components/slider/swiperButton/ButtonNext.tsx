import React from "react";
import { useSwiper } from "swiper/react";

import right from "../../../image/svg/right.svg";

import styles from "./Button.module.scss";

const ButtonNext: React.FC = () => {
  const swiper = useSwiper();
  return (
    <button className={styles.button} onClick={() => swiper.slideNext()}>
      <img src={right} alt="right" />
    </button>
  );
};

export default ButtonNext;
