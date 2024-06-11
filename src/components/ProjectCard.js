// src/components/ProjectCard.js

import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  padding: 2rem;
  width: 300px;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  color: #333;
  word-wrap: break-word; // 긴 제목이 카드 범위를 넘지 않도록 설정
`;

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin-top: 1rem;
`;

const Link = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProjectCard = ({ title, description, url, icon }) => {
  return (
    <Card>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        View Project
      </Link>
    </Card>
  );
};

export default ProjectCard;