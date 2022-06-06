import styled from "styled-components";

export const ProjectsContainer = styled.div(({ theme: { breakpoints } }) => ({
  padding: "80px 0",
  width: "100%",
  height: "auto",

  [breakpoints.lg]: {
    padding: "60px 0 20px",
  },
}));

export const Section = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  height: "auto",
}));

export const ContainerText = styled.div(({ theme }) => ({
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

  // [breakpoints.md]: {
  //   padding: "0 0 30px 60px",
  // },

  // [breakpoints.lg]: {
  //   padding: "60px 0 30px 60px",
  // },
}));

export const GridProjects = styled.ul(({ theme: { breakpoints } }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  gridGap: "20px",
  marginBottom: "10px",
  width: "100%",

  [breakpoints.sm]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  [breakpoints.lg]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },

  // [breakpoints.xl]: {
  //   gridTemplateColumns: "repeat(4, 1fr)",
  // },
}));
