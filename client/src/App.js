// core
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
// utils
import GlobalStyles from './styles/globalStyles';
import { getUi } from './store/ui-actions';
// components
import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';
import ProjectsPage from './containers/ProjectsPage';
import EESPage from './containers/EESPage';
import NotFoundPage from './containers/NotFoundPage';
import TopNavigation from './components/TopNavigation';

// ! TEMP STYLES !
const StyledApp = styled.div`
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
`;

class App extends Component {
  componentDidMount() {
    this.props.getUi();
  }

  render() {
    const { pages } = this.props;

    return (
      <Router>
        <StyledApp>
          <TopNavigation pages={pages} />
          <Switch>
            {/** NOTE: paths are hardcoded for now, for future use */}
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/ees" component={EESPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
          <GlobalStyles />
        </StyledApp>
      </Router>
    );
  }
}

App.propTypes = {
  pages: propTypes.array,
  getUi: propTypes.func,
};

const mapStateToProps = ({ ui }) => ({
  pages: ui.pages,
});

const mapDispatchToProps = dispatch => ({
  getUi: () => {
    dispatch(getUi());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
