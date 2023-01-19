import styled from "styled-components";
import { green, lightestNavy, lightestSlate } from "../colors/Colors";
import companies from "../../work.json";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 130px;
`;

const Button = styled.button`
  background-color: ${(props) => (props.active ? lightestNavy : "transparent")};
  border: none;
  color: ${(props) => (props.active ? green : lightestSlate)};
  padding: 0px 20px 2px;
  height: 42px;
  text-align: left;
  border-left: 2px solid ${(props) => (props.active ? green : lightestNavy)};
  font-family: "SFMono";
  cursor: pointer;
  &:hover {
    color: ${green};
    background-color: ${lightestNavy};
  }
`;

const Selector = ({ activeCompany, setActiveCompany }) => {
  return (
    <Container>
      {companies.map((company, id) => (
        <Button
          active={company.company === activeCompany.company}
          onClick={() => setActiveCompany(company)}
          key={id}
        >
          {company.company}
        </Button>
      ))}
    </Container>
  );
};

export default Selector;
