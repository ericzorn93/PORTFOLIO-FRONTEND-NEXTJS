import React, { useEffect } from 'react';
import { Link } from 'gatsby';

interface Props {
  path: string;
  pageContext: {
    project: {
      id: string;
      name: string;
      about: {
        about: string;
      };
    };
  };
}

const ContentfulProjectTemplate: React.FC<Props> = ({ path, pageContext }) => {
  const { project } = pageContext;

  useEffect(() => {
    console.log(project);
  }, []);

  return (
    <div>
      <h1 style={{ color: 'red' }}>{project.name}</h1>
      <h4>
        <em>Path: {path}</em>
      </h4>
      {/* <p>{project.about.json.content.}</p> */}
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default ContentfulProjectTemplate;
