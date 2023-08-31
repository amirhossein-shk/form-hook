import * as React from "react";
import styles from "./Styles.module.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>React Form Manager Custom Hook</div>
      </div>
    </>
  );
};

export default Header;
