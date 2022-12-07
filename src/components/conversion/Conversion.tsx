import React from "react";

import { ActionButton } from "../";

import styles from "./Conversion.module.scss";

const Conversion: React.FC = () => {
  return (
    <div className={styles.container}>
      <ActionButton
        text="Boost my website conversion"
        specificStyles={styles.button}
      />
      <p className={styles.text}>
        So, it’s high time for you to stop losing 99% of potential clients due
        to being unaware of your website users’ behavior patterns and needs.
      </p>
    </div>
  );
};

export default Conversion;
