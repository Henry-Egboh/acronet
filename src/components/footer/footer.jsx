import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const FooterContainer = styled.footer({
  backgroundColor: "hsla(234, 28%, 28%, 0.8)",
  padding: "4rem 2rem",
});

const TopFooter = styled.section({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr) 1.2fr",

  h1: {
    color: '#edc',
    fontSize: '1.2rem',
    fontWeight: '600',
  },

  p: {
    fontSize: "1rem",
    fontWeight: "300",
  }
});

// const MidFooter = styled.section({});

// const BaseFooter = styled.section({});

// style menubar links
const MenuLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  transform: scale(1);
  transition: transform 200ms ease-in-out;
  font-weight: 400;

  &:hover {
    color: #edc;
    transform: scale(0.98);
  }

  &.active {
    border-bottom: 1px solid #edc;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <TopFooter>
        {/* first */}
        <div>
          <h1>More Tools</h1>
          <div>
            <MenuLink to="">Phones</MenuLink>
            <MenuLink to="">Products</MenuLink>
            <MenuLink to="">Accessories</MenuLink>
            <MenuLink to="">Phones</MenuLink>
            <MenuLink to="">Products</MenuLink>
            <MenuLink to="">Accessories</MenuLink>
          </div>
        </div>
        {/* second */}
        <div>
          <h1>More Tools</h1>
          <div>
            <MenuLink to="">Phones</MenuLink>
            <MenuLink to="">Products</MenuLink>
            <MenuLink to="">Accessories</MenuLink>
          </div>
        </div>
        {/* third  */}
        <div>
          <h1>More Tools</h1>
          <div>
            <MenuLink to="">Phones</MenuLink>
            <MenuLink to="">Products</MenuLink>
            <MenuLink to="">Accessories</MenuLink>
            <MenuLink to="">Phones</MenuLink>
            <MenuLink to="">Products</MenuLink>
            <MenuLink to="">Accessories</MenuLink>
            <MenuLink to="">Accessories</MenuLink>
          </div>
        </div>
        {/* fourth column */}
        <div>
          <h1>More Tools</h1>
          <div>
            <MenuLink to="">Phones</MenuLink>
            <MenuLink to="">Products</MenuLink>
            <MenuLink to="">Accessories</MenuLink>
            <MenuLink to="">Phones</MenuLink>
          </div>
        </div>
        {/* social icons */}
        <div></div>
      </TopFooter>
    </FooterContainer>
  );
};

export default Footer;
