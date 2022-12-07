import { useState } from "react";

import { ActionButton, ContactModal } from "../";

import styles from "./Conversion.module.scss";

const Conversion: React.FC = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <ActionButton
        text="Boost my website conversion"
        specificStyles={styles.button}
        onActive={setModalActive}
      />
      <p className={styles.text}>
        So, it’s high time for you to stop losing 99% of potential clients due
        to being unaware of your website users’ behavior patterns and needs.
      </p>
      <ContactModal active={modalActive} onActive={setModalActive} />
    </div>
  );
};

export default Conversion;
