import styled from "styled-components";
import Button from "./Button";
import { green, lightestSlate } from "./colors/Colors";
import { xSmall } from "./text/textSizes";
// import logo from "../images/letter-b.png";

const NavLink = styled.a`
  color: ${lightestSlate};
  font-size: ${xSmall};
  display: inline-block;
  position:: relative;
  margin-left: 5px;

  &::before {
    content: '${(props) => props.before + "." || 1}';
    color: ${green};
    margin: 0 10px 0 0;
  }
`;

const NavLinksWrapper = styled.div`
  display: flex;
  flex: row;
  align-items: center;
  gap: 20px;
`;

// const NavLogo = styled.p`
//   padding: 10px;
//   color: ${green};
//   border: 1px solid ${green};
// `;

const NavLogo = styled.p`
  width: 42px;
  color: ${green};
`;
// const NavLinkNumber = styled.span`
//   margin-right: 5px;
//   color: ${green};
// `;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100px;
`;

const NavBar = () => {
  return (
    <Nav>
      <NavLogo>B</NavLogo>
      <NavLinksWrapper>
        <NavLink before={"1"}>About</NavLink>
        <NavLink before={"2"}>Experience</NavLink>
        <NavLink before={"3"}>Work</NavLink>
        <NavLink before={"4"}>Contact</NavLink>
        <Button as={"a"} href={"#"} margin={"0 0 0 15px"}>
          Resume
        </Button>
      </NavLinksWrapper>
    </Nav>
  );
};
export default NavBar;
