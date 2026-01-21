import { use, useState } from "react";

export default function Tests() {
  let orignal = "This is a test component named Tests.";
  let newtext = "This is a test change 🤣.";

  const [ps, setUsePs] = useState(orignal);
  const [inp, setUseinp] = useState("");

  const [inputsForm, setInputsForm] = useState({
    names: "",
    email: "",
    age: "",
    textArea: "",
    check: false,
    select: "",
  });

  function changes() {
    ps === orignal ? setUsePs(newtext) : setUsePs(orignal);
  }

  function updates(e) {
    setUseinp(e.target.value);

    console.log(e.target.value);
  }

  let savedNames = localStorage.getItem("names") || "";
  let savedEmail = localStorage.getItem("email") || "";
  let savedAge = localStorage.getItem("age") || "";
  let check = localStorage.getItem("check") || "";
  let select = localStorage.getItem("select") || "";

  return (
    <>
      <button onClick={changes}>Test Button</button>
      <p>{ps}</p>
      <div>
        <label>input</label>
        <input type="text" value={inp} onChange={updates} />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!inputsForm.names || !inputsForm.email) {
            localStorage.removeItem("names");
            localStorage.removeItem("email");
            localStorage.removeItem("age");
            alert("please fill all the data");
            return;
          }
          localStorage.setItem("names", inputsForm.names);
          localStorage.setItem("email", inputsForm.email);
          localStorage.setItem("age", inputsForm.age);
          localStorage.setItem("check", inputsForm.check);
          localStorage.setItem("select", inputsForm.select);
          alert("data saved");
          setInputsForm({
            names: "",
            email: "",
            age: "",
          });
        }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
          width: "250px",
          margin: "20px 35%",
          background: "#dddddd",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        form
        <div>
          <label>names</label>

          <input
            value={inputsForm.names}
            onChange={(event) => {
              setInputsForm({
                ...inputsForm,
                names: event.target.value,
              });
            }}
          />
        </div>
        <div>
          <label>email</label>
          <input
            value={inputsForm.email}
            onChange={(event) => {
              setInputsForm({
                ...inputsForm,
                email: event.target.value,
              });
            }}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            value={inputsForm.age}
            onChange={(event) => {
              setInputsForm({
                ...inputsForm,
                age: event.target.value,
              });
            }}
          />
        </div>
        <label>message</label>
        <textarea
          onChange={(event) => {
            setInputsForm({
              ...inputsForm,
              textArea: event.target.value,
            });
          }}
        >
          {inputsForm.textArea}
        </textarea>
        {/* checkbox??? */}
        <label>Subscribe to newsletter</label>
        <input
          checked={inputsForm.check}
          type="checkbox"
          onChange={(event) => {
            setInputsForm({
              ...inputsForm,
              check: event.target.checked,
            });
          }}
        />
        <label>Choose a country:</label>
        <select
          value={inputsForm.select}
          onChange={(event) => {
            setInputsForm({
              ...inputsForm,
              select: event.target.value,
            });
          }}
        >
          <option value="">--Please choose an option--</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="uk">UK</option>
        </select>
        {/* selected??? */}
        <button>submit</button>
      </form>
      <div
        style={{
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        <p>"the Name is a : {savedNames}"</p>
        <p>"the Email is a :{savedEmail}"</p>
        <p>"the age is a :{savedAge}"</p>
        <p>"the age is a :{savedAge}"</p>
        <p>"the age is a :{check}"</p>
        <p>"the age is a :{select}"</p>
      </div>

    </>
  );
}
