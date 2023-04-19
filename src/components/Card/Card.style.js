import styled, { css } from "styled-components";

const textWrapping = css`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
`;

export const CardContainer = styled.li(
  ({ theme: { breakpoints, colors }, background, orientation, ...props }) => ({
    display: "flex",
    flexDirection: "column",
    padding: "20px 10px",
    width: "inherit",
    height: "auto",
    minHeight: "380px",
    listStyleType: "none",
    backgroundColor: background,

    border: `1px solid ${colors.primary}`,
    transition: "1s all ease",
    overflowY: "auto",

    "> div": {
      display: "flex",
      flexDirection: orientation,
      gap: "24px",
      alignItems: orientation === "row" ? "center" : "flex-start",
      paddingBottom: "24px",
    },

    h3: {
      margin: 0,
      fontSize: "1.8rem",
      fontWeight: 500,
      wordBreak: "break-word",
      textAlign: "start",
    },

    p: {
      margin: 0,
      fontSize: "1.5rem",
      lineHeight: "34px",
      color: colors.grayBrand,
      textWrapping,
    },

    [breakpoints.md]: {
      padding: "32px",
    },

    ...props,
  })
);

export const Icon = styled.img(({ theme: { breakpoints } }) => ({
  width: "20%",
  height: "100%",

  [breakpoints.md]: {
    width: "26%",
  },
}));
