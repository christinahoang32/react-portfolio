import React from 'react';
import '../styles/Resume.css'; 
import pdf from '../Assets/resume-sample.pdf'

const Resume = () => (
  <section className="resume-section">
     <h2 id="resume" className="resume-heading">
      Resume
    </h2>
    <p>
      Download my resume:{' '}
      <a href={pdf} download>
        Resume.pdf
      </a>
    </p>
    <h3>Proficiencies:</h3>
    <ul className="proficiencies-list">
      <li>React.js</li>
      <li>GraphQL</li>
      <li>MongoDB</li>
      <li>MySQL</li>
    </ul>
  </section>
);

export default Resume;


