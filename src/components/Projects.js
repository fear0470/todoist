import React, { useState } from 'react';
import { useSelectedProjectValue, useProjectsValue } from '../context';
import { IndivindualProject } from './IndivindualProject';

export const Projects = ({ activeNull = null }) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();

  return(
    projects &&
    projects.map(project => (
      <li 
        key={project.projectId}
        data-doc-id={project.docId}
        data-testid="project-action"
        className={
          active === project.projectId
            ? 'active sidebar__project'
            : 'sidebar__project'
        }
        onClick={() => {
          setActive(project.projectId);
          setSelectedProject(project.projectId);
        }}
      >
        <IndivindualProject />
        </li>
      )) 
    );
 };

 Projects.propTypes = {
  activeValue: PropTypes.bool,
 };