import { styled } from "../../stitches.config";
import Button from "../common/Button";

const Container = styled("div", {
  margin: "0 auto",
  width: "$pageWidth",
  textAlign: "center",

  "> .buttons": {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    marginTop: "5rem",
    marginBottom: "5rem",
  },
});

export default function Projects() {
  return (
    <Container>
      <h1>My Projects</h1>
      <p>These are some of the best projects I have worked on</p>
      <div className="buttons">
        <Button variant={"blue"}>All</Button>
        <Button outline>React</Button>
        <Button outline>Electron</Button>
        <Button outline>Nest.js</Button>
        <Button outline>Three.js</Button>
      </div>
    </Container>
  );
}
