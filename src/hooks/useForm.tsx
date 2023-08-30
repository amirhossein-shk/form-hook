import * as React from "react";
import { UserSchema } from "../pages/home/home";

const useForm = (callback: (value?: any) => void, formValues?: UserSchema, formObj?: any) => {
  const [values, setValues] = React.useState<any>({});

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();

    let name = event.target.name;
    let val = event.target.value;

    setValues({
      ...values,
      [name]: val,
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement> | any) => {
    if (event) event.preventDefault();

    if (Object.keys(values).length) {
      callback();
    } else {
      const formInputs = event?.target?.querySelectorAll("input[name]");
      let uncontrolledValues: any = {};
      formInputs.forEach((element: any) => {
        uncontrolledValues[element.name] = element.value;
      });
      callback(uncontrolledValues);
    }
  };

  return {
    values,
    onChange,
    onSubmit,
  };
};

export default useForm;
