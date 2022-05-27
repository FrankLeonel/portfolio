import styled from "styled-components";

export const Drawer = styled.div(
  ({ theme: { breakpoints, colors }, show }) => ({
    position: "fixed",
    margin: "69px 0 0",
    padding: 0,
    top: 0,

    width: "100%",
    height: "100%",
    zIndex: 99,
    backgroundColor: colors.primary,

    "&.active": {
      left: 0,
      float: "left",
      transform: show ? "translateX(0)" : "translateX(-100%)",
    },
    transition: "transform 0.3s ease-out, z-index 0.2s ease-out",

    [breakpoints.md]: {
      display: "none",
    },
  })
);
