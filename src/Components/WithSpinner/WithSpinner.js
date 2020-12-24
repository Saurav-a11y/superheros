import React from "react";
import "./WithSpinner.css";

const WithSpinner = (WrappedComponent) => {
  const spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="spinners">
        <div className="spinner-border text-danger"></div>
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return spinner;
};
export default WithSpinner;
