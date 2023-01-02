import styled from "styled-components";
import { green } from "./colors/Colors";
import { xSmall } from "./text/textSizes";

const Button = styled.button`
  border: 1px solid ${green};
  color: ${green};
  padding: ${props => props.padding || "12px 16px"};
  border-radius: 5px;
  font-size: ${props => props.fontSize || xSmall};
  text-decoration: none;
  margin: ${props => props.margin || 0}
`;

export default Button