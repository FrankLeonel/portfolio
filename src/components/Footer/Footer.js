import Content from "components/Content";
import * as S from "./Footer.style";

const Footer = () => {
  return (
    <Content>
      <S.FooterContainer>
        <S.DevIcon />
        Feito por <span>&nbsp;Frank Leonel</span>
      </S.FooterContainer>
    </Content>
  );
};

export default Footer;
