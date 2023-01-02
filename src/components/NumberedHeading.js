import styled from "styled-components";
import { green, lightestSlate } from "./colors/Colors";

const NumberedHeading = styled.h2`
  font-size: 32px;
  color: ${lightestSlate};
  margin: 10px 0 40px;

  &::before {
    content: '${props=> props.before + "." || 1}';
    color: ${green};
    margin: 0 10px 0 0;
  }
`

export default NumberedHeading