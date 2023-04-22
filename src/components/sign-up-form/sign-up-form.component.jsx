import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { SignUpContainer, H2 } from "./sign-up-form.styles";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const updatedFormFields = {
      ...formFields,
      [event.target.name]: event.target.value,
    };
    setFormFields(updatedFormFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    const submitHandler = async () => {
      try {
        const response = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        await createUserDocumentFromAuth(response, { displayName });
        resetFormFields();
      } catch (err) {
        // todo: error handling
        if (err.code === "auth/email-already-in-use") {
          alert("Sorry, email already in use");
        } else {
          console.log(err.message);
        }
      }
    };
    submitHandler();
  };

  return (
    <SignUpContainer>
      <H2>Don't have an account?</H2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          value={displayName}
          onChange={handleChange}
          name="displayName"
        />
        <FormInput
          label="Email"
          required
          type="email"
          value={email}
          onChange={handleChange}
          name="email"
        />
        <FormInput
          label="Password"
          required
          type="password"
          minLength="6"
          value={password}
          onChange={handleChange}
          name="password"
          autoComplete="off"
        />
        <FormInput
          label="Confirm Password"
          required
          type="password"
          minLength="6"
          value={confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          autoComplete="off"
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
