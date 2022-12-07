import React from "react";
import { useSwiper } from "swiper/react";

import left from "../../../image/svg/left.svg";

import styles from "./Button.module.scss";

const ButtonPrev: React.FC = () => {
  const swiper = useSwiper();
  return (
    <button className={styles.button} onClick={() => swiper.slidePrev()}>
      <img src={left} alt="left" />
    </button>
  );
};

export default ButtonPrev;
