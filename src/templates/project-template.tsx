import React from 'react';

import { ITag } from '../utils/types/interfaces/components/tag.interfaces.';

interface Props {
  path: string;
  pageContext: {
    isCreatedByStatefulCreatePages: boolean;
    project: {
      id: string;
      name: string;
      description: string;
      tags: ITag[];
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
      {project.tags.map(project => (
        <code key={project.id}>{project.name}</code>
      ))}
    </div>
  );
};

export default Project;
