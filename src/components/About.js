// src\components\About.js

import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  background-color: #f4f4f9;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Bio = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 1.5rem auto;
  text-align: justify;
  text-justify: inter-word;
`;

const ResumeLink = styled.a`
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const About = () => {
  return (
    <AboutWrapper>
      <Title>About Me</Title>
      <Bio>
        I am a dedicated software developer with a strong background in web development and a keen interest in modern technologies. I have completed a Software Engineering Bootcamp at AUT & Institute of Data, where I gained hands-on experience in various programming languages and frameworks. My passion for coding drives me to continually improve my skills and stay updated with the latest industry trends.
      </Bio>
      <Bio>
        Over the years, I have developed a comprehensive understanding of both front-end and back-end development. I am proficient in JavaScript, React, Node.js, and various other technologies. I enjoy solving complex problems and thrive in collaborative environments where I can contribute to innovative projects.
      </Bio>
      <Bio>
        My journey in the tech industry has been driven by a relentless pursuit of knowledge and a desire to build efficient, scalable, and user-friendly applications. I am currently seeking a position as a Beginner Software Developer where I can leverage my skills and experience to make a meaningful impact.
      </Bio>
      <ResumeLink href="https://www.linkedin.com/in/hoi-won-kim-4bbb16263/" target="_blank" rel="noopener noreferrer">
        View My Resume
      </ResumeLink>
    </AboutWrapper>
  );
}

export default About;
