// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutWrapper>
      <h2>About Me</h2>
      <p>Detail your background, education, skills, and experiences here.</p>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.section`
  padding: ${(props) => props.theme.spacing.large};
`;

export default About;
