import * as React from "react";
import styles from "./Styles.module.scss";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <div className={styles.footer}>Developed by AmirHossein Shakeri</div>
    </>
  );
};

export default Footer;
