import React from "react";
import { NextComponentType } from "next";

const FormInput: NextComponentType<null, null, any> = ({
  classes,
  ...props
}) => {
  let combinedClasses: string = "";

  // Spread extra classNames
  if (classes) {
    for (const name of classes) {
      combinedClasses += ` ${name}`;
    }
  }

  return (
    <input
      {...props}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-9"
    />
  );
};

export default FormInput;
