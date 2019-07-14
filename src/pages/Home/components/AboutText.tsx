import React, { Fragment } from "react"; // tslint-disable-line
/** @jsx jsx */
import { jsx } from "@emotion/core";
import moment from "moment";

const AboutText: React.FC = () => {
  const myBirthday: string = `${new Date(1995, 7, 30, 16, 9)}`;
  const [formattedBirthday]: string[] = moment(myBirthday)
    .fromNow()
    .split(" ");

  return (
    <Fragment>
      <code>{`{"name": "Eric Zorn", "age": ${formattedBirthday}, "location": "River Vale, NJ"}`}</code>
    </Fragment>
  );
};

export default AboutText;
