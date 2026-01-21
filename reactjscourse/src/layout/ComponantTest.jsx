import { useContext } from "react";
import  loanFormContext from "./context/LoanForm";

export default function ComponantTest({ inputsForm, setInputsForm }) {
const mycontext = useContext(loanFormContext);
 
   
    return (
       <div className="inputtext">
              <label>{mycontext.labelTitle}</label>
              <input
                type="number"
                value={mycontext.age}
               onChange={(e) => {
    mycontext.setInputsForm(prev => ({
      ...prev,
      age: e.target.value,
    }));
  }}
              />
            </div>
    )
}
