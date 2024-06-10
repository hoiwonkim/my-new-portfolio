// src\components\Footer.js

import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #282c34;
  color: white;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

function Footer() {
  return (
    <FooterWrapper>
      <p>© 2024 Your Name. All rights reserved.</p>
    </FooterWrapper>
  );
}

export default Footer;

