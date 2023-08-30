import * as React from "react";
import useForm from "../../hooks/useForm";
import * as yup from "yup";
import { InputField } from "../../components/inputField";

const userSchema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().min(18),
  password: yup.string().min(4).max(20).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords Don't Match")
    .required(),
});

export type UserSchema = yup.InferType<typeof userSchema>;

export const Home: React.FC = () => {
  const handleSubmit = async (formValues: any) => {
    try {
      const user = await userSchema.validate(formValues, { abortEarly: false });
      console.log("Form Values ", user);
    } catch (error: any) {
      const schemaErrors = error.inner?.map((err: any) => {
        return { field: err.path, message: err.message };
      });
      console.log(schemaErrors);
    }
  };

  const { values, onChange, onSubmit } = useForm(handleSubmit);

  const formObj = [
    {
      type: "text",
      name: "fullName",
      label: "Full Name",
      placeholder: "Full Name",
      value: values?.fullName,
    },
    {
      type: "text",
      name: "email",
      label: "Email",
      placeholder: "Email",
      value: values?.email,
    },
    {
      type: "number",
      name: "age",
      label: "Age",
      placeholder: "Age",
      value: values?.age,
    },
    {
      type: "password",
      name: "password",
      label: "Password",
      placeholder: "Password",
      value: values?.password,
    },
    {
      type: "password",
      name: "confirmPassword",
      label: "Confirm Password",
      placeholder: "Confirm Password",
      value: values?.confirmPassword,
    },
    {
      type: "submit",
      value: "submit",
    },
  ];

  return (
    <div>
      Controlled Form:
      <form onSubmit={onSubmit}>
        {formObj.map((formInput) => (
          <InputField
            type={formInput.type}
            name={formInput.name}
            placeholder={formInput.placeholder}
            value={formInput.value}
            onChange={onChange}
          />
        ))}
      </form>
    </div>
  );
};
