import styled from "styled-components";
import { slate } from "./colors/Colors";

const Paragraph = styled.p`
  margin: ${props => props.margin || 0};
  color: ${slate};
  max-width: ${props => props.maxWidth || "auto" };
`

export default Paragraph