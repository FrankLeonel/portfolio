import styled from "styled-components";

export const Items = styled.ul(({ theme: { colors } }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "76px 0",
  backgroundColor: colors.primary,
}));
