import styled from "styled-components";

export const AboutMeContainer = styled.div(({ theme: { colors } }) => ({
  padding: "80px 0",
  backgroundColor: colors.secondary,
  width: "100%",
  height: "auto",
}));

export const Section = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  width: "100%",
  height: "auto",
}));

export const ContainerImage = styled.div(
  ({ theme: { breakpoints, colors } }) => ({
    display: "none",
    padding: "30px 0",
    ".programmer": {
      path: {
        fill: colors.white,
      },
      "&:hover": {
        webkitTransform: "scale(1.1)",
        transform: "scale(1.1)",
      },
    },

    [breakpoints.md]: {
      width: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      webkitTransition: "1s all ease",
      transition: "1s all ease",
    },

    [breakpoints.lg]: {
      ".programmer": {
        width: "60%",
      },
    },
  })
);

export const AboutFigure = styled.div(({ theme: { breakpoints, colors } }) => ({
  display: "flex",
  webkitBoxPack: "center",
  msFlexPack: "center",
  justifyContent: "center",
  webkitBoxAlign: "center",
  msFlexAlign: "center",
  alignItems: "center",

  "> *": {
    position: "absolute",
  },

  ".figure_one": {
    top: "200px",
    left: "10px",
  },
  ".figure_two": {
    top: "80px",
    left: "40px",
  },
  ".figure_three": {
    top: "80px",
    right: "40px",
  },
  ".figure_four": {
    top: "200px",
    right: "20px",
  },

  [breakpoints.lg]: {
    "> *": {
      width: "72px",
      height: "72px",
    },

    ".figure_one": {
      top: "260px",
      left: 0,
    },
    ".figure_two": {
      top: "80px",
      left: "40px",
    },
    ".figure_three": {
      top: "80px",
      right: "80px",
    },
    ".figure_four": {
      top: "260px",
      right: 0,
    },
  },

  [breakpoints.xl]: {
    "> *": {
      width: "92px",
      height: "92px",
    },

    ".figure_one": {
      top: "260px",
      left: "10px",
    },
    ".figure_two": {
      top: "80px",
      left: "80px",
    },
    ".figure_three": {
      top: "80px",
      right: "80px",
    },
    ".figure_four": {
      top: "260px",
      right: "10px",
    },
  },

  ".icon_one": {
    animation: "icon-move 3s ease 3.9s infinite alternate",
  },
  ".icon_two": {
    animation: "icon-move 3s ease 2.9s infinite alternate",
  },
  ".icon_three": {
    animation: "icon-move 3s ease 1.9s infinite alternate",
  },
  ".icon_four": {
    animation: "icon-move 3s ease 0.6s infinite alternate",
  },

  "@keyframes icon-move": {
    "0%": {
      transform: "translate3d(0, 0, 0)",
    },
    "100%": {
      transform: "translate3d(10px, -40px, 0)",
    },
  },
}));

export const ContainerText = styled.div(
  ({ theme: { breakpoints, colors } }) => ({
    width: "100%",
    padding: 0,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    webkitBoxOrient: "vertical",
    webkitBoxDirection: "normal",
    msFlexDirection: "column",
    flexDirection: "column",

    h2: {
      margin: 0,
      fontSize: "2.8rem",
      fontWeight: 500,
    },

    p: {
      margin: 0,
      lineHeight: "36px",
      color: colors.grayBrand,
      fontFamily: "DM Sans",
      fontSize: "1.4rem",
    },

    [breakpoints.md]: {
      width: "50%",
      padding: "0 0 30px 60px",
    },

    [breakpoints.lg]: {
      padding: "60px 0 30px 60px",
    },
  })
);
