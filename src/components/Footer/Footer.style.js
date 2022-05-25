import { ReactComponent as Dev } from "assets/icons/dev.svg";
import styled from "styled-components";
import hexToRgba from "utils/hexToRgba";

export const FooterContainer = styled.footer(({ theme: { colors } }) => ({
  borderTop: `1px solid ${hexToRgba(colors.white, 0.2)}`,
  padding: "24px 0 40px",
  fontFamily: "DM Sans, sans-serif",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "18px",

  span: {
    fontWeight: 700,
    color: colors.primaryLight,
  },
}));

export const DevIcon = styled(Dev)(({ theme: { colors } }) => ({
  path: {
    fill: colors.white,
  },
  width: "24px",
  height: "24px",
  marginRight: "8px",
}));
