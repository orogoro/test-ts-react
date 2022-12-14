import { useState } from "react";

import { ActionButton, Partners, ContactModal } from "../";

import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);

  return (
    <div className={styles.hero}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          How to do a Website Audit to <br className={styles.br} /> Improve SEO
          & Conversions
        </h1>
        <p className={styles.textHero}>
          Usability auditing with the Plerdy tool is a comprehensive expert
          assessment of your website based on a profound study of user behavior
          registered on it. Plerdy will provide you with crucial data based on
          which you will be able to run an efficient usability audit of your
          website, identify and fix SEO issues, and subsequently lead it to
          higher positions in search.
        </p>
        <p className={styles.secondaryText}>
          Thus, you'll compile a list of flaws in your website interface,
          navigation, and conversion path that can eventually affect its micro
          and macro conversion rates.
        </p>
        <div className={styles.containerActionButton}>
          <ActionButton
            text="Run the Plerdy tool"
            specificStyles={styles.buttonHero}
            onActive={setModalActive}
          />
        </div>
        <Partners />
      </div>
      <div className={styles.imagesContainer}>
        <i></i>
        <i></i>
        <i></i>
      </div>
      <ContactModal active={modalActive} onActive={setModalActive} />
    </div>
  );
};

export default Hero;
