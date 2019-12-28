import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { NextComponentType } from "next";
import { useFormik } from "formik";
import * as Yup from "yup";
import { generate as generateId } from "shortid";

import { useRegisterUserMutation } from "../../lib/generated/PortfolioGraphqlComponents";
import FormErrorMessage from "./form_error_message";
import { contactUserAction } from "../../store/actions/user_actions/user.actions";
import FormInput from "./form_input";

// Form Inputs
const formInputs = [
  [
    { name: "firstName", placeholder: "Please Enter Your First Name" },
    { name: "lastName", placeholder: "Please Enter Your Last Name" }
  ],
  [
    { name: "emailAddress", placeholder: "Please Enter Your Email Address" },
    { name: "phoneNumber", placeholder: "Please Enter Your Phone Number" }
  ],
  [
    { name: "company", placeholder: "Please Enter Your Company's Name" },
    {
      name: "companyGenre",
      placeholder: "Please Enter Your Company's Industry"
    }
  ],
  [{ name: "message", placeholder: "Enter Message Here" }]
];

const registerUserSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First Name is Too Short!")
    .max(50, "First Name is Too Long!")
    .required("First Name is Required"),
  lastName: Yup.string()
    .min(2, "Last Name is Too Short!")
    .max(50, "Last Name is Too Long!")
    .required("Last Name is Required"),
  emailAddress: Yup.string()
    .email("Invalid email")
    .required("Email is Required"),
  phoneNumber: Yup.string()
    .required("You Must Enter a Phone Number")
    .min(10)
    .max(10),
  company: Yup.string()
    .required("A Company Name Must Be Present")
    .min(2, "Company Name is Too Short")
    .max(250, "Company Name is Too Long"),
  companyGenre: Yup.string()
    .required("A Company Genre Must Be Present")
    .min(2, "Company Genre is Too Short")
    .max(250, "Company Genre is Too Long"),
  message: Yup.string()
    .required("You Must Provide a Message")
    .min(2, "Your Message is Too Short")
    .max(250, "Your Message is Too Long")
});

const ContactForm: NextComponentType = () => {
  const dispatch = useDispatch();
  const [registerUser, { loading, data, error }] = useRegisterUserMutation();

  const contactForm = useFormik({
    validationSchema: registerUserSchema,
    initialValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      company: "",
      companyGenre: "",
      message: ""
    },
    onSubmit: async (values, actions) => {
      const { setSubmitting, resetForm } = actions;

      setSubmitting(true);
      await registerUser({
        variables: {
          firstName: values.firstName,
          lastName: values.lastName,
          emailAddress: values.emailAddress,
          phoneNumber: parseInt(values.phoneNumber, 10),
          companyName: values.company,
          companyGenreName: values.companyGenre,
          message: values.message
        }
      });
      dispatch(contactUserAction(true));
      setSubmitting(false);
      resetForm();
    }
  });

  const localHandleSubmit = useCallback(
    e => {
      e.preventDefault();
      contactForm.handleSubmit();
    },
    [contactForm.handleSubmit]
  );

  if ((contactForm.isSubmitting || loading) && !error) {
    return <h1>Submitting....</h1>;
  }

  // Form Error Values to Display
  const errorValues = Object.values(contactForm.errors);

  return (
    <>
      {errorValues &&
        errorValues.map(error => (
          <FormErrorMessage key={generateId()} message={error} />
        ))}
      <form onSubmit={localHandleSubmit}>
        <div className="flex flex-col">
          {formInputs.map(group => {
            return (
              <div className="w-full">
                {group.map(input => {
                  if (input.name === "mesage") {
                    return (
                      <textarea
                        key={generateId()}
                        className="w-full rounded border"
                      ></textarea>
                    );
                  }

                  return (
                    <FormInput
                      key={generateId()}
                      classes={["w-full", "sm:w-1/2", "md:w-1/2", "lg:w-1/2"]}
                      name={input.name}
                      placeholder={input.placeholder}
                      onChange={contactForm.handleChange}
                      // value={contactForm.values[input.name]}
                    />
                  );
                })}
              </div>
            );
          })}

          <div className="flex mb-4">
            <button className="btn btn-black" type="submit">
              Submit Contact
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
