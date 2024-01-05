import { createContext } from "react";

const FormContext = createContext({
  changeProjectName: () => { },
  changeProjectLink: () => { },
  changeDescription: () => { },
  submitForm: () => { }
})



export default FormContext