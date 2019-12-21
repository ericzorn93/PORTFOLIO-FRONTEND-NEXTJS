import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";

interface AboutHistoryProps {
  date: string;
  title: string;
  location: string;
  description: string;
  bulletPoints?: string[];
}

const AboutHistory: React.FC<AboutHistoryProps> = ({
  date,
  title,
  location,
  description,
  bulletPoints
}) => {
  return (
    <>
      <h4 className="date">{date}</h4>
      <div className="info">
        <h3>{title}</h3>
        <p>
          <em>{location}</em>
        </p>
        <p>{description}</p>
        {bulletPoints ? (
          <ul>
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default AboutHistory;
