import React from 'react';
import { Link } from 'react-router-dom';


function Contact() {
  return (
    <>
  
      <main>
        <div className="flex-row justify-center">
          <div className="col-12 col-md-8 mb-3">
            <header className="mb-5">
              <h1 className="fw-light">Contact</h1>
              <Link className="btn btn-lg btn-dark px-4 me-3" to="/home">
              </Link>
            </header>
          </div>
        </div>
      </main>
      
    </>
  );
}

export default Contact;
