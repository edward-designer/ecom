import { useId } from "react";

import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  const inputId = useId();
  return (
    <div className="group">
      <input className="form-input" id={inputId} {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
          htmlFor={inputId}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
