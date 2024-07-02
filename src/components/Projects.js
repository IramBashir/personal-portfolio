// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';

const Projects = () => {
  return (
    <ProjectsWrapper>
      <h2>Projects</h2>
      <Project>
        <h3>Project Name</h3>
        <p>Description of the project.</p>
        <a href="https://github.com/yourusername/projectname">GitHub Link</a>
      </Project>
      {/* Add more projects as needed */}
    </ProjectsWrapper>
  );
};

const ProjectsWrapper = styled.section`
  padding: ${(props) => props.theme.spacing.large};
`;

const Project = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.medium};
`;

export default Projects;
