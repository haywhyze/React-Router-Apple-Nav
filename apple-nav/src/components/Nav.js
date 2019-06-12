import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';
import navData from '../navData';
import SubNav from './SubNav';

const StyledNav = styled.nav`
  background: rgb(24, 24, 24);
  padding: 1rem 5rem;
  display: flex;
  justify-content: space-around;
  transition: all cubic-bezier(0.175, 0.885, 0.32, 1.275) .2s;
  
  a {
    color: white;
    text-decoration: none;

    &:hover {
      opacity: .7;
    }
  }
`

export default () => (
  <>
  <StyledNav>
    {navData.map(data => 
      <NavLink 
        key={data.id} 
        to={`/${data.title}`} 
      >
      {data.title}
      </NavLink>
    )}
  </StyledNav>
  </>
);