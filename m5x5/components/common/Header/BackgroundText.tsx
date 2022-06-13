import { styled } from "../../../stitches.config";

const Container = styled("div", {
  width: "$pageWidth",
  maxWidth: "$pageWidth",
  overflow: "hidden",
  gridColumn: "1 / span 2",
  gridRow: "1 / span 1",
  userSelect: "none",
});

const Text = styled("h1", {
  fontSize: "20.5rem",
  color: "white",
  margin: "0",
  marginTop: "3rem",
  lineHeight: "1",
  textShadow: "1rem 1rem 3rem rgba(229, 237, 241, 0.75)",
  fontWeight: "900",
});

export default function HeaderBackgroundText() {
  return (
    <Container>
      <Text>Developer</Text>
    </Container>
  );
}
