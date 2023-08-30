import * as React from "react";
import styles from "./Styles.module.scss";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface MainLayoutProps {}

export const MainLayout: React.FunctionComponent<MainLayoutProps> = () => {
  return (
    <>
      <Header />
      <div className={styles.mainContent}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
