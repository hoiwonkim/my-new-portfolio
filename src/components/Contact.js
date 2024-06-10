// src\components\Contact.js

import React from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.div`
  padding: 2rem;
  text-align: center;
`;

function Contact() {
  return (
    <ContactWrapper>
      <h1>Contact</h1>
      <p>Contact form or email, LinkedIn, GitHub, etc.</p>
    </ContactWrapper>
  );
}

export default Contact;
