import BigHeader from "./components/BigHeader";
import Button from "./components/Button";
import { slate } from "./components/colors/Colors";
import Header from "./components/Header";
import Highlighted from "./components/Highlighted";
import Profile from "./components/Images/Profile";
import Inner from "./components/Inner";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import NumberedHeading from "./components/NumberedHeading";
import Paragraph from "./components/Paragraph";
import Section from "./components/Section";
import SmallHeader from "./components/SmallHeader";
import { small } from "./components/text/textSizes";
import Wrapper from "./components/Wrapper";
import brittany from "../src/images/brittany.avif"

const App = () => {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <Main>
        <Section>
          <SmallHeader>Hi, My name is</SmallHeader>
          <BigHeader>Brittany Chiang.</BigHeader>
          <BigHeader color={slate} margin={"10px 0 0"}>I build things for the web.</BigHeader>
          <Paragraph margin={"20px 0 0 0"} maxWidth={"540px"}>
          I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at <Highlighted as={"a"} href={"#"}>Upstate</Highlighted>.
          </Paragraph>
          <Button as={"a"} href={"#"} fontSize={small} margin={"50px 0 0"} padding={"20px 28px"}>Checkout my course link</Button>
        </Section>
        <Section>
          <NumberedHeading before={"1"}>
            About me
          </NumberedHeading>
          <Inner>
            <Wrapper maxWidth={"50%"}>
              <Paragraph>
                Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
              </Paragraph>
              <Paragraph>
              Fast-forward to today, and I've had the privilege of working at <Highlighted as={"a"} href="#">an advertising agency</Highlighted>, <Highlighted as={"a"} href={"#"}>a start-up</Highlighted>, <Highlighted as={"a"} href={"#"}>a huge corporation</Highlighted>, and <Highlighted as={"a"} href={"#"}>a student-led design studio</Highlighted>. My main focus these days is building accessible, inclusive products and digital experiences at <Highlighted as={"a"} href={"#"}>Upstatement</Highlighted> for a variety of clients.
              </Paragraph>
            </Wrapper>
            <Profile url={brittany} />
          </Inner>
        </Section>
      </Main>
    </>
  );
};

export default App;
