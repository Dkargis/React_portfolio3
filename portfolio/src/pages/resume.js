import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';

function Resume() {
  return (
    <>
      <Header />
      <main>
        <div className="flex-row justify-center">
          <div className="col-12 col-md-8 mb-3">
            <header className="text-center mb-5">
              <h1 className="fw-light">Resume</h1>
            </header>
            <article className="mb-5">
              <p>
                [Your Name]<br />
                [Your Address]<br />
                [City, State ZIP Code]<br />
                [Your Phone Number]<br />
                [Your Email Address]
              </p>
              <h2>Objective:</h2>
              <p>
                Dedicated and motivated professional seeking a challenging position to utilize my skills and contribute to the success of a dynamic organization.
              </p>

              <h2>Education:</h2>
              <p>
                Bachelor of Science in Computer Science<br />
                XYZ University, [City, State]<br />
                [Month Year] - [Month Year]
              </p>

              <h2>Skills:</h2>
              <ul>
                <li>Programming Languages: Java, JavaScript, Python</li>
                <li>Web Technologies: HTML, CSS, React.js</li>
                <li>Database: SQL, MongoDB</li>
                <li>Version Control: Git</li>
                <li>Problem Solving and Analytical Skills</li>
                <li>Strong Communication and Teamwork Skills</li>
                <li>Project Management</li>
              </ul>

              <h2>Experience:</h2>
              <p>
                Software Developer Intern<br />
                ABC Tech Solutions, [City, State]<br />
                [Month Year] - [Month Year]<br />
                - Developed and tested web applications using React.js and JavaScript.<br />
                - Assisted in designing and implementing database structures using SQL and MongoDB.<br />
                - Collaborated with the team to brainstorm and develop new features for existing projects.<br />
                - Conducted code reviews and contributed to improving code quality.
              </p>

              <p>
                IT Support Technician<br />
                XYZ Corporation, [City, State]<br />
                [Month Year] - [Month Year]<br />
                - Provided technical support to employees regarding software and hardware issues.<br />
                - Troubleshot and resolved network connectivity problems.<br />
                - Assisted in managing the company's IT infrastructure, including servers and networking devices.<br />
                - Conducted user training sessions to enhance computer literacy among employees.
              </p>

              <h2>Projects:</h2>
              <p>
                Online Store Website, [Month Year]<br />
                - Designed and developed an online store using React.js, HTML, and CSS.<br />
                - Implemented user authentication and shopping cart functionality.<br />
                - Utilized MongoDB for managing product data.
              </p>

              <p>
                Personal Portfolio Website, [Month Year]<br />
                - Created a personal portfolio website showcasing my projects and skills.<br />
                - Used HTML, CSS, and JavaScript to design and develop the website.<br />
                - Deployed the website using Netlify.
              </p>

              <h2>Certifications:</h2>
              <p>
                - [Certification Name], [Certification Issuer], [Month Year]
              </p>

              <h2>Volunteer Experience:</h2>
              <p>
                [Organization Name], [City, State]<br />
                [Month Year] - [Month Year]<br />
                - Assisted in organizing events and fundraisers.<br />
                - Participated in community outreach programs.
              </p>

              <p>References: Available upon request.</p>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}

export default Resume;
