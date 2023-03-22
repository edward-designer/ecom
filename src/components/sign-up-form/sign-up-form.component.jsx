import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

import Button from "../button/button.component";

import "./sign-up-form.styles.scss";

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
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(response, { displayName });
      resetFormFields();
    };
    try {
      submitHandler();
    } catch (err) {
      // todo: error handling
      if (err.code === "auth/email-already-in-use") {
        alert("Sorry, email already in use");
      } else {
        console.log(err.message);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          value={displayName}
          onChange={handleChange}
          name="displayName"
          id="displayName"
        />
        <FormInput
          label="Email"
          required
          type="email"
          value={email}
          onChange={handleChange}
          name="email"
          id="email"
        />
        <FormInput
          label="Password"
          required
          type="password"
          minlength="6"
          value={password}
          onChange={handleChange}
          name="password"
          id="password"
        />
        <FormInput
          label="Confirm Password"
          required
          type="password"
          minlength="6"
          value={confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          id="confirmPassword"
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
