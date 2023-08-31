
# React Form Manager Custom Hook

This app is developed for managing forms in react.

## Installation
For the installation process, you need to install node.js on your system.
if you have not any node version installed please see this link for installation: [nodejs](https://nodejs.org/)

```bash
npm install
```
After completing the installation of all packages insert below command:
```bash
npm start
```
If all steps done completely you should see app is running on localhost:3000
    
## Deployment

To deploy this project run

```bash
  npm run build
```

## Technologies Used
`html`, `scss`, `css modules`, `yup`, `javascript`, `react`, `typescript`, `react-router-dom`

## Features

- Managing controlled forms
- Managing uncontrolled forms


## Usage/Examples

to create a form you need a list of form input object(s), for example:

```javascript
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
]
```

for validation, this custom hook uses from yup library, also for validation you need to write some yup commands in validationRule propery.

after define input objects, you need to call useForm custom hook in your component:

```javascript
const { renderFormInputs } = useForm(userFormObj, handleSubmit);
return <>{renderFormInputs()}</>;
```

if you want to make your form uncontrolled, then you must pass a true boolean value in end of useForm() parameters:

```javascript
const { renderFormInputs } = useForm(userFormObj, handleSubmit, true);
return <>{renderFormInputs()}</>;
```

## Author

- AmirHossein

