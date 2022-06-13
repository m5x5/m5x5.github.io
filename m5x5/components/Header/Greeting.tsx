import { styled } from "../../stitches.config";

const Container = styled("div", {
  p: {
    background:
      "radial-gradient(13.35% 164.84% at 0% 21.67%, #909DA8 0%, #2C597E 100%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
    fontWeight: "700",
    fontSize: "2rem",
    margin: "0",
  },
  h1: {
    fontSize: "5rem",
    margin: "0",
  },
});

export default function HeaderGreeting() {
  return (
    <Container>
      <p>Hi there,</p>
      <h1>I am Michael</h1>
    </Container>
  );
}
