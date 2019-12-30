import React from "react";
import { NextComponentType } from "next";

import { PageContainer } from "../styles/page_styles/overall/overall";
import ContactForm from "../components/custom/contact_form";

const ContactPage: NextComponentType = () => {
  return (
    <PageContainer>
      <h1>Contact Page</h1>
      <div className="relative flex w-full justify-center items-center h-full">
        <ContactForm />
      </div>
    </PageContainer>
  );
};

export default ContactPage;
