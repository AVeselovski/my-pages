// core
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

// ! TEMP STYLES !
const StyledTopNavigation = styled.div`
  text-align: center;
  color: #2c3e50;
  margin: 30px;
`;

const TopNavigation = ({ pages }) => {
  return (
    <StyledTopNavigation>
      <Link to="/">Home</Link>
      {pages.map(page => (
        /** NOTE: paths are hardcoded for now, for future use */
        <Link key={page.id} to={page.path} disabled={page.active}>
          {page.name_of_page_short}
        </Link>
      ))}
    </StyledTopNavigation>
  );
};

TopNavigation.propTypes = {
  pages: propTypes.array,
};

export default TopNavigation;
