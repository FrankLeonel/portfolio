import styled from "styled-components";

export const PresentationContainer = styled.div(
  ({ theme: { breakpoints } }) => ({
    marginTop: "63px",

    [breakpoints.lg]: {
      marginTop: "70px",
    },
  })
);

export const Section = styled.div(({ theme }) => ({
  display: "flex",
  webkitBoxAlign: "center",
  msFlexAlign: "center",
  alignItems: "center",
  height: "80vh",

  "> div": {
    display: "flex",
    flexDirection: "column",
  },

  "> *": {
    flex: 1,
    "&:nth-child(2)": {},
  },
}));

export const Text = styled.h1(({ theme }) => ({
  fontSize: "2.4rem",
  fontWeight: 400,
  fontFamily: "DM Sans",
  margin: 0,
  transition: "typingTitle 2s cubic-bezier(0.5, 0, 0, 1) 0.3s",

  ".name": {
    fontSize: "3.2rem",
    fontWeight: 600,
  },

  "@keyframe typingTitle": {
    from: {
      transform: "translateY(0)",
    },
    to: {
      transform: "translateY(-100%)",
    },
  },
}));

export const TextProfission = styled.h1(({ theme: { colors } }) => ({
  fontFamily: "DM Sans",
  fontSize: "2.4rem",
  fontWeight: 400,
  borderRight: `2px solid ${colors.primaryLight}`,
  overflow: "hidden",
  whiteSpace: "nowrap",
  margin: 0,

  animation:
    "blinkCursor 800ms steps(80)  infinite normal, typing 4s steps(80) 1s normal both",

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
}));
