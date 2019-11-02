import React from 'react';

interface Props {
  path: string;
  pageContext: {
    isCreatedByStatefulCreatePages: boolean;
    project: {
      id: string;
      name: string;
      description: string;
    };
  };
}

const Project: React.FC<Props> = ({ path, pageContext }) => {
  const { project } = pageContext;

  return (
    <div>
      <h1>{project.name}</h1>
      <h4>
        <em>Path: {path}</em>
      </h4>
      <p>{project.description}</p>
    </div>
  );
};

export default Project;
