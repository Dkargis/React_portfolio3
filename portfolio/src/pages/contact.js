import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateEmail(formData.email)) {
      // Handle the form submission here, e.g., send the data to the server
      console.log('Form data:', formData);
    } else {
      alert('Please enter a valid email address.');
    }
  };

  const validateEmail = (email) => {
    // Simple email validation using a regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <>
      <main>
        <div className="flex-row justify-center">
          <div className="col-12 col-md-8 mb-3">
            <Header />
            <header className="mb-5">
              <h1 className="fw-light">Contact</h1>
            </header>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-lg btn-dark px-4 me-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;
