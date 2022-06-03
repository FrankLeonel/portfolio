import styled from "styled-components";

export const Separator = styled.hr(({ theme: { colors } }) => ({
  margin: "10px 0 24px",
  width: "80px",
  height: "6px",
  background: colors.white,
}));
