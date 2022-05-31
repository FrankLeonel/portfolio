import styled from "styled-components";
import breakpoints from "theme/breakpoints";

export const PresentationContainer = styled.div(
  ({ theme: { breakpoints } }) => ({
    marginTop: "63px",

    [breakpoints.lg]: {
      marginTop: "70px",
    },
  })
);

export const Section = styled.div(({ theme: { breakpoints } }) => ({
  display: "flex",
  flexDirection: "column",
  webkitBoxAlign: "center",
  msFlexAlign: "center",
  alignItems: "center",
  height: "80vh",
  padding: "100px 0",

  "> div": {
    display: "flex",
    flexDirection: "column",
  },

  "> *": {
    flex: 1,
    "&:nth-child(2)": {},
  },

  [breakpoints.md]: {
    flexDirection: "row",
  },
}));

export const Text = styled.h1(({ theme }) => ({
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
    fontSize: "2.7rem",
    fontWeight: 600,
  },

  [breakpoints.md]: {
    textAlign: "start",
  },
}));

export const Profission = styled.p(({ theme: { breakpoints, colors } }) => ({
  margin: 0,
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
  margin: "20px 0",
  gap: "20px",

  [breakpoints.md]: {
    flexDirection: "row",
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

  [breakpoints.md]: {
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
