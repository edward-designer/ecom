import { useId } from "react";

import {
  Group,
  FormInputField,
  FormInputLabel,
  ShrinkLabel,
} from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  const inputId = useId();

  const LabelComponent = otherProps.value.length ? ShrinkLabel : FormInputLabel;
  return (
    <Group>
      <FormInputField id={inputId} {...otherProps} />
      {label && <LabelComponent htmlFor={inputId}>{label}</LabelComponent>}
    </Group>
  );
};

export default FormInput;
