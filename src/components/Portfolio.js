import React from 'react';

const projects = [
  {
    title: 'password generator',
    imageUrl: 'https://camo.githubusercontent.com/f086350db365d74ec3ab1716378b9db5e7766c2d57d307e9a6ee4ac221858d68/68747470733a2f2f692e706f7374696d672e63632f4d4747705356357a2f53637265656e2d53686f742d323032332d30342d30382d61742d372d30352d32362d504d2e706e67',
    deployedUrl: 'https://example.com/project1',
    githubUrl: 'https://github.com/christinahoang32/random-password-generator',
  },
  // Add more projects
];

const Portfolio = () => (
  <section id = "portfolio">
    <h2>Portfolio</h2>
    <div className="projects">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <img src= {project.imageUrl} alt={project.title} />
          <h3>{project.title}</h3>
          <div className="links">
            <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">Demo</a>
            <a href={project.githubUrl}target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;