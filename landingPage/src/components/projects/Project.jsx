import React from 'react';
import './Project.css';
import pro1 from '../../assets/pro1.jpg';
import pro2 from '../../assets/pro2.jpg';
import pro3 from '../../assets/pro3.jpg';

function ProjectComponent() {
  return (
    <div className='project'>
      <h1 id='text'>SELECTED <br /> PROJECTS</h1>
      <div className='images'>
        <div className='image-container'>
          <img src={pro1} alt="Project 1" />
          <p className="project-name">Project 1</p>
        </div>
        <div className='image-container'>
          <img src={pro2} alt="Project 2" />
          <p className="project-name">Project 2</p>
        </div>
        <div className='image-container'>
          <img src={pro3} alt="Project 3" />
          <p className="project-name">Project 3</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectComponent;
