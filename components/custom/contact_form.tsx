import React, { useCallback } from "react";
import { NextComponentType } from "next";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useRegisterUserMutation } from "../../lib/generated/PortfolioGraphqlComponents";

const registerUserSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  emailAddress: Yup.string()
    .email("Invalid email")
    .required("Required"),
  phoneNumber: Yup.number().required("You Must Enter a Phone Number"),
  company: Yup.string()
    .required("A Company Name Must Be Present")
    .min(2, "Too Short")
    .max(250, "Too Long"),
  companyGenre: Yup.string()
    .required("A Company Genre Must Be Present")
    .min(2, "Too Short")
    .max(250, "Too Long"),
  message: Yup.string()
    .required("You Must Provide a Message")
    .min(2, "Too Short")
    .max(250, "Your Message is Too Long")
});

const ContactForm: NextComponentType = () => {
  const [registerUser, { loading, data, error }] = useRegisterUserMutation();

  const contactForm = useFormik({
    validationSchema: registerUserSchema,
    initialValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: 0,
      company: "",
      companyGenre: "",
      message: ""
    },
    onSubmit: async (values, actions) => {
      const { setSubmitting, resetForm } = actions;

      console.log("Submitting: ", values);

      setSubmitting(true);
      await registerUser({
        variables: {
          firstName: values.firstName,
          lastName: values.lastName,
          emailAddress: values.emailAddress,
          phoneNumber: values.phoneNumber,
          companyName: values.company,
          companyGenreName: values.companyGenre,
          message: values.message
        }
      });
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

  return (
    <>
      <form onSubmit={localHandleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="form-control"
            placeholder="Please Enter Your First Name"
            onChange={contactForm.handleChange}
            value={contactForm.values.firstName}
            required
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="form-control"
            placeholder="Please Enter Your Last Name"
            onChange={contactForm.handleChange}
            value={contactForm.values.lastName}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="emailAddress"
            id="emailAddress"
            className="form-control"
            placeholder="Please Enter Your Email Address"
            onChange={contactForm.handleChange}
            value={contactForm.values.emailAddress}
            required
          />
          <input
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            className="form-control"
            placeholder="Please Enter Your Phone Number"
            onChange={contactForm.handleChange}
            value={contactForm.values.phoneNumber}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="company"
            id="company"
            className="form-control"
            placeholder="Please Enter Your Company's Name"
            onChange={contactForm.handleChange}
            value={contactForm.values.company}
            required
          />
          <input
            type="text"
            name="companyGenre"
            id="companyGenre"
            className="form-control"
            placeholder="Please Enter Your Industry"
            onChange={contactForm.handleChange}
            value={contactForm.values.companyGenre}
            required
          />
        </div>

        <div className="form-group">
          <textarea
            name="message"
            id=""
            cols={30}
            rows={10}
            className="form-control"
            placeholder="Please Enter Your Message Here"
            onChange={contactForm.handleChange}
            value={contactForm.values.message}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <button type="submit">Submit Contact</button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
