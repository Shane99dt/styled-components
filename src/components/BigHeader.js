import styled from "styled-components";
import { lightestSlate } from "./colors/Colors";

const BigHeader = styled.h2`
font-size: 80px;
margin: 0 0 0px 4px;
color: ${props => props.color || lightestSlate};
margin: ${props => props.margin || "0px"};
`

export default BigHeader