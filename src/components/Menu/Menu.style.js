import styled, { css, keyframes } from "styled-components";

const moveToLeft = keyframes`
  from {        
    transform: translateX(-100%);    
  }
  to {        
    visibility: visible;
    transform: translateX(0%);
  }  
`;

const transitionBackward = () => css`
  animation: ${moveToLeft} 400ms ease-in-out;
`;

export const Container = styled.div(({ theme: { colors } }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  backgroundColor: colors.primary,
  overflow: "auto",
}));

export const Menu = styled.div(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "calc(100% - 70px)",
  overflow: "auto",

  "&.backward": {
    transitionBackward,
  },
}));
