import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import images from "../images/gojo.jpeg"

const Header = () => {
  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          <header className="mb-5 header-container">
            <div className="d-flex justify-content-between align-items-center">
              <h1 className="fw-light">Dane Kargis</h1>
              <img
                  className="profile-picture"
                    src={images}
                  alt="Profile"
                style={{ width: '100px', height: '50px' }}
              />

            </div>
          </header>
          <div className="d-flex justify-content-between">
            <Link className="btn btn-lg btn-dark px-4 me-3" to="/resume">
              Resume
            </Link>
            <Link className="btn btn-lg btn-dark px-4 me-3" to="/portfolio">
              Portfolio
            </Link>
            <Link className="btn btn-lg btn-dark px-4 me-3" to="/contact">
              Contact
            </Link>
            <Link className="btn btn-lg btn-dark px-4 me-3" to="/">
              About
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
// /Users/danekargis/Documents/school stuff/React-portolio/portfolio/src/images/gojo.jpeg
///Users/danekargis/Documents/school stuff/React-portolio/portfolio/src/components