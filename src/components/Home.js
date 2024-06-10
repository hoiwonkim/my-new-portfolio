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

const CertLink = styled.a`
  display: block;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
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
        <CertLink href="https://nomadcoders.co/certs/365364fb-1893-43fc-b557-143b924588c1" target="_blank" rel="noopener noreferrer">
          Nomad Coders JavaScript Challenge 2020
        </CertLink>
        <CertLink href="https://nomadcoders.co/certs/e4e74b3b-c494-4e8d-aa31-4a4e0f1373a8" target="_blank" rel="noopener noreferrer">
          Nomad Coders React Native Challenge 2020
        </CertLink>
        <CertLink href="https://nomadcoders.co/certs/0e35edca-1201-481e-aea3-77ef14a016ee" target="_blank" rel="noopener noreferrer">
          Nomad Coders Python Challenge 2020
        </CertLink>
        <CertLink href="https://nomadcoders.co/certs/b4ab9599-6da8-499e-a705-145d0a99b846" target="_blank" rel="noopener noreferrer">
          Nomad Coders Node.js Challenge 2020
        </CertLink>
        <CertLink href="https://nomadcoders.co/certs/ba79e7b7-9c85-4be8-9598-d521e56e290a" target="_blank" rel="noopener noreferrer">
          Nomad Coders CSS Masterclass 2020
        </CertLink>
        <CertLink href="https://nomadcoders.co/certs/6378344d-d925-4ad9-ab5b-450513405c8e" target="_blank" rel="noopener noreferrer">
          Nomad Coders Vanilla JS Challenge 2020
        </CertLink>
        <CertLink href="https://nomadcoders.co/certs/5ca20420-4250-4d89-88b8-e133f4ed32a7" target="_blank" rel="noopener noreferrer">
          Nomad Coders GraphQL Challenge 2020
        </CertLink>
        <CertLink href="https://nomadcoders.co/certs/d0e8ab57-87c2-4d58-9b42-73402bb22d30" target="_blank" rel="noopener noreferrer">
          Nomad Coders TypeScript Challenge 2020
        </CertLink>
        <CertLink href="https://nomadcoders.co/certs/4cb5fbb1-b260-49ce-8443-9c6032baf015" target="_blank" rel="noopener noreferrer">
          Nomad Coders PHP Challenge 2020
        </CertLink>
        <CertLink href="https://nomadcoders.co/certs/deb2a050-18a9-4eb7-8b70-bc6f11f41a0e" target="_blank" rel="noopener noreferrer">
          Nomad Coders MongoDB Challenge 2020
        </CertLink>
        <CertLink href="https://nomadcoders.co/certs/c77ba1a0-8bda-4321-a224-30aff9e779f3" target="_blank" rel="noopener noreferrer">
          Nomad Coders SQL Challenge 2020
        </CertLink>
        <CertLink href="https://nomadcoders.co/certs/56109d35-a2dd-4451-bd43-7db013dcf45e" target="_blank" rel="noopener noreferrer">
          Nomad Coders Docker Challenge 2020
        </CertLink>
        <CertLink href="https://nomadcoders.co/certs/89286432-1a72-4b1e-bc08-97f69034d6f2" target="_blank" rel="noopener noreferrer">
          Nomad Coders Firebase Challenge 2020
        </CertLink>
        <CertLink href="https://nomadcoders.co/certs/315ba60a-68c0-4520-8759-61f826b5ec10" target="_blank" rel="noopener noreferrer">
          Nomad Coders Redux Challenge 2020
        </CertLink>
      </Section>
      <Section>
        <SectionTitle>Education</SectionTitle>
        <Image src={educationImage} alt="Education List" />
      </Section>
    </HomeWrapper>
  );
}

export default Home;
