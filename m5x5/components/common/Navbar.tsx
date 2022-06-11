import { styled } from "../../stitches.config";
import Button from "./Button";

const Container = styled("div", {
  width: "100%",
  fontWeight: "500",

  "> div": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    flexFlow: "row",

    "> div": {
      display: "flex",
      gap: "5.625rem",
    },
  },
});

const Brand = styled("span", {
  fontWeight: "700",
  fontFamily: "1.56",
  display: "flex",
  gap: "1rem",
  alignItems: "center",

  "> div": {
    color: "white",
    backgroundColor: "$primary",
    lineHeight: "1",
    padding: "1rem",
    borderRadius: "2rem",
  },
});

export default function Navbar() {
  return (
    <Container>
      <div>
        <Brand>
          <div>M</div>
          Michael Peters
        </Brand>
        <div>
          <p>About</p>
          <p>Services</p>
          <p>Clients</p>
          <p>Contact</p>
        </div>
        <Button>My Projects</Button>
      </div>
    </Container>
  );
}
