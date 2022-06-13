import Image from "next/image";
import Link from "next/link";
import { styled } from "../../stitches.config";
import Button from "./Button";

const Container = styled("div", {
  border: "3px solid $primary",
  borderRadius: "1.5rem",
  overflow: "hidden",
  width: "calc(100% - 1rem)",
  boxShadow: "1rem 1rem 0px #000",

  "> .body": {
    backgroundColor: "#EDFAF3",
    borderTop: "3px solid $primary",
    textAlign: "left",
    padding: "3rem 4rem",
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gridTemplateRows: "auto auto",
    gridAutoFlow: "column",

    "> h2": {
      fontSize: "2rem",
      margin: "0",
    },

    "> p": {
      margin: "0",
      fontWeight: "500",
    },

    "> .buttons": {
      display: "flex",
      gap: "1rem",
      justifyContent: "flex-end",
      placeSelf: "center flex-end",
    },
  },
});

type Props = {
  title: string;
  imageUrl: string;
  description: string;
  viewLink: string;
  githubLink: string;
};

export default function Card({
  title,
  imageUrl,
  description,
  viewLink,
  githubLink,
}: Props) {
  return (
    <Container>
      <Image src={imageUrl} width={1512} height={982} layout="responsive" />
      <div className="body">
        <h2>{title}</h2>

        <p>{description}</p>

        <div className="buttons">
          <Link href={githubLink} target="_blank">
            <Button outline>Github</Button>
          </Link>
          <Link href={viewLink} target="_blank">
            <Button>View</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
