// src\components\Home.js

import React from 'react';
import styled from 'styled-components';
import educationImage from '../assets/Education List.jpg';
import cert1 from '../assets/Certificated 1.jpg';
import cert2 from '../assets/Certificated 2.jpg';
import cert3 from '../assets/Certificated 3.jpg';
import cert4 from '../assets/Certificated 4.jpg';
import cert5 from '../assets/Certificated 5.jpg';
import cert6 from '../assets/Certificated 6.jpg';

const HomeWrapper = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background-color: #f4f4f9;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #666;
  margin-bottom: 2rem;
`;

const Bio = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 1.5rem auto;
  text-align: justify; // 텍스트 정렬을 양쪽 정렬로 설정합니다.
  text-justify: inter-word; // 단어 간격을 조정하여 일관성을 높입니다.
`;

const Section = styled.div`
  margin-top: 2rem;
  text-align: left;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-top: 2rem;
`;

const CertImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 0; // 간격을 없애기 위해 margin-bottom을 0으로 설정합니다.
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Title>Hoi Won Kim</Title>
      <Subtitle>Beginner Software Developer</Subtitle>
      <Bio>
        I am a beginner software developer with a strong passion for coding and a dedication to learning new technologies. I have completed a software engineering bootcamp where I gained hands-on experience with modern web development technologies such as JavaScript, React, and Node.js. I am eager to apply my skills in a professional setting and contribute to impactful projects.
      </Bio>
      <Bio>
        During my bootcamp, I developed several projects that demonstrate my ability to build functional and user-friendly applications. I am proficient in front-end and back-end development and enjoy working in collaborative environments. I am actively seeking a junior developer position where I can grow and further develop my skills.
      </Bio>
      <Section>
        <SectionTitle>Certifications</SectionTitle>
        <CertImage src={cert1} alt="Certificate 1" />
        <CertImage src={cert2} alt="Certificate 2" />
        <CertImage src={cert3} alt="Certificate 3" />
        <CertImage src={cert4} alt="Certificate 4" />
        <CertImage src={cert5} alt="Certificate 5" />
        <CertImage src={cert6} alt="Certificate 6" />
      </Section>
      <Section>
        <SectionTitle>Education</SectionTitle>
        <Image src={educationImage} alt="Education List" />
      </Section>
    </HomeWrapper>
  );
}

export default Home;
