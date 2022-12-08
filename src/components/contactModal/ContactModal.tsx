import { useEffect } from "react";

import { ContactForm } from "../";

import modalFoto from "../../image/modalFotox1.png";

import styles from "./ContactModal.module.scss";

interface ContactModalProps {
  active: boolean;
  onActive: (value: boolean) => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ active, onActive }) => {
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
        <div>
          <img src={modalFoto} alt="modalFoto" />
        </div>
        <div className={styles.containerContent}>
          <h1 className={styles.title}>
            How to do a Website Audit to Improve SEO & Conversions
          </h1>
          <p className={styles.text}>
            You will get an SMS with a link to the webinar
          </p>
          <ContactForm />
        </div>

        <button className={styles.button} onClick={() => onActive(false)}>
          {/* <img className={styles.imgClose} src={close} alt="close" /> */}
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
