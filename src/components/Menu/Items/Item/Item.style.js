import styled from "styled-components";

export const Item = styled.li({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  cursor: "pointer",
  paddingBottom: "46px",
});

export const Link = styled.a(({ theme: { colors } }) => ({
  cursor: "pointer",
  overflow: "hidden",
  textDecoration: "none",
  boxSizing: "border-box",
  height: "100%",
  fontSize: "2.1rem",
  color: colors.grayLight,
}));

export const Section = styled.div({
  display: "inline-flex",
  alignItems: "center",
  width: "100%",
  height: "100%",
});
