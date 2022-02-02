import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ProjectImg from '../assets/images/projectImg.png'

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--blue-primary);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    // margin-top: 1rem;
    background-color: #d1d1d1;
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2rem;
    color: var(--blue-primary);
  }
  .projectItem__desc {
    font-size: 1.5rem;
    margin-top: 1rem;
    color: #56534e;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img className='material-icons-outlined' alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}
