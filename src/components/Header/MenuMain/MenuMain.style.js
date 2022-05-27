import styled from "styled-components";

export const Items = styled.ul(({ theme: { breakpoints } }) => ({
  display: "none",

  [breakpoints.md]: {
    display: "flex",
    listStyle: "none",
    alignItems: "center",
  },

  "&::after": {
    content: "",
    background: "rgba(255, 193, 5, 1)",
    position: "absolute",
    top: "60%",
    left: "-15%",
    width: "20vw",
    height: "20vw",
    borderRadius: "50%",
  },

  "&:hover": {
    "&::after": {
      transform: "scale(1.2)",
    },
  },
}));

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  margin-left: 48px;

  :after {
    content: "";
    display: block;
    height: 1px;
    width: 100%;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    background: -webkit-gradient(
      linear,
      right top,
      left top,
      from(#70c5fe),
      to(#140d26)
    );
    background: linear-gradient(270deg, #70c5fe 0%, #140d26 100%);
    -webkit-transform-origin: bottom right;
    transform-origin: bottom right;
    transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1),
      -webkit-transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover:after {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transform-origin: bottom left;
    transform-origin: bottom left;
  }
`;

export const Link = styled.a(({ theme: { breakpoints, colors } }) => ({
  display: "flex",
  cursor: "pointer",
  overflow: "hidden",
  textDecoration: "none",
  boxSizing: "border-box",
  fontSize: "1.1rem",
  color: colors.grayBrand,
  borderBottom: "3px solid transparent",

  "&:hover": {
    color: colors.white,
    transition: "all 1s ease-out",
  },

  [breakpoints.lg]: {
    fontSize: "1.4rem",
  },
}));
