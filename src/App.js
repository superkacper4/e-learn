import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StartPage from 'pages/StartPage';
import LearnPage from 'pages/LearnPage';
import Nav from 'organisms/Nav';
import Footer from 'organisms/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <GlobalStyle />
        <Nav />
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route path="/learn" component={LearnPage} />
        </Switch>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;
