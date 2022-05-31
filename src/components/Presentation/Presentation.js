import Content from "components/Content";
import file from "files/cv.pdf";
import * as S from "./Presentation.style";

const Presentation = () => {
  return (
    <Content>
      <S.PresentationContainer>
        <S.Section>
          <div>
            <S.Text>
              Olá, eu sou
              <br />
              <span className="name">Frank Leonel :)</span>
              <br />
              <S.Profission>Front-end developer.</S.Profission>
            </S.Text>
            <S.ContainerMedias>
              <S.ContainerCV href={file} target="_blank" rel="noreferrer">
                Download CV
              </S.ContainerCV>

              <S.ContainerEmail
                href="mailto:franksleonel@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                Entrar em contato
              </S.ContainerEmail>
            </S.ContainerMedias>
          </div>
          <h1>Teste</h1>
        </S.Section>
      </S.PresentationContainer>
    </Content>
  );
};

export default Presentation;
