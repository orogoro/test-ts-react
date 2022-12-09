import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import InputMask from "react-input-mask";
import Select from "react-select";

import plerdyLogo from "../../image/svg/plerdyLogo.svg";
import flagUA from "../../image/svg/flagUA.svg";
import flagFrance from "../../image/flagFrance.png";
import flagMavritania from "../../image/flagMavritania.png";

import styles from "./ContactForm.module.scss";

type FormValues = {
  name: string;
  tel: string;
  topic: boolean;
};

const ContactForm: React.FC = () => {
  const [countryNumber, setCountryNumber] = useState<string>("380");
  const [numberValue, setNumberValue] = useState<string>("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const options = [
    {
      value: "380",
      label: (
        <div className={styles.containerImg}>
          <img className={styles.imgSelect} src={flagUA} alt="flagUA" /> +380
        </div>
      ),
    },
    {
      value: "222",
      label: (
        <div className={styles.containerImg}>
          <img
            className={styles.imgSelect}
            src={flagMavritania}
            alt="flagMavritania"
          />
          +222
        </div>
      ),
    },
    {
      value: "333",
      label: (
        <div className={styles.containerImg}>
          <img className={styles.imgSelect} src={flagFrance} alt="flagFrance" />
          +333
        </div>
      ),
    },
  ];

  const onChange = (data: any | null): void => {
    const { value }: { value: string } = data;
    setCountryNumber(value);
  };

  const handleSubmitForm: SubmitHandler<FormValues> = ({
    name,
    tel,
    topic,
  }): void => {
    const data = {
      name,
      tel: `${countryNumber}${tel}`,
    };

    if (topic === false) {
      return;
    }
    console.log(data);
    setNumberValue("");
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleSubmitForm)}>
      <div className={styles.input__container}>
        <label className={styles.lable}>Name</label>
        <input
          className={`${styles.input} ${errors.name ? styles.errorInput : ""}`}
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
        <InputMask
          className={`${styles.input} ${styles.tel} ${
            errors.tel ? styles.errorInput : ""
          }`}
          mask={`99 999 9999`}
          value={numberValue}
          type="tel"
          {...register("tel", {
            onChange: (e) => {
              setNumberValue(e.target.value);
            },
            required: "This is required",
            pattern: {
              value:
                /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/,
              message: `+${countryNumber} XX XXX XXXX`,
            },
          })}
          placeholder="XX XXX XXXX"
        />
        <p className={errors.tel ? styles.error : styles.opacity}>
          {errors.tel ? errors.tel?.message : "message error"}
        </p>
        <div className={styles.position}>
          <Select
            className={styles.select}
            defaultValue={options[0]}
            options={options}
            onChange={onChange}
          />
        </div>
      </div>

      <div className={styles.containerButton}>
        <a
          className={`${styles.button} ${styles.support}`}
          href="tel:000000000"
        >
          Support
        </a>
        <button className={`${styles.button}`} type="submit">
          Contact sales
        </button>
      </div>
      <div className={styles.policy}>
        <label className={styles.policyLable}>
          <input
            type="checkbox"
            className={styles.checkbox}
            id="agreement"
            {...register("topic", {
              required: "This is required",
            })}
          />
          <div className={styles.containerCech}>
            <span
              className={`${styles.cech} ${
                errors.topic ? styles.errorTopic : ""
              }`}
            ></span>
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
        <img className={styles.imageLogo} src={plerdyLogo} alt="plerdyLogo" />
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
