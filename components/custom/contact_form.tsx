import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { NextComponentType } from "next";
import { useFormik } from "formik";
import * as Yup from "yup";

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
    {errorValues && errorValues.map(error => (<p style={{color: 'red'}}>{error}</p>))}

      <form className="w-full max-w-lg" onSubmit={localHandleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              name='firstName'
              value={contactForm.values.firstName}
              onChange={contactForm.handleChange}
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              name='lastName'
              value={contactForm.values.lastName}
              onChange={contactForm.handleChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email Address
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              placeholder="Enter Your Email Address"
              name='emailAddress'
              value={contactForm.values.emailAddress}
              onChange={contactForm.handleChange}
            />
            <p className="text-gray-600 text-xs italic">
              Please Enter Your Email Address
            </p>
          </div>
          <div className="w-1/2">
            <label
              htmlFor="grid-phone"
              className="block upeprcase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-phone"
              type="number"
              placeholder="Enter Your Phone Number"
              name='phoneNumber'
              value={contactForm.values.phoneNumber}
              onChange={contactForm.handleChange}
            />
            <p className="text-gray-600 text-xs italic">
              Please Enter Your Phone Number
            </p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-1/2 px-3">
            <label 
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-company">
                Company
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-company"
              type="text"
              placeholder="Enter Your Company Name"
              name='company'
              value={contactForm.values.company}
              onChange={contactForm.handleChange}
            />
            <p className="text-gray-600 text-xs italic">
              Please Enter Your Company's Name
            </p>
          </div>
          <div className="w-1/2 px-3">
            <label 
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-company-genre">
                Industry
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-company-genre"
              type="text"
              placeholder="Enter Your Company's Industry"
              name='companyGenre'
              value={contactForm.values.companyGenre}
              onChange={contactForm.handleChange}
            />
            <p className="text-gray-600 text-xs italic">
              Please Enter Your Company's Industry'
            </p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 text-center">
            <button type='submit' className='border shadow bg-black text-white hover:bg-gray-900 hover:cursor-pointer w-full h-10 flex justify-center items-center'>Submit</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
