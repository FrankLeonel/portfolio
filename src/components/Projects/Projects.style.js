import Lottie from "react-lottie-player";
import styled from "styled-components";

export const ProjectsContainer = styled.div(({ theme }) => ({
  padding: "80px 0",
  width: "100%",
  height: "auto",
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
}));

export const ContainerLoading = styled.div(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
}));

export const Animation = styled(Lottie)(({ theme }) => ({
  width: "120px",
  height: "120px",
}));

export const Loading = styled.h2(({ theme }) => ({
  margin: 0,
  fontSize: "2.0rem",
  fontWeight: 500,
  textAlign: "center",
}));
