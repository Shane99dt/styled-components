import styled from "styled-components";
import { green, lightestSlate, slate } from "../colors/Colors";
import Highlighted from "../Highlighted";

const Subject = styled.h3`
  font-size: 20px;
  color: ${lightestSlate};
  background-color: transparent;
`;

const SubjectBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
`;

const HighlightedLetter = styled.p`
  font-size: 20px;
  color: ${green};
  margin: 0 5px;
`;

const Duration = styled.p`
  font-size: 16px;
  color: ${slate};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const BriefPoint = styled.p`
  position: relative;
  padding-left: 30px;
  font-size: 18px;
  color: ${lightestSlate};

  &::before {
    content: "▹";
    position: absolute;
    left: 0px;
    color: ${slate};
  }
`;

const Info = ({ activeCompany }) => {
  return (
    <Container>
      <SubjectBox>
        <Subject>{activeCompany.position}</Subject>
        <HighlightedLetter>{"@"}</HighlightedLetter>
        <Highlighted as={"a"} href={""} fontSize={"20px"}>
          {activeCompany.company}
        </Highlighted>
      </SubjectBox>
      <Duration>{activeCompany.duration}</Duration>
      {activeCompany.brief.map((point, id) => {
        return <BriefPoint key={id}>{point}</BriefPoint>;
      })}
    </Container>
  );
};

export default Info;
