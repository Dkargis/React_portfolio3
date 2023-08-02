import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';

const projects = [
  {
    id: 1,
    title: 'Employee Tracker',
    image: '/path/to/project1-image.jpg',
    link: 'https://github.com/Dkargis/Employee_Tracker.git',
  },
  {
    id: 2,
    title: 'PWA Text Editor',
    image: '/images/text-editor.png',
    link: 'https://github.com/Dkargis/PWA.git',
  },
  {
    id: 3,
    title: 'Note Taker',
    image: '/path/to/project3-image.jpg',
    link: 'https://github.com/Dkargis/Note_taker.git',
  },
  {
    id: 4,
    title: 'E-Commerce Back End',
    image: '/path/to/project4-image.jpg',
    link: 'https://github.com/Dkargis/E-commerce.git'
  },
  {
    id: 5,
    title: 'Hiking App',
    image: '/path/to/project5-image.jpg',
    link: 'https://github.com/Dkargis/team-Inception.git'
  },
  {
    id: 6,
    title: 'Sleep Helper App',
    image: '/path/to/project6-image.jpg',
    link: 'https://github.com/Luis6400/SleepShop.git'
  },
];

function Portfolio() {
  return (
    <>
      <Header />
      <main>
        <div className="flex-row justify-center">
          <div className="col-12 col-md-8 mb-3">
            <header className="mb-5">
              <h1 className="fw-light">Portfolio</h1>
            </header>
            <div className="row">
              {projects.map((project) => (
                <div className="col-md-4 mb-4" key={project.id}>
                  <div className="card">
                    <img
                      src={project.image}
                      className="card-img-top"
                      alt={project.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <Link
                        className="btn btn-dark"
                        to={project.link}
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Portfolio;
