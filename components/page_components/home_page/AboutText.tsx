import React from "react"; // tslint-disable-line
import moment from "moment";

import HomeDefaultService from "../../../services/home_page_services/home.default.service";
const prettyHtml = require("json-pretty-html").default;

const AboutText: React.FC = () => {
  const myBirthday: string = new Date(1995, 7, 30, 16, 9).toISOString();
  const [formattedBirthday]: string[] = moment(myBirthday)
    .fromNow()
    .split(" ");

  return (
    <React.Fragment>
      <div
        dangerouslySetInnerHTML={{
          __html: prettyHtml(HomeDefaultService.getAboutJson(formattedBirthday))
        }}
      />
    </React.Fragment>
  );
};

export default AboutText;
