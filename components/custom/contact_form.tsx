import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { NextComponentType } from "next";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useRegisterUserMutation } from "../../lib/generated/PortfolioGraphqlComponents";
import FormErrorMessage from "./form_error_message";
import { contactUserAction } from "../../store/actions/user_actions/user.actions";
import FormInput from "./form_input";

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
        errorValues.map(error => <FormErrorMessage message={error} />)}
      <form onSubmit={localHandleSubmit}>
        <div className="form-group">
          <FormInput
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Please Enter Your First Name"
            onChange={contactForm.handleChange}
            value={contactForm.values.firstName}
            required
            classes={[]}
          />
          <FormInput
            type="text"
            name="lastName"
            id="lastName"
            className="form-control"
            placeholder="Please Enter Your Last Name"
            onChange={contactForm.handleChange}
            value={contactForm.values.lastName}
            required
            classes={[]}
          />
        </div>
        <div className="form-group">
          <FormInput
            type="email"
            name="emailAddress"
            id="emailAddress"
            className="form-control"
            placeholder="Please Enter Your Email Address"
            onChange={contactForm.handleChange}
            value={contactForm.values.emailAddress}
            required
            classes={[]}
          />
          <FormInput
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            className="form-control"
            placeholder="Please Enter Your Phone Number"
            onChange={contactForm.handleChange}
            value={contactForm.values.phoneNumber}
            required
            classes={[]}
          />
        </div>

        <div className="form-group">
          <FormInput
            type="text"
            name="company"
            id="company"
            className="form-control"
            placeholder="Please Enter Your Company's Name"
            onChange={contactForm.handleChange}
            value={contactForm.values.company}
            required
            classes={[]}
          />
          <FormInput
            type="text"
            name="companyGenre"
            id="companyGenre"
            className="form-control"
            placeholder="Please Enter Your Industry"
            onChange={contactForm.handleChange}
            value={contactForm.values.companyGenre}
            required
            classes={[]}
          />
        </div>

        <div className="form-group">
          <textarea
            name="message"
            id=""
            cols={30}
            rows={10}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-12 w-1/2"
            placeholder="Please Enter Your Message Here"
            onChange={contactForm.handleChange}
            value={contactForm.values.message}
            required
          ></textarea>
        </div>

        <div className="flex mb-4">
          <button className="btn btn-black" type="submit">
            Submit Contact
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
