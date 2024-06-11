// src/components/Projects.js

import React, { useEffect, useState } from 'react';
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

const projectIcons = {
  "Rolling-Dices_KIM": "🎲",
  "Module-2-Lab_HTML": "📄",
  "Module_2.2_CSS": "🎨",
  "Module_2.1_CSS_Movie_Music_Attached": "🎬🎵",
  "Module_2.3_CSS": "🎨",
  "20200530_class_exercise": "📘",
  "JS_Basic": "📜",
  "E-commerce": "🛒",
  "Next.js_Practice": "⚛️",
  "React_Native_Project": "📱",
  "WeatherApp": "🌦️",
  "AwesomeProject": "🌟",
  "React-Practice": "⚛️",
  "Web-Design-Projects": "🌐",
  "NodeJS-API": "🔧",
  "Python_Scripts": "🐍",
  "Django-Blog": "📝",
  "Machine_Learning": "🤖",
  "Data-Science-Projects": "📊",
  "HTML_Project": "🌐",
  "CSS_Project": "🎨",
  "JavaScript_Project": "📜",
  "Python_Project": "🐍",
  "React_Project": "⚛️",
  "Node_Project": "🔧",
  "Express_Project": "🚀",
  "MongoDB_Project": "🍃",
  "Getting-started-with-NextJS": "⚛️",
  "Building-a-movie-API-with-GraphQL": "🎥",
  "Decker-Test": "🔍",
  "FULLSTACK-GPT": "🤖",
  "github-example": "💻",
  "Javascript-Advance": "📚",
  "Javascript-fundamentals": "📙",
  "Javascript-Intermediate": "📘",
  "kidsgram-app": "👶",
  "kidsgram-backend": "🔧",
  "kidsgram-frontend": "💻",
  "Module-2.4-5_CSS_Portfolio": "🎨",
  "Module_5_exercise": "💪",
  "movieql-client": "🎬",
  "movie_app_2023": "🍿",
  "my-new-portfolio": "💼",
  "neighborly-market": "🏪",
  "NeighborlyMarket": "🏪",
  "QuickBite": "🍔",
  "React_Hook_nooks": "🔗",
  "React_JS_Movie_Web_Test": "📽️",
  "React_Native_HoiWonWeather_App": "🌦️",
  "React_Native_WorkHardTravelHard": "🧳",
  "TYPESCRIPT-BLOCKCHAIN": "🔗",
  "Zoom": "💻"
  // 추가 프로젝트 아이콘을 여기에 추가합니다.
};

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/hoiwonkim/repos')
      .then(response => response.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <ProjectsWrapper>
      <ProjectSectionTitle>My Projects</ProjectSectionTitle>
      <ProjectsContainer>
        {repos.map(repo => (
          <ProjectCard
            key={repo.id}
            title={repo.name}
            description={repo.description}
            url={repo.html_url}
            icon={projectIcons[repo.name] || "📁"}  // 기본 아이콘을 사용합니다.
          />
        ))}
      </ProjectsContainer>
    </ProjectsWrapper>
  );
};

export default Projects;