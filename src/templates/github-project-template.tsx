import React from 'react';

interface Props {
  path: string;
  pageContext: {
    isCreatedByStatefulCreatePages: boolean;
    project: {
      id: string;
      name: string;
      about: string;
    };
  };
}

const GithubProjectTemplate: React.FC<Props> = ({ path, pageContext }) => {
  const { project } = pageContext;

  return (
    <div>
      <h1 style={{ color: 'green' }}>{project.name}</h1>
      <h4>
        <em>Path: {path}</em>
      </h4>
      <p>{project.about}</p>
    </div>
  );
};

export default GithubProjectTemplate;
