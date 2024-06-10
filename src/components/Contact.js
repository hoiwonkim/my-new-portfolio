// src\components\Contact.js

import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactWrapper = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  background-color: #f4f4f9;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const ContactInfo = styled.div`
  margin-bottom: 1.5rem;
`;

const ContactLink = styled.a`
  display: inline-block;
  font-size: 1.2rem;
  color: #007bff;
  text-decoration: none;
  margin: 0.5rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Icon = styled.span`
  margin-right: 0.5rem;
`;

function Contact() {
  return (
    <ContactWrapper>
      <Title>Contact</Title>
      <ContactInfo>
        <Icon><FaEnvelope /></Icon>
        <ContactLink href="mailto:gw31513@gmail.com">gw31513@gmail.com</ContactLink>
      </ContactInfo>
      <ContactInfo>
        <Icon><FaLinkedin /></Icon>
        <ContactLink href="https://www.linkedin.com/in/hoi-won-kim-4bbb16263/?trk=people_directory&original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=nz" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </ContactLink>
      </ContactInfo>
      <ContactInfo>
        <Icon><FaGithub /></Icon>
        <ContactLink href="https://github.com/hoiwonkim" target="_blank" rel="noopener noreferrer">
          GitHub
        </ContactLink>
      </ContactInfo>
    </ContactWrapper>
  );
}

export default Contact;
