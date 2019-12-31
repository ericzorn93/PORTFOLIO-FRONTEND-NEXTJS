import React from "react";
import { NextComponentType } from "next";

interface FormErrorMessageProps {
  message: string;
}

const FormErrorMessage: NextComponentType<
  null,
  null,
  FormErrorMessageProps
> = ({ message }) => {
  return (
    <>
      <p style={{ color: "red" }}>{message}</p>
    </>
  );
};

export default FormErrorMessage;
