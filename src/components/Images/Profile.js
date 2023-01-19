import styled from "styled-components";

const Profile = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  border-radius: 5px;
  box-shadow: 0 40px 40px 38px 40px red;
`;

export default Profile;

// box-shadow: inset | offset-x | offset-y | blur-radius | spread-radius | color
