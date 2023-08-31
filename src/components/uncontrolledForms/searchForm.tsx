import * as React from "react";
import * as yup from "yup";
import useForm from "../../hooks/useForm";

interface SearchFormTypes {
  search?: string;
}

const searchFormObj = [
  {
    type: "text",
    name: "search",
    label: "Search",
    placeholder: "Search",
    validationRule: yup.string().required().min(3),
  },
  {
    type: "submit",
    value: "submit",
  },
];

const SearchForm: React.FC = () => {
  const handleSubmit = (formValues: SearchFormTypes) => {
    console.log("Form Values ", formValues);
  };

  const { renderFormInputs } = useForm(searchFormObj, handleSubmit, true);
  return <>{renderFormInputs()}</>;
};

export default SearchForm;
