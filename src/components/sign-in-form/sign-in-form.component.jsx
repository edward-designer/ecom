import { useState } from "react";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { SignInContainer, H2, ButtonsContainer } from "./sign-in-form.styles";

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
    <SignInContainer>
      <H2>I already have an account</H2>
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
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            onClick={handleGoogleSignIn}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Sign In With Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
