"use client";

import { styled } from "@/utils/styling";
import { useSlide } from "@/utils/useSlide";

const Heading = styled("h1", {
  transition: "opacity .4s",
  position: "absolute",
  bottom: "32vh",
  left: 0,
  right: 0,
  width: "100%",
  maxWidth: "80vh",
  margin: "0 auto",
  padding: 0,
  textAlign: "center",
  fontSize: "16vh",
  lineHeight: 1,
  letterSpacing: ".3rem",
  opacity: 0,

  variants: {
    visible: {
      true: {
        opacity: 1,
      },
    },
  },
});

const Marker = styled("span", {
  display: "inline-flex",
  transformOrigin: "center",
  transform: "scale(.85) rotate(4deg)",
  color: "$red",
});

const Meta = styled("span", {
  transition: "opacity .4s",
  position: "absolute",
  bottom: "4vh",
  left: 0,
  right: 0,
  width: "100%",
  maxWidth: "80vh",
  margin: "0 auto",
  textAlign: "center",
  fontSize: "5vh",
  lineHeight: 1.1,
  opacity: 0,

  variants: {
    visible: {
      true: {
        opacity: 0.2,
      },
    },
  },
});

export function Title() {
  const { slide } = useSlide();
  return (
    <>
      <Heading visible={slide === 0}>
        <Marker className="marker">Don’t</Marker>
        <br />
        Stay
        <br />
        Hydrated
      </Heading>
      <Meta visible={slide === 0}>
        Julian Burr
        <br />@ React Connection &apos;24
      </Meta>
    </>
  );
}
