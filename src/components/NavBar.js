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
`;

const NavLinksWrapper = styled.div`
  display: flex;
  flex: row;
  align-items: center;
`;

// const NavLogo = styled.p`
//   padding: 10px;
//   color: ${green};
//   border: 1px solid ${green};
// `;

const NavLogo = styled.p`
  width: 42px;
  color: ${green}
`;
// const NavLinkNumber = styled.span`
//   margin-right: 5px;
//   color: ${green};
// `;

const OL = styled.ol`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 25px;
  align-items: center;
  padding: 0px;
  margin: 0px;
`;
// const OL = styled.ol`
//   display: flex;
//   flex: row;
//   font-size: ${xSmall};
// `;
const LI = styled.li`
  color: ${green};
  position: relative;
  counter-increment: item 1;
  font-size: ${xSmall};
`;
// const LI = styled.li`
//   color: ${green};
//   padding: 10px;
// `;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const NavBar = () => {
  return (
    <Nav>
      <NavLogo>B</NavLogo>
      <NavLinksWrapper>
        <OL>
          <LI>
            <NavLink>About</NavLink>
          </LI>
          <LI>
            <NavLink>Experience</NavLink>
          </LI>
          <LI>
            <NavLink>Work</NavLink>
          </LI>
          <LI>
            <NavLink>Contact</NavLink>
          </LI>
        </OL>
        <Button as={"a"} href={"#"} margin={"0 0 0 15px"}>Resume</Button>
      </NavLinksWrapper>
    </Nav>
  );
};
export default NavBar;
