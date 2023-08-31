import * as React from "react";
import styles from "./Styles.module.scss";
import UserForm from "../../components/controlledForms/userForm";
import SearchForm from "../../components/uncontrolledForms/searchForm";

export const Home: React.FC = () => {
  return (
    <>
      <div className={styles.form}>
        <UserForm />
        <SearchForm />
      </div>
    </>
  );
};
