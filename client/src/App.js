// core
import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import styled from 'styled-components';
// utils
import GlobalStyles from './styles/globalStyles';
// components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ExpEduPage from './pages/ExpEduPage';
import NotFoundPage from './pages/NotFoundPage';
import TopNavigation from './components/TopNavigation';

// ! TEMP STYLES !
const StyledApp = styled.div`
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
`;

function App(props) {
  return (
    <StyledApp>
      <TopNavigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/experience" component={ExpEduPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
      <GlobalStyles />
    </StyledApp>
  );
}

export default withRouter(App);
