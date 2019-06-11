import React from 'react';
import { NavLink } from 'react-router-dom';
import navData from '../navData';

export default () => (
  <div>
    {navData.map(data => <NavLink key={data.id} to='#' >{data.title}</NavLink>)}
  </div>
);