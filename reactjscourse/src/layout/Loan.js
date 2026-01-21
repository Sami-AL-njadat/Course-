import { useState } from "react";

import Model from "./Model";
 import ComponantTest from "./ComponantTest";
import  loanFormContext from "./context/LoanForm";
 

export default function Loan() {
  const [inputsForm, setInputsForm] = useState({
    option: [
      "",
      "less than 500 jod",
      "less than 1000 jod",
      "less than 2500 jod",
    ],
    names: "",
    age: "",
    numberPhone: "",
    check: false,
    select: "",
    detales: {
      experance: "",
      company: "",
    },
  });

  const [isVisable, setIsVisable] = useState(false);
  const [errorMassage, setErrorMassge] = useState([]);
  const options = inputsForm.option.map((opt, index) => (
    <option key={index} value={opt}>
      {opt}
    </option>
  ));

  const btnsyb =
    inputsForm.names === "" ||
    inputsForm.age === "" ||
    inputsForm.select === "";

  function itsdone(e) {
    e.preventDefault();

    const ages = Number(inputsForm.age);
    const experance = Number(inputsForm.experance);

    let errors = [];

    if (ages < 18 || ages > 65) {
      errors = [...errors, "Age must be between 18 and 65"];
    }

    if (experance < 2) {
      errors = [
        ...errors,
        "Sorry, we only accept employees with 2 years of experience or less",
      ];
    }

    if (inputsForm.numberPhone.length < 10) {
      errors = [...errors, "The phone number must be at least 10 digits"];
    }

    if (errors.length > 0) {
      setErrorMassge(errors);
      setIsVisable(true); // show modal WITH errors
      return; // ⛔ STOP here
    }

    setErrorMassge(null);

    // Save data
    localStorage.setItem("names", inputsForm.names);
    localStorage.setItem("age", inputsForm.age);
    localStorage.setItem("check", inputsForm.check);
    localStorage.setItem("select", inputsForm.select);
    localStorage.setItem("experance", inputsForm.detales.experance);

    setIsVisable(true);

    setInputsForm({
      option: [
        "",
        "less than 500 jod",
        "less than 1000 jod",
        "less than 2500 jod",
      ],
      names: "",
      age: "",
      numberPhone: "",
      check: false,
      select: "",
    });
  }

  function messageHiddin() {
    setIsVisable(false);
  }
  // console.log("data", inputsForm);

  return (
    <>
      <div className="thehead">
        <div className="titels">
          <h2>Request the loan form sami inv company</h2>
          <p>This is the Loan component content.</p>
        </div>

        <div className="forms">
          <form onSubmit={itsdone}>
            The LOAN FORM
            <div className="inputtext">
              <label>Full Name:</label>
              <input
                type="text"
                value={inputsForm.names}
                onChange={(event) => {
                  setInputsForm({
                    ...inputsForm,
                    names: event.target.value,
                  });
                }}
              />
            </div>
            <loanFormContext.Provider
              value={{
                labelTitle: "Age:",
                age: inputsForm.age,
                setInputsForm,
              }}
            >
              <ComponantTest   />
            </loanFormContext.Provider>
            {/* <div className="inputtext">
              <label>Age:</label>
              <input
                type="number"
                value={inputsForm.age}
                onChange={(event) => {
                  setInputsForm({
                    ...inputsForm,
                    age: event.target.value,
                  });
                }}
              />
            </div> */}
            <div className="inputtext">
              <label>Phone Number:</label>
              <input
                type="number"
                value={inputsForm.numberPhone}
                onChange={(event) => {
                  setInputsForm({
                    ...inputsForm,
                    numberPhone: event.target.value,
                  });
                }}
              />
            </div>
            <div className="inputtext">
              <label>Are you employee ?</label>
              <input
                type="checkbox"
                checked={inputsForm.check}
                onChange={(event) => {
                  setInputsForm({
                    ...inputsForm,
                    check: event.target.checked,
                  });
                }}
              />

              {inputsForm.check === true && (
                <>
                  <input
                    placeholder="years of experance"
                    type="number"
                    value={inputsForm.detales.experance}
                    onChange={(event) => {
                      setInputsForm({
                        ...inputsForm,
                        detales: {
                          ...inputsForm.detales,
                          experance: event.target.value,
                        },
                      });
                    }}
                  />
                  <input
                    placeholder="company name"
                    type="text"
                    value={inputsForm.detales.company}
                    onChange={(event) => {
                      setInputsForm({
                        ...inputsForm,
                        detales: {
                          ...inputsForm.detales,

                          company: event.target.value,
                        },
                      });
                    }}
                  />
                </>
              )}
            </div>
            <div className="inputtext">
              <label>Select the amount ?</label>
              <select
                value={inputsForm.select}
                onChange={(event) => {
                  setInputsForm({
                    ...inputsForm,
                    select: event.target.value,
                  });
                }}
              >
                {options}
              </select>
            </div>
            <button
              type="submit"
              className={btnsyb ? "disabledbtnstyle" : ""}
              id="submitbtn"
            >
              Submit
            </button>
          </form>
        </div>
        {isVisable && (
          <Model
            error={errorMassage}
            show={isVisable}
            onClose={messageHiddin}
          />
        )}
      </div>
    </>
  );
}
