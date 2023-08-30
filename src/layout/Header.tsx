import * as React from "react";
import styles from "./Styles.module.scss";
import { ReactComponent as SnappIcon } from "../assets/images/snappTextLogo.svg";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <SnappIcon />
        </div>
      </div>
    </>
  );
};

export default Header;
