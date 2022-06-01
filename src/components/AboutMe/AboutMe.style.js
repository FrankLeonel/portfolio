import styled from "styled-components";

export const AboutMeContainer = styled.div(
  ({ theme: { breakpoints, colors } }) => ({
    padding: "80px 0",
    backgroundColor: colors.secondary,

    [breakpoints.lg]: {
      padding: "80px 0 20px",
    },
  })
);

export const Section = styled.div(({ theme: { breakpoints } }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "70vh",

  "> div": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "auto",
  },

  "> *": {
    flex: 0,
    "&:first-child": {
      flexBasis: "100%",
    },
  },

  [breakpoints.md]: {
    height: "74vh",

    "> *": {
      flex: 1,
      "&:first-child": {
        flexBasis: "30%",
      },
    },
  },
}));
