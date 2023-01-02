import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${props => props.maxWidth || "auto"};
`

export default Wrapper