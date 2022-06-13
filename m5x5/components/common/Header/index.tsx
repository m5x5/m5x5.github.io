import { styled } from "../../../stitches.config";
import Button from "../Button";
import HeaderBackgroundText from "./BackgroundText";
import HeaderGreeting from "./Greeting";
import HeaderPicture from "./Picture";

const Container = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "auto auto auto auto 1fr",
  gridAutoFlow: "column",
  width: "$pageWidth",
  margin: "0 auto",
  paddingTop: "7rem",

  "> .action-buttons": {
    display: "flex",
    gap: "1.5rem",
  },

  "> .header-picture": {
    gridColumn: "2 / span 1",
    gridRow: "1 / span 5",
  },
});

const Description = styled("div", {
  fontWeight: "500",
  fontSize: "1.5rem",
  marginTop: "2rem",
  marginBottom: "5rem",
});

export default function Header() {
  return (
    <Container>
      <HeaderBackgroundText />
      <HeaderGreeting />
      <Description>
        I am Michael, a Full-Stack Developer with over 6 years of experience
        creating wonderful products and the ability to ship them across number
        of clients I have worked with.
      </Description>
      <div className="action-buttons">
        <Button>My Projects</Button>
        <Button variant="secondary">Contact</Button>
      </div>
      <HeaderPicture className="header-picture" />
    </Container>
  );
}
