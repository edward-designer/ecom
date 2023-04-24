import {
  BaseButton,
  ButtonSpinner,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles.jsx";

export const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
  base: "base",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomeButton = getButton(buttonType);
  return (
    <CustomeButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomeButton>
  );
};

export default Button;
