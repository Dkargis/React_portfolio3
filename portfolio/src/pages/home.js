import React from 'react';
import { Link } from 'react-router-dom';



const Home = () => {

  return (
    <main>
        <div className="flex-row justify-center">
            <div className="col-12 col-md-8 mb-3">
                <header className="mb-5">
                    <h1 className="fw-light">Welcome to Dane Kargis' Portfolio</h1>
                    <Link className="btn btn-lg btn-dark px-4 me-3" to="/resume">
                        Resume
                    </Link>
                    <Link className="btn btn-lg btn-dark px-4" to="/portfolio">
                        Portfolio
                    </Link>
                    <Link className="btn btn-lg btn-dark px-4" to="/contact">
                        Contact
                    </Link>
                    <Link className="btn btn-lg btn-dark px-4" to="/about">
                        About
                    </Link>
                </header>
                <div className="card px-1 py-1">
                    <span className="text-light">Placeholder for login</span>
                </div>
            </div>
        </div>
    </main>
  );
};

export default Home;