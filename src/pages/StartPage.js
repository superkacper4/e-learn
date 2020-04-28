import React from 'react';
import Loader from 'atoms/Loader';
import StartTemplate from 'templates/StartTemplate';
import AboutTemplate from 'templates/AboutTemplate';

const StartPage = () => {
  return (
    <>
      <Loader />
      <StartTemplate />
      <AboutTemplate />
    </>
  );
};

export default StartPage;
