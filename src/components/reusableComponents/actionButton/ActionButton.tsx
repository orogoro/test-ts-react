import React from "react";

import styles from "./ActionButton.module.scss";

interface ActionButtonProps {
  text: string;
  specificStyles: string;
  onActive: (value: boolean) => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  specificStyles,
  onActive,
}) => {
  return (
    <button
      className={`${styles.button} ${specificStyles}`}
      type="button"
      onClick={() => onActive(true)}
    >
      {text}
    </button>
  );
};

export default ActionButton;
