import { styled } from "../../stitches.config";

const Button = styled("button", {
  backgroundColor: "$primary",
  color: "white",
  fontFamily: "$default",
  border: "none",
  cursor: "pointer",
  fontSize: "1.375rem",
  lineHeight: "2.5rem",
  padding: "1rem 2.5rem",
  borderRadius: "5rem",
  fontWeight: "500",

  variants: {
    variant: {
      secondary: {
        color: "$primary",
        backgroundColor: "#D3E4F1",
      },
      blue: {
        color: "#D3E4F1",
        backgroundColor: "#098AF3",
      },
    },
    outline: {
      true: {
        border: "2px solid $primary",
        backgroundColor: "transparent",
        color: "$primary",
      },
    },
  },
});

export default Button;
