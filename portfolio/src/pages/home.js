import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';

const Home = () => {
  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          <header className="mb-5">
            <Header />

          </header>
          <article className="mb-5">
            <p>
                I am a full stack web developer with a background in the arts. I have a passion for creating and learning new things. I am a graduate of the University of Utah's Full Stack Web Development Bootcamp. I am currently working as a freelance web developer and am looking for a full time position.
            </p>
            </article>
        </div>
      </div>
    </main>
  );
};

export default Home;
