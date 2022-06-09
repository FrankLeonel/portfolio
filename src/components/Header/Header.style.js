import { ReactComponent as CrossIcon } from "assets/icons/cross-icon.svg";
import { ReactComponent as MenuBurger } from "assets/icons/menu-icon.svg";
import styled from "styled-components";

export const Header = styled.header(({ theme: { colors } }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 9999,
  width: "100%",
  padding: "20px 0",
  backgroundColor: colors.primary,
}));

export const Section = styled.div(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const Title = styled.strong(({ theme: { breakpoints } }) => ({
  fontSize: "17px",
  userSelect: "none",
  textAlign: "center",

  [breakpoints.lg]: {
    fontSize: "26px",
  },
}));

export const MenuIcon = styled(MenuBurger)(
  ({ theme: { breakpoints, colors } }) => ({
    display: "block",
    width: "26px",
    height: "26px",
    cursor: "pointer",
    path: {
      fill: colors.white,
    },

    [breakpoints.md]: {
      display: "none",
    },
  })
);

export const ClosedIcon = styled(CrossIcon)(
  ({ theme: { breakpoints, colors } }) => ({
    display: "block",
    width: "26px",
    height: "26px",
    cursor: "pointer",
    path: {
      fill: colors.white,
    },

    [breakpoints.md]: {
      display: "none",
    },
  })
);
