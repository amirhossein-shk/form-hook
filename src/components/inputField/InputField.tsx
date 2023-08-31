import * as React from "react";
import styles from "./Styles.module.scss";

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  type?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  value?: string;
}

export const InputField: React.FC<InputFieldProps> = (props) => {
  const { label, placeholder, type, name, onChange, errorMessage, value } = props;

  return (
    <>
      <div className={styles.inputField}>
        <label>{label}</label>
        <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
        {errorMessage && <div className={styles.error}>{errorMessage}</div>}
      </div>
    </>
  );
};
