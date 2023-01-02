import styled from "styled-components";

const Profile = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${props => props.url});
  background-size: cover;
`

export default Profile