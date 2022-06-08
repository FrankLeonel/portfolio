import * as S from "./TextDataRounded.style";

const TextDataRounded = ({ icon, title, description }) => {
  return (
    <S.TextDataRoundedContainer>
      <S.RoundedIcon>{icon}</S.RoundedIcon>
      <S.ContainerText>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.ContainerText>
    </S.TextDataRoundedContainer>
  );
};

export default TextDataRounded;
