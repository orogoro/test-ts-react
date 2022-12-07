import React from "react";

import styles from "./ActionButton.module.scss";

interface ActionButtonProps {
  text: string;
  specificStyles: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  specificStyles,
}) => {
  return (
    <button className={`${styles.button} ${specificStyles}`} type="button">
      {text}
    </button>
  );
};

export default ActionButton;
