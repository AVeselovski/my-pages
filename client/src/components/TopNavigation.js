// core
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// ! TEMP STYLES !
const StyledTopNavigation = styled.div`
  text-align: center;
  color: #2c3e50;
  margin: 30px;
`;

const TopNavigation = () => {
  return (
    <StyledTopNavigation>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/experience">Exp, Edu, Skills</Link>
    </StyledTopNavigation>
  );
};

export default TopNavigation;
