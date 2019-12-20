import React from "react";

import { ResumeHeaderText } from "../../styles/styled_components/resume_header_text";
import AboutHistory from "./about_history";
import { ResumeInfo } from "../../styles/styled_components/resume_info";

interface AboutResumeProps {}

const AboutResume: React.FC<AboutResumeProps> = () => {
  return (
    <div css={{ marginTop: 50 }}>
      <hr />
      <ResumeHeaderText>Work History</ResumeHeaderText>
      <ResumeInfo>
        <AboutHistory
          date="2018-10 - 2019-11"
          title="Junior Front End Developer"
          location="EarthCam Inc., Upper Saddle River, NJ"
          description={`Front-End developer on a large team, specializing in React and
          Angular. Built and maintained multiple enterprise level web
          applications, both public facing and customer facing. These projects
          consisted of widgets, new features, and bug fixes for both the Control
          Center 8 SaSS platform, as well as EarthCam's Broadway Media Player.`}
          bulletPoints={[
            `Implemented and re-architected a large portion of the React
          applications to use Redux and utilize asynchronous actions and
          global state management`,
            ` Began to write functional hook-based components in the expanding
          component library for optimal code cleanliness and performance`,
            ` Co-wrote a 360-degree image markup tool with Procore integration`,
            `Assisted in conversion of Angular 1 application to React`
          ]}
        />

        <AboutHistory
          date="2017-08 - 2018-04"
          title="Technical Specialist"
          location="Apple Inc., Nanuet, NY"
          description={`As a Technical Specialist (Apple Certified mobile technician), you address the customer's
          need of assistance and assessed their technical challenges. Took care of customers with
          advice or a solution on the spot, using my knowledge of current Apple technology to help
          with iPod, iPhone, and iPad devices.`}
        />

        <AboutHistory
          date="2010-06 - 2016-08"
          title="Group Leader - Summer Camp Counselor"
          location="Camp Ramaquois, Pomona, NY"
          description={`Promoted to Group Leader from Counselor and Counselor in Training, responsible for
          overseeing group of 20+ campers everyday. Provided guidance, responsibility, and
          mentorship to all campers.`}
        />

        <AboutHistory
          date="2016-06 - 2016-07"
          title="Summer Digital Intern"
          location="Green Lion Digital, Wyckoff, NJ"
          description={`Assisted with website and email campaign creation and maintenance. Created and
          designed into graphics and imagery for company and clients.`}
          bulletPoints={[
            `Ensured graphical expertise for newly created marketing campaigns`,
            `Helped maintain major clients' websites with the latest image and animation libraries`,
            `Supported marketing programs and campaigns with content and messaging to drive
          demand`
          ]}
        />
      </ResumeInfo>
      <hr />
      <ResumeHeaderText>Education</ResumeHeaderText>
      <ResumeInfo>
        <AboutHistory
          date="2017-05 - 2018-08"
          title="Master of Science: Information And Communications Technology"
          location="University of Denver - Denver, CO"
          description="Master of Science in Information and Communications Technology, with a concentration
            in Web Design and Development. The program covered topics such as full-stack web
            design and development, with focuses on HTML, CSS, JavaScript, Python, PHP Ruby on
            Rails, and Java. Also have taken courses in Enterprise Architecture, Software Design, and Web Information
            Systems."
          bulletPoints={[
            "Concentrated in Web Design and Development (Full-Stack)",
            "Graduated with 3.94 GPA"
          ]}
        />

        <AboutHistory
          date="2013-08 - 2017-05"
          title="Bachelor of Arts: Interactive Digital Design"
          location="Quinnipiac University - Hamden, CT"
          description="Bachelor of Arts in Interactive Digital Design. Degree focused on front-end web design, app
          design, typography, motion graphics, design history, photography, package design, and
          digital branding."
          bulletPoints={[
            "Graduated with 3.43 GPA",
            "Founding Father/Member of Beta Theta Pi Fraternity",
            "Member of Lambda Pi Eta - National Communications Honors Society",
            "Dean's List 2013-2017 (Every Semester)"
          ]}
        />
      </ResumeInfo>
    </div>
  );
};

export default AboutResume;
