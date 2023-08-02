import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './style.css';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <footer className="w-100 mt-auto bg-light-blue p-4 fixed-bottom">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button className="btn btn-dark mb-3" onClick={() => navigate(-1)}>
            &larr; Go Back
          </button>
        )}
        <h4>
          Made with{' '}
          <span className="emoji" role="img" aria-label="heart" aria-hidden="false">
            ❤️
          </span>{' '}
          by Dane Kargis
          <a
            className="btn btn-dark ms-3"
            href="https://github.com/Dkargis"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="btn btn-dark ms-3"
            href="https://www.linkedin.com/in/your-linkedin-username/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;

