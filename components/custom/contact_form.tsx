import React from "react";
import { NextComponentType } from "next";

const ContactForm: NextComponentType = () => {
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
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="form-control"
            placeholder="Please Enter Your Last Name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="emailAddress"
            id="emailAddress"
            className="form-control"
            placeholder="Please Enter Your Email Address"
          />
          <input
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            className="form-control"
            placeholder="Please Enter Your Phone Number"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="company"
            id="company"
            className="form-control"
            placeholder="Please Enter Your Company's Name"
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
