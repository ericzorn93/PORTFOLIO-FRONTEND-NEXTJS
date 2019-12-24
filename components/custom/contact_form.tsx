import React, { useCallback } from "react";
import { NextComponentType } from "next";
import { useFormik } from "formik";
import { useRegisterUserMutation } from "../../lib/generated/PortfolioGraphqlComponents";

const ContactForm: NextComponentType = () => {
  const [registerUser, { loading, data, error }] = useRegisterUserMutation();

  const contactForm = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: 0,
      company: "",
      companyGenre: "",
      message: ""
    },
    onSubmit: values => {
      console.log("Submitting: ", values);
      registerUser({
        variables: {
          firstName: values.firstName,
          lastName: values.lastName,
          emailAddress: values.emailAddress,
          phoneNumber: values.phoneNumber,
          companyName: values.company,
          companyGenreName: values.companyGenre
        }
      });
    }
  });

  const localHandleSubmit = useCallback(
    e => {
      e.preventDefault();
      contactForm.handleSubmit();
    },
    [contactForm.handleSubmit]
  );

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
          />
          <input
            type="text"
            name="companyGenre"
            id="companyGenre"
            className="form-control"
            placeholder="Please Enter Your Industry"
            onChange={contactForm.handleChange}
            value={contactForm.values.companyGenre}
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
