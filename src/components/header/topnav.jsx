import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import {
  FaBars,
  FaArrowAltCircleDown,
  FaBowlingBall,
  FaPhoneSquare,
} from "react-icons/fa";
import { useState } from "react";

// MENU BAR WRAPPING
const MenuBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  // background-color: #e2e;
  background-color: hsla(234, 28%, 28%, 0.8);
  z-index: 46;
  position: relative;

  h1 {
    font-size: 1.2rem;
  }
`;

// style hamburger menubar icon
const Hamburger = styled(FaBars)`
  font-size: 1.5rem;
  color: #edc;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 48rem) {
    display: block;
    position: absolute;
    top: 1.4rem;
    left: 0.1rem;
  }
`;

// menu link wrapper
const MenuLinkWrapper = styled.main`
  display: flex;
  align-items: center;
  gap: 0.8rem 2rem;

  @media screen and (max-width: 48rem) {
    display: none;
  }
`;

// style menubar links
const MenuLink = styled(Link)`
  color: #edc;
  text-decoration: none;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  transform: scale(1);
  transition: transform 200ms ease-in-out;

  &:hover {
    color: #fff;
    transform: scale(0.98);
  }

  &.active {
    border-bottom: 1px solid #edc;
  }

  //   @media screen and (max-width: 46rem) {
  //     margin-left: auto;
  //   }
`;

const MenuLinkWrapperColumn = styled.main`
  display: none;
  transform: translate(-100%);
  transition: transform 2000ms ease-in-out 200ms ease-in;

  @media screen and (max-width: 48rem) {
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: hsla(234, 28%, 28%, 0.8);
    z-index: 99;
    top: 4rem;
    left: 0;
    padding: 2rem 2rem 2rem 0.2rem;
    text-align: left;
    align-items: flex-start;
    border-top: 1px groove #012;
    width: 50%;
    // height: calc(100vh - 70px);
    height: 100vh;
    gap: 1rem;
    transform: translate(0);
  }
`;

// const menu = [
//     {
//         icon: FaBars,
//         link: 'phones',
//     },
//     {
//         icon: FaBowlingBall,
//         link: 'products',
//     },
//     {
//         icon: FaArrowAltCircleDown,
//         link: 'accessories',
//     },

// ];

// render when hamburger is clicked
const NavColumn = () => {
  return (
    <MenuLinkWrapperColumn>
      <MenuLink to="phones">
        Phones 
      </MenuLink>
      <MenuLink to="products">
        Products
      </MenuLink>
      <MenuLink to="accessories">
        Accessories
      </MenuLink>
      <MenuLink to="phones">
        Phones 
      </MenuLink>
      <MenuLink to="products">
        Products
      </MenuLink>
      <MenuLink to="accessories">
        Accessories
      </MenuLink>
      <MenuLink to="phones">
        Phones 
      </MenuLink>
      <MenuLink to="products">
        Products
      </MenuLink>
      <MenuLink to="accessories">
        Accessories
      </MenuLink>
    </MenuLinkWrapperColumn>
  );
};

// render when max-width > 48rem
const NavRow = () => {
  return (
    <MenuLinkWrapper>
      {/* {
                    menu.map(({icon, link}) => (
                        <MenuLink key={icon} to={link}> 
                          {link}
                        </MenuLink>
                    ))
                } */}

      <MenuLink to="phones">
        Phones <FaPhoneSquare />
      </MenuLink>
      <MenuLink to="products">
        Products
        <FaBowlingBall />
      </MenuLink>
      <MenuLink to="accessories">
        Accessories <FaArrowAltCircleDown />
      </MenuLink>
    </MenuLinkWrapper>
  );
};

const TopNav = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <MenuBar>
      <Hamburger onClick={handleClick} />
      <MenuLink to="home">
        <h1>Acronet</h1>
      </MenuLink>
      <NavRow />
      {/* <NavColumn /> */}
      {open ? <NavColumn /> : null}
    </MenuBar>
  );
};

export default TopNav;
