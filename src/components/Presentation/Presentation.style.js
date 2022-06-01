// import Image from "components/Image";
import styled from "styled-components";

export const PresentationContainer = styled.div(
  ({ theme: { breakpoints } }) => ({
    marginTop: "63px",

    [breakpoints.lg]: {
      marginTop: "74px",
    },
  })
);

export const Section = styled.div(({ theme: { breakpoints } }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "80vh",

  "> div": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },

  "> *": {
    flex: 0,
    "&:first-child": {
      flexBasis: "100%",
    },
  },

  [breakpoints.md]: {
    "> *": {
      flex: 1,
      "&:first-child": {
        flexBasis: "30%",
      },
    },
  },
}));

export const Text = styled.h1(({ theme: { breakpoints } }) => ({
  margin: 0,
  display: "inline-block",
  fontSize: "1.8rem",
  fontWeight: 400,
  fontFamily: "DM Sans",
  textAlign: "center",
  animation: "appear 2s",

  "@keyframes appear": {
    from: {
      opacity: 0,
      transform: "translateY(-40%)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },

  ".name": {
    fontSize: "2.6rem",
    fontWeight: 600,
  },

  [breakpoints.md]: {
    textAlign: "start",
  },
}));

export const Profission = styled.p(({ theme: { breakpoints, colors } }) => ({
  margin: 0,
  display: "inline-block",
  fontSize: "1.8rem",
  fontFamily: "DM Sans",
  fontWeight: 400,
  textAlign: "center",
  whiteSpace: "nowrap",
  color: colors.grayBrand,
  borderRight: `2px solid ${colors.primaryLight}`,
  overflow: "hidden",

  animation:
    "blinkCursor 600ms steps(50) infinite normal, typing 4s steps(50) 2s normal both",

  "@keyframes blinkCursor": {
    from: {
      borderRightColor: colors.primaryLight,
    },
    to: {
      borderRightColor: "transparent",
    },
  },

  "@keyframes typing": {
    from: {
      width: 0,
    },
    to: {
      width: "10em",
    },
  },

  [breakpoints.md]: {
    textAlign: "start",
  },
}));

export const ContainerMedias = styled.div(({ theme: { breakpoints } }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "20px 0",
  gap: "20px",

  [breakpoints.sm]: {
    flexDirection: "row",
    justifyContent: "center",
  },

  [breakpoints.md]: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
}));

const Button = styled.a(({ theme: { breakpoints } }) => ({
  textDecoration: "none",
  textAlign: "center",
  fontSize: "16px",
  fontWeight: 700,
  width: "100%",
  heigth: "48px",
  padding: "16px",
  wordBreak: "break-word",

  [breakpoints.sm]: {
    width: "160px",
  },
}));

export const ContainerCV = styled(Button)(({ theme: { colors } }) => ({
  backgroundColor: colors.primaryLight,
  color: colors.white,
}));

export const ContainerEmail = styled(Button)(({ theme: { colors } }) => ({
  border: `1px solid ${colors.grayBrand}`,
  color: colors.white,
}));

// export const ImagePresentation = styled(Image)(
//   ({ theme: { breakpoints } }) => ({
//     width: "90%",
//     height: "90%",
//     display: "none",

//     [breakpoints.md]: {
//       display: "block",
//     },
//   })
// );

export const ContainerImage = styled.div(
  ({ theme: { breakpoints, colors } }) => ({
    width: "50%",
    display: "none",
    webkitBoxPack: "center",
    msFlexPack: "center",
    justifyContent: "center",
    webkitBoxAlign: "center",
    msFlexAlign: "center",
    alignItems: "center",
    position: "relative",
    webkitTransition: "1s all ease",
    transition: "1s all ease",

    ".programmer": {
      width: "70%",
      height: "70%",
      path: {
        fill: colors.white,
      },
      "&:hover": {
        webkitTransform: "scale(1.1)",
        transform: "scale(1.1)",
      },
    },

    [breakpoints.md]: {
      display: "flex",
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
    borderRadius: "4px",
    width: "72px",
    height: "72px",
    path: {
      fill: colors.white,
    },
  },

  ".figure_one": {
    position: "absolute",
    top: "260px",
    right: "420px",
  },
  ".figure_two": {
    top: "80px",
    right: "360px",
  },
  ".figure_three": {
    top: "80px",
    right: "50px",
  },
  ".figure_four": {
    top: "260px",
    right: "10px",
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
