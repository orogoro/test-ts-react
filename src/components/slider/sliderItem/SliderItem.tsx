import React from "react";

import styles from "./SliderItem.module.scss";

interface SliderItemProps {
  title: string;
  text: string;
  sequence: number;
}

const SliderItem: React.FC<SliderItemProps> = ({ title, text, sequence }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
      <div className={styles.circle}>
        <span className={styles.span}>{sequence}</span>
      </div>
    </div>
  );
};

export default SliderItem;
