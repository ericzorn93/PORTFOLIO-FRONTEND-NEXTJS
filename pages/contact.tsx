import React from "react";
import { NextComponentType } from "next";

import { PageContainer } from "../styles/page_styles/overall/overall";
import ContactForm from "../components/custom/contact_form";

const ContactPage: NextComponentType = () => {
  return (
    <PageContainer>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-center font-black mb-4 text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
          Feel Free to Reach Out
        </h1>
        <ContactForm />
      </div>
    </PageContainer>
  );
};

export default ContactPage;
