import { useState } from "react";
// import { styled } from "styled-components";

// import Input from "./Input.jsx";

// const ControlContainer = styled.h1`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   margin-bottom: 1.5rem;
// `;

// const Button = styled.button`
//   padding: 1rem 2rem;
//   font-weight: 600;
//   text-transform: uppercase;
//   border-radius: 0.25rem;
//   color: #1f2937;
//   background-color: #f0b322;
//   border-radius: 6px;
//   border: none;

//   &:hover {
//     background-color: #f0920e;
//   }
// `;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className="w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800">
      <div className="flex flex-col gap-2 mb-6">
        <h1>
          <input
            label="Email"
            $invalid={emailNotValid}
            type="email"
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
          <input
            label="Password "
            $invalid={passwordNotValid}
            type="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </h1>
        <div className="flex justify-end gap-4">
          <button type="button" className="text-amber-400 hover:text-amber-500 ">
            Create a new account
          </button>
          <button onClick={handleLogin}>Sign In</button>
        </div>
      </div>
    </div>
  );
}
