import styled from "styled-components";

export const PresentationContainer = styled.div(
  ({ theme: { breakpoints } }) => ({
    padding: "80px 0",
    width: "100%",
    height: "auto",

    [breakpoints.md]: {
      padding: "180px 0 100px",
    },

    [breakpoints.lg]: {
      padding: "80px 0",
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

  [breakpoints.md]: {
    height: "74vh",

    "> div": {
      width: "50%",
    },
  },
}));

export const Text = styled.h1(({ theme: { breakpoints } }) => ({
  margin: 0,
  display: "inline-block",
  fontSize: "1.8rem",
  fontWeight: 400,
  textAlign: "center",
  animation: "appear 4s",

  "@keyframes appear": {
    from: {
      opacity: 0,
      transform: "translateY(-40%)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },

  ".name": {
    fontSize: "2.6rem",
    fontWeight: 600,
  },

  [breakpoints.md]: {
    textAlign: "start",
  },
}));

export const Profission = styled.p(({ theme: { breakpoints, colors } }) => ({
  margin: 0,
  display: "inline-block",
  fontSize: "1.8rem",
  fontWeight: 400,
  textAlign: "center",
  whiteSpace: "nowrap",
  color: colors.grayBrand,

  span: {
    color: colors.primaryLight,
  },

  [breakpoints.md]: {
    textAlign: "start",
  },
}));

export const ContainerMedias = styled.div(({ theme: { breakpoints } }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "20px 0",
  gap: "20px",

  [breakpoints.sm]: {
    flexDirection: "row",
    justifyContent: "center",
  },

  [breakpoints.md]: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
}));

const Button = styled.a(({ theme: { breakpoints } }) => ({
  textDecoration: "none",
  textAlign: "center",
  fontSize: "16px",
  fontWeight: 700,
  width: "100%",
  heigth: "48px",
  padding: "16px",
  wordBreak: "break-word",

  [breakpoints.sm]: {
    width: "180px",
  },

  [breakpoints.md]: {
    padding: "16px 0",
    width: "180px",
  },
}));

export const ContainerCV = styled(Button)(({ theme: { colors } }) => ({
  backgroundColor: colors.primaryLight,
  color: colors.black,
}));

export const ContainerEmail = styled(Button)(({ theme: { colors } }) => ({
  border: `1px solid ${colors.grayBrand}`,
  color: colors.white,
}));

export const AnimationCoding = styled.h1(
  ({ theme: { breakpoints, colors } }) => ({
    display: "none",

    span: {
      fontWeight: 600,
      color: colors.primaryLight,
    },

    [breakpoints.md]: {
      width: "50%",
      paddingLeft: "50px",
      display: "block",
      fontSize: "4.6rem",
      fontWeight: "bold",
      letterSpacing: "0.1rem",
      textAlign: "center",
      overflow: "hidden",
    },
  })
);
