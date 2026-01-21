import { createContext } from "react";


  let loanFormContext = createContext({
    labelTitle:"",
    value:null,
    setInputsForm: () => {},

  });

export default loanFormContext;


