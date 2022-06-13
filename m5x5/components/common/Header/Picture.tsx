import Image from "next/image";
import { styled } from "../../../stitches.config";

const Container = styled("div", {
  minWidth: "300px",
  width: "calc($pageWidth / 2.5)",
  paddingBottom: "3rem",
  marginLeft: "auto",
  marginRight: "4rem",
  position: "relative",
  userSelect: "none",

  "&::before": {
    content: "''",
    height: "103% ",
    width: "100%",
    display: "block",
    position: "absolute",
    backgroundColor: "#6F96A8",
    borderRadius: "50rem",
    left: "4rem",
    top: "0rem",
  },

  "> .tag": {
    position: "absolute",
    backgroundColor: "#fff",
    boxShadow: "8px 8px 48px rgba(143, 142, 142, 0.25)",
    padding: "1.7rem 2.2rem",
    borderRadius: "1rem",
    color: "#7e7e7e",
    fontWeight: "bold",
    fontSize: "1.2rem",
    cursor: "pointer",
    transition: "all 0.2s ease-out",

    "&.right": {
      right: "-3rem",
      top: "10%",
    },

    "&.left": {
      left: "0rem",
      bottom: "10%",
    },

    "&:hover": {
      transform: "scale(1.1)",
    },
  },

  "> .circle": {
    backgroundColor: "#3A6173",
    position: "absolute",
    top: "30%",
    left: "-4.5rem",
    width: "9rem",
    height: "9rem",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "all 0.2s ease-out",

    "&:active": {
      transform: "scale(1.1)",
    },
  },
});

export default function HeaderPicture({ className }) {
  return (
    <Container className={className}>
      <Image
        src="/images/profile-picture.png"
        alt="Michael's Profile Picture"
        layout="responsive"
        width={690}
        height={908}
      />
      <div className="tag right">
        <span>Front End Developer</span>
      </div>
      <div className="tag left">
        <span>Back End Developer</span>
      </div>
      <div className="circle"></div>
    </Container>
  );
}
