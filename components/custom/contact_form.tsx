import React, { useCallback } from "react";
import { NextComponentType } from "next";
import { useFormik } from "formik";

const ContactForm: NextComponentType = () => {
  const contactForm = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: 0,
      company: "",
      message: ""
    },
    onSubmit: ({}) => {
      console.log("submitting");
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
      <form>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="form-control"
            placeholder="Please Enter Your First Name"
            onChange={contactForm.handleChange}
            value={contactForm.values.firstName}
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="form-control"
            placeholder="Please Enter Your Last Name"
            onChange={contactForm.handleChange}
            value={contactForm.values.lastName}
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
          />
          <input
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            className="form-control"
            placeholder="Please Enter Your Phone Number"
            onChange={contactForm.handleChange}
            value={contactForm.values.phoneNumber}
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
          ></textarea>
        </div>

        <div className="form-group">
          <button type="button" onClick={localHandleSubmit}>
            Submit Contact
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
