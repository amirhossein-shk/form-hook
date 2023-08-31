import * as React from "react";
import * as yup from "yup";
import useForm from "../../hooks/useForm";

interface UserFormTypes {
  fullName?: string;
  email?: string;
  age?: number;
  password?: string;
  confirmPassword?: string;
}

const userFormObj = [
  {
    type: "text",
    name: "fullName",
    label: "Full Name",
    placeholder: "Full Name",
    validationRule: yup.string().required(),
  },
  {
    type: "text",
    name: "email",
    label: "Email",
    placeholder: "Email",
    validationRule: yup.string().email().required(),
  },
  {
    type: "number",
    name: "age",
    label: "Age",
    placeholder: "Age",
    validationRule: yup.number().positive().integer().min(18),
  },
  {
    type: "password",
    name: "password",
    label: "Password",
    placeholder: "Password",
    validationRule: yup.string().min(4).max(20).required(),
  },
  {
    type: "password",
    name: "confirmPassword",
    label: "Confirm Password",
    placeholder: "Confirm Password",
    validationRule: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords Don't Match")
      .required(),
  },
  {
    type: "submit",
    value: "submit",
  },
];

const UserForm: React.FC = () => {
  const handleSubmit = (formValues: UserFormTypes) => {
    console.log("Form Values ", formValues);
  };

  const { renderFormInputs } = useForm(userFormObj, handleSubmit);
  return (
    <>
      <div>Controlled Form:</div>
      <div>{renderFormInputs()}</div>
    </>
  );
};

export default UserForm;
