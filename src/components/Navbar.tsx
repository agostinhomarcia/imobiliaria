import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  display: inline;
  margin-right: 20px;

  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #4CAF50;

      .active-icon {
        transform: scale(1.2);
        transition: transform 0.3s ease;
      }
    }
  }

  .active-icon {
    transition: transform 0.3s ease;
  }
`;
const Navbar: React.FC = () => {
    return (
        <Nav>
          <Ul>
            <Li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                {({ isActive }) => (
                  <>
                    Home
                  </>
                )}
              </NavLink>
            </Li>
            <Li>
              <NavLink to="/listings" className={({ isActive }) => isActive ? 'active' : ''}>
                {({ isActive }) => (
                  <>
                    Listings
                  </>
                )}
              </NavLink>
            </Li>
            <Li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                {({ isActive }) => (
                  <>
                    Contact
                  </>
                )}
              </NavLink>
            </Li>
            <Li>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                {({ isActive }) => (
                  <>
                    About Us
                  </>
                )}
              </NavLink>
            </Li>
          </Ul>
        </Nav>
    );
};

export default Navbar;