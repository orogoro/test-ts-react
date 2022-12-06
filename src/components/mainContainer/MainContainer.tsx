import * as React from "react";

import styles from "./MainContainer.module.scss";

interface AuxProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<AuxProps> = ({ children }) => {
  return <div className={styles.main}>{children}</div>;
};

export default MainContainer;
