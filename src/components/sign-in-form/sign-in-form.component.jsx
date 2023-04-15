import { useState } from "react";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

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

    const submitHandler = async () => {
      try {
        await signInAuthUserWithEmailAndPassword(email, password);
        resetFormFields();
      } catch (err) {
        switch (err.code) {
          case "auth/user-not-found":
            alert("Sorry, user is not found");
            break;
          case "auth/wrong-password":
            alert("Sorry, password is wrong");
            break;
          default:
            console.log(err.message);
        }
      }
    };
    submitHandler();
  };

  const handleGoogleSignIn = async () => {
    resetFormFields();
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            onClick={handleGoogleSignIn}
            buttonType="google"
          >
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
