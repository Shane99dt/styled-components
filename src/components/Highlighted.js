import styled from "styled-components";
import { green } from "./colors/Colors";

const Highlighted = styled.button`
  color: ${green};
  font-size: ${(props) => props.fontSize || "16px"};
  text-decoration: none;
`;

export default Highlighted;
