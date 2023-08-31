import * as React from "react";
import { InputField } from "../components/inputField";
import * as yup from "yup";

const useForm = (formObj: any[], callback: (formValues: any) => void, uncontrolled?: boolean) => {
  const validationRules: yup.ObjectShape = {};
  formObj.forEach((formInput: { [key: string]: any }) => {
    validationRules[formInput?.name] = formInput.validationRule;
  });
  const schema = yup.object().shape(validationRules);

  type Schema = yup.InferType<typeof schema>;

  const [values, setValues] = React.useState<Schema>({});
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.persist();

      let name = event.target.name;
      let val = event.target.value;

      setValues({
        ...values,
        [name]: val,
      });
    },
    [values],
  );

  const onSubmit = React.useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      if (event) event.preventDefault();
      let formValues: Schema = {};

      if (!uncontrolled) {
        formValues = values;
      } else {
        if (event?.target instanceof Element) {
          const formInputs = event?.target?.querySelectorAll("input[name]");
          formInputs.forEach((element: any) => {
            formValues[element?.name] = element?.value;
          });
        }
      }

      try {
        const response: Schema = await schema.validate(formValues, { abortEarly: false });
        callback(response);
        setErrors({});
      } catch (error: any) {
        const schemaErrors: any = {};
        error.inner?.forEach((err: any) => {
          schemaErrors[err.path] = err.message;
        });
        setErrors(schemaErrors);
        console.log(schemaErrors);
      }
    },
    [values],
  );

  const renderFormInputs = () => (
    <form onSubmit={onSubmit}>
      {formObj.map((formInput: { [key: string]: string }, index) => (
        <InputField
          key={`${formInput.name}_${index}`}
          type={formInput.type}
          name={formInput.name}
          label={formInput.label}
          placeholder={formInput.placeholder}
          value={!uncontrolled ? formInput?.[formInput?.name] : undefined}
          onChange={!uncontrolled ? onChange : undefined}
          errorMessage={errors?.[formInput?.name]}
        />
      ))}
    </form>
  );

  return { renderFormInputs };
};

export default useForm;
