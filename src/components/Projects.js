// src\components\Projects.js

import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const ProjectsWrapper = styled.div`
  padding: 4rem 2rem;
  background-color: #f4f4f9;
`;

const ProjectSectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Projects = () => {
  return (
    <ProjectsWrapper>
      <ProjectSectionTitle>My Projects</ProjectSectionTitle>
      <ProjectsContainer>
        <ProjectCard
          title="Project 1"
          description="Description, technologies used, challenges and solutions, screenshots/demo, and link to code."
        />
        <ProjectCard
          title="Project 2"
          description="Description, technologies used, challenges and solutions, screenshots/demo, and link to code."
        />
        {/* Add more ProjectCard components as needed */}
      </ProjectsContainer>
    </ProjectsWrapper>
  );
}

export default Projects;
