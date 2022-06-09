import styled from "styled-components";

export const Items = styled.ul(({ theme: { breakpoints } }) => ({
  display: "none",

  [breakpoints.md]: {
    display: "flex",
    listStyle: "none",
    alignItems: "center",
  },

  "> *": {
    "&:first-child": {
      marginLeft: "10px",
    },
  },
}));

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  margin-left: 20px;

  ${(props) => props.theme.breakpoints.xl} {
    margin-left: 48px;
  }

  :after {
    content: "";
    display: block;
    height: 1px;
    width: 100%;
    transform: scaleX(0);
    background: linear-gradient(
      270deg,
      ${(props) => props.theme.colors.primaryLight} 0%,
      ${(props) => props.theme.colors.primary} 100%
    );
    transform-origin: bottom right;
    transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1),
      -webkit-transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover:after {
    transform: scaleX(1);
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
