import React from 'react';
import { FaGithub } from 'react-icons/fa'; 
import '../styles/Portfolio.css'; 

const projects = [

  {
    title: 'Note Taker',
    imageUrl: 'https://camo.githubusercontent.com/648adc5c82e0bc0f8f5f6553d25f9d1542aeedec9fe19cb75856a47c896de949/68747470733a2f2f692e706f7374696d672e63632f715258336a54314d2f53637265656e2d53686f742d323032332d30342d32342d61742d322d31322d33382d504d2e706e67',
    deployedUrl: 'https://devcenter.heroku.com/articles/git',
    githubUrl: 'https://github.com/christinahoang32/Work-Day--Scheduler',
  },
  {
    title: 'Goodnight King',
    imageUrl: 'https://github.com/renzosj/debug-thugs-project-2/raw/main/public/assets/images/landing-page.jpg',
    deployedUrl: 'https://goodnight-king-4073d0f5eac6.herokuapp.com/',
    githubUrl: 'https://github.com/renzosj/debug-thugs-project-2',
  },
  {
    title: 'Password Generator',
    imageUrl: 'https://camo.githubusercontent.com/f086350db365d74ec3ab1716378b9db5e7766c2d57d307e9a6ee4ac221858d68/68747470733a2f2f692e706f7374696d672e63632f4d4747705356357a2f53637265656e2d53686f742d323032332d30342d30382d61742d372d30352d32362d504d2e706e67',
    deployedUrl: 'https://devcenter.heroku.com/articles/git',
    githubUrl: 'https://github.com/christinahoang32/random-password-generator',
  },
  
  {
    title: 'Movie Database',
    imageUrl: 'https://github.com/christinahoang32/debug-thugs/raw/main/assets/images/mainPage.jpg',
    deployedUrl: 'https://christinahoang32.github.io/debug-thugs/',
    githubUrl: 'https://github.com/christinahoang32/debug-thugs',
  },
  
  {
    title: 'SVG logo Maker',
    imageUrl: 'https://camo.githubusercontent.com/af13e4ffb0b2a95177065343e3b763af75d59a046c2cbcf052817c9f65b3ad35/68747470733a2f2f692e706f7374696d672e63632f4e4d36537166326e2f53637265656e2d53686f742d323032332d30352d32352d61742d362d33302d33322d504d2e706e67',
    deployedUrl: 'https://devcenter.heroku.com/articles/git',
    githubUrl: 'https://github.com/christinahoang32/svg-logo-maker',
  },
  
  {
    title: 'Employee Tracker',
    imageUrl: 'https://camo.githubusercontent.com/c1d3b1ba813f30581957592e5b1b54ddb540f536ab3736b114a953e2cf94d436/68747470733a2f2f692e706f7374696d672e63632f525a5431484a576e2f53637265656e2d53686f742d323032332d30362d32312d61742d362d32342d30372d504d2e706e67',
    deployedUrl: 'https://devcenter.heroku.com/articles/git',
    githubUrl: 'https://github.com/christinahoang32/employee-tracker',
  },
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
            <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
              Deployed Here
              </a>
            <a href={project.githubUrl}target="_blank" rel="noopener noreferrer"> <FaGithub className="icon"/> </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;