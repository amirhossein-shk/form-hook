import * as React from "react";

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  type?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  isValid?: boolean;
  value?: string;
}

export const InputField: React.FC<InputFieldProps> = (props) => {
  const { label, placeholder, type, name, onChange, errorMessage, isValid, value } = props;
  return (
    <>
      <div>
        <label>{label}</label>
        <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
        {errorMessage && !isValid && <span className="error">{errorMessage}</span>}
      </div>
    </>
  );
};
