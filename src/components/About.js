// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutWrapper>
      <h2>About Me</h2>
      <p>
        Hi there! I'm Iram Bashir, a passionate Software Engineer specializing in React JS development. Based in Islamabad, Pakistan, I bring over 1.5 years of experience crafting interactive and efficient web applications.
      </p>
      <p>
        I graduated with a BS in Computer Science from FAST University, where I honed my skills in JavaScript and web technologies. At Jin Technologies and Tourly Technologies, I've leveraged React JS to build responsive front-ends, integrating them seamlessly with back-end services using technologies like TypeScript, Redux, and Nest.js.
      </p>
      <p>
        My journey in software development began at INTECH Automation Processes, where I started as an intern and quickly advanced to a Junior Developer role, gaining invaluable experience in software architecture and development lifecycle.
      </p>
      <p>
        Beyond coding, I enjoy exploring new technologies, contributing to open-source projects, and staying updated with the latest trends in web development. Let's connect and discuss how we can innovate together!
      </p>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.section`
  padding: ${(props) => props.theme.spacing.large};
`;

export default About;
