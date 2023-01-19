import { useState } from "react";
import styled from "styled-components";
import Info from "./Info";
import Selector from "./Selector";
import companies from "../../work.json";

const Container = styled.div`
  display: flex;
`;

const Work = () => {
  const [activeCompany, setActiveCompany] = useState(companies[0]);
  return (
    <Container>
      <Selector
        activeCompany={activeCompany}
        setActiveCompany={setActiveCompany}
      />
      <Info activeCompany={activeCompany} />
    </Container>
  );
};

export default Work;
