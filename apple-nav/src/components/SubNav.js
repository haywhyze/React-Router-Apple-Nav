import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background: ${props => props.tv ? 'rgb(12, 12, 12)' : "#F6F6F6"};
  padding: 1rem 5rem;
  display: flex;
  justify-content: center;
  transition: all cubic-bezier(0.175, 0.885, 0.32, 1.275) .2s;

  div {
    padding: 0 1rem;
  }
  
  a {
    color: ${props => props.tv ? '#f6f6f6' : 'black'};
    text-decoration: none;

    &:hover {
      color: #0070C9;
    }
  }

  img {
    height: 3.5rem;
  }

  p {
    font-size: .7rem;
    margin: 0 auto;
  }
`

const StyledNew = styled.p`
  color: red;
`

export default ({ data, match }) => (
  <StyledNav
    tv={data.title === 'TV'}
  >
    {
      data.subLink ? 
      data.subLink.map(link => 
        <Link 
          key={link.id} 
          to={`${match.path}/${link.id}`}
        >
          <div>
            <img alt={link.title} src={link.imageUrl} />
            <p>{link.title}</p>
            {
              link.new ? <StyledNew>New</StyledNew> : null
            }
          </div>
        </Link>)
      : null
    }
  </StyledNav>
);