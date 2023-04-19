import Card from "components/Card";
import styled from "styled-components";

export const KnowledgeContainer = styled.div({
  padding: "80px 0",
  width: "100%",
  height: "auto",
});

export const Section = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  height: "auto",

  ul: { display: "flex", height: "auto", flexWrap: "wrap", gap: "20px" },
});

export const ContainerText = styled.div({
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
});

export const KnowledgeCard = styled(Card)(({ theme: { breakpoints } }) => ({
  flexBasis: "calc(100% - 20px)",
  flexGrow: 1,

  [breakpoints.sm]: {
    flexBasis: "calc(50% - 20px)",
  },

  [breakpoints.lg]: {
    flexBasis: "calc(33% - 20px)",
  },
}));
