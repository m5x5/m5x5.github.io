import { styled } from "../../../stitches.config";
import HeaderBackgroundText from "./BackgroundText";
import HeaderGreeting from "./Greeting";

const Container = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "auto 1fr",
  gridAutoFlow: "column",
  width: "$pageWidth",
  margin: "0 auto",
});

export default function Header() {
  return (
    <Container>
      <HeaderBackgroundText />
      <HeaderGreeting />
    </Container>
  );
}
