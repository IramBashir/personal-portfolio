// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';

const Projects = () => {
  return (
    <ProjectsWrapper>
      <h2>Projects</h2>
      <Project>
        <h3>Route and Safety Awareness Application (RSA)</h3>
        <p>
          Developed a traffic signboard detection and recognition application that alerts drivers about upcoming traffic signs using Python, Yolov5, CNN, Android Application, Raspberry Pi, Java, and XML.
        </p>
        <a href="https://github.com/yourusername/rsa">GitHub Link</a>
      </Project>
      <Project>
        <h3>Web Application using React.js and TypeScript</h3>
        <p>
          Developed front-end of a web application using React.js, TypeScript, HTML, and CSS based on Figma designs.
        </p>
        <a href="https://github.com/yourusername/webapp-react">GitHub Link</a>
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
