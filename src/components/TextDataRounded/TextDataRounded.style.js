import styled from "styled-components";

export const TextDataRoundedContainer = styled.li(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
  listStyle: "none",
}));

export const RoundedIcon = styled.div(({ theme: { colors } }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: colors.primary,
  border: `1px solid ${colors.white}`,
  padding: "14px",
  borderRadius: "50%",

  svg: {
    width: "27px",
    height: "27px",
    path: {
      fill: colors.white,
      stroke: colors.primary,
    },
  },
}));

export const ContainerText = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "inherit",
  gap: "2px",
}));

export const Title = styled.h3(({ theme }) => ({
  margin: 0,
  textAlign: "center",
  fontSize: "1.5rem",
}));

export const Description = styled.p(({ theme: { colros } }) => ({
  margin: 0,
  textAlign: "center",
  fontSize: "1.2rem !important",
}));
