import { useForm, SubmitHandler } from "react-hook-form";

import plerdyLogo from "../../image/svg/plerdyLogo.svg";

import styles from "./ContactForm.module.scss";

type FormValues = {
  name: string;
  tel: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<FormValues>({
    // defaultValues: {
    //   tel: "+380",
    // },
  });

  const handleSubmitForm: SubmitHandler<FormValues> = ({ name, tel }): void => {
    console.log(name, tel);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleSubmitForm)}>
      <div className={styles.input__container}>
        <label className={styles.lable}>Name</label>
        <input
          className={styles.input}
          type="text"
          {...register("name", {
            required: "This is required",
            minLength: {
              value: 2,
              message: "Min length is 2",
            },
            maxLength: {
              value: 60,
              message: "Max length is 60",
            },
            pattern: {
              value:
                /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
              message: "Boris Johnson",
            },
          })}
          placeholder="Boris Johnson"
        />
        <p className={errors.name ? styles.error : styles.opacity}>
          {errors.name ? errors.name?.message : "message error"}
        </p>
      </div>

      <div className={styles.input__container}>
        <label className={styles.lable}>Lable</label>
        <input
          className={styles.input}
          type="tel"
          {...register("tel", {
            required: "This is required",
            pattern: {
              value: /^[+]{0,1}380([0-9]{9})$/,
              message: "+380 XX XXX XXXX",
            },
          })}
          placeholder="XX XXX XXXX"
        />
        <p className={errors.tel ? styles.error : styles.opacity}>
          {errors.tel ? errors.tel?.message : "message error"}
        </p>
      </div>

      <div className={styles.containerButton}>
        <button className={`${styles.button} ${styles.support}`} type="button">
          Support
        </button>
        <button className={`${styles.button}`} type="submit">
          Contact sales
        </button>
      </div>
      <div className={styles.policy}>
        <label className={styles.policyLable}>
          <input
            type="checkbox"
            className={styles.checkbox}
            name="topic"
            value="agreement"
            id="agreement"
          />
          <div className={styles.containerCech}>
            <span className={styles.cech}></span>
          </div>
          <div className={styles.policyLinkContainer}>
            By sending up? you agree to our{" "}
            <a className={styles.policyLink} href="1">
              Conditions
            </a>{" "}
            and{" "}
            <a className={styles.policyLink} href="1">
              Privacy Policy
            </a>
          </div>
        </label>
      </div>
      <div className={styles.cotainerLogo}>
        <img src={plerdyLogo} alt="plerdyLogo" />
        <p className={styles.textLogo}>
          Powered by{" "}
          <a
            className={styles.linkLogo}
            target="_blank"
            rel="noreferrer"
            href="https://www.plerdy.com/"
          >
            Plerdy
          </a>
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
