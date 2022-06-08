import styled from "styled-components";

export const KnowledgeContainer = styled.div(({ theme }) => ({
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

export const Skills = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flexWrap: "wrap",
  height: "auto",
  width: "100%",
  padding: "20px 0 0",
}));

export const Description = styled.div(({ theme: { breakpoints, colors } }) => ({
  width: "100%",
  minHeight: "300px",

  p: {
    transition: "2s all ease",
    maxWidth: "500px",
    lineHeight: "3.2rem",
    color: colors.grayBrand,
    fontFamily: "DM Sans",
    fontSize: "1.4rem",
  },

  [breakpoints.md]: {
    width: "50%",
  },
}));

export const SkillsCards = styled.div(({ theme: { breakpoints } }) => ({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "24px",

  [breakpoints.md]: {
    width: "50%",
  },
}));

export const SkillContent = styled.div(
  ({ theme: { breakpoints, colors } }) => ({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "40%",
    flexGrow: 1,
    height: "130px",
    backgroundColor: colors.secondary,
    position: "relative",
    border: `1px solid ${colors.primary}`,
    transition: "1s all ease",
  })
);
