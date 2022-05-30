import Content from "components/Content";
import * as S from "./Presentation.style";

const Presentation = () => {
  return (
    <Content>
      <S.PresentationContainer>
        <S.Section>
          <div>
            <S.Text>
              Olá, eu sou o <br />
              <span className="name">Frank Leonel :)</span>
            </S.Text>
            <S.TextProfission>Front-end developer.</S.TextProfission>
          </div>
          <h1>Teste</h1>
        </S.Section>
      </S.PresentationContainer>
    </Content>
  );
};

export default Presentation;
