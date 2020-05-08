import React from 'react';
import Loader from 'atoms/Loader';
import Footer from 'organisms/Footer';
import StartTemplate from 'templates/StartTemplate';
import AboutTemplate from 'templates/AboutTemplate';

const StartPage = () => {
  return (
    <>
      <Loader />
      <StartTemplate />
      <AboutTemplate />
      <Footer />
    </>
  );
};

export default StartPage;
