import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
`;

const TitleLink = styled(Link)`
  font-size: 1.5rem;
  margin: 2rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
`;

const MenuContainer = styled.div`
  display: none;
  position: absolute;
  top: 2rem;
  right: 2rem;
  flex-direction: column;
  justify-content: space-between;
  width: 2.25rem;
  height: 2rem;
`;

const MenuSpan = styled.span`
  height: 0.4rem;
  width: 100%;
  background-color: white;
  border-radius: 0.2rem;
`;

const NavLinkStyled = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: white;
  padding: 0.5rem;
  margin: 0 2rem;
  border-radius: 0.5rem;

  &:not(.active):hover {
    color: rgb(150, 27, 62);
  }
`;

const UlContainer = styled.ul`
  display: flex;
`;

const LiContainer = styled.li`
  list-style: none;
`;

const MediaQueryContainer = styled.div`
  @media (max-width: 750px) {
    ${MenuContainer} {
      display: flex;
    }

    ${NavbarContainer} {
      flex-direction: column;
      align-items: start;
    }

    ${UlContainer} {
      display: none;
      flex-direction: column;
      width: 100%;
      margin-bottom: 0.25rem;
    }

    ${LiContainer} {
      width: 100%;
      text-align: center;
    }

    ${NavLinkStyled} {
      margin: 0.2rem 0.5rem;
    }
  }
`;

export const NavbarSC = () => {
  return (
    <MediaQueryContainer>
      <NavbarContainer>
        <TitleLink to="/" className="title">
          John Salinas
        </TitleLink>
        <MenuContainer>
          <MenuSpan />
          <MenuSpan />
          <MenuSpan />
        </MenuContainer>
        <UlContainer>
          <LiContainer>
            <NavLinkStyled to="/Contact">Contact</NavLinkStyled>
          </LiContainer>
          <LiContainer>
            <NavLinkStyled to="/projects">Projects</NavLinkStyled>
          </LiContainer>
          <LiContainer>
            <NavLinkStyled to="/about">About</NavLinkStyled>
          </LiContainer>
          <LiContainer>
            <NavLinkStyled to="/blog">Blog</NavLinkStyled>
          </LiContainer>
        </UlContainer>
      </NavbarContainer>
    </MediaQueryContainer>
  );
};