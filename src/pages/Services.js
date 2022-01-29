import React, { useState } from 'react'
import styled from 'styled-components'
import ProjectsInfo from '../assets/data/services'
import ProjectItem from '../Components/ProjectItem'

const ProjectStyle = styled.div`
h2 {
    text-align: center;
    color: var(--blue-primary);
    font-size: 2rem;
  }
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;

export default function Projects() {
  const [projectsData] = useState(ProjectsInfo);

  return (
    <>
      <ProjectStyle>
        <div className="container">
        <h2>Veja alguns dos nossos serviços</h2>
          <div className="projects__allItems">
            {projectsData.map((item) => (
              <ProjectItem
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </ProjectStyle>
    </>
  );
}
