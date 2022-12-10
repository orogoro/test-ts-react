import { useEffect } from "react";

import { ContactForm } from "../";

import modalFoto from "../../image/modalFotox1.png";
import modalFoto2 from "../../image/modalFotox2.png";
import close from "../../image/svg/close.svg";

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
        <img
          className={styles.imageModal}
          srcSet={`${modalFoto} 370w, ${modalFoto2} 740w`}
          // srcSet="
          //         ./Images/Desktop/Do1.jpg    370w,
          //         ./Images/Desktop/Do1@2x.jpg 740w
          //       "
          sizes="(min-width: 1200px) 370px, 100vw"
          src={modalFoto}
          alt="modalFoto"
        />
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
          <img className={styles.imgClose} src={close} alt="close" />
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
