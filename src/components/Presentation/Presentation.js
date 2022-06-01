import PngPresentation from "assets/images/presentation.png";
import WebpPresentation from "assets/images/presentation.webp";
import Content from "components/Content";
import file from "files/cv.pdf";
import * as S from "./Presentation.style";

const Presentation = () => {
  return (
    <S.PresentationContainer>
      <Content>
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

          <S.ImagePresentation
            src={WebpPresentation}
            webp={WebpPresentation}
            fallback={PngPresentation}
            alt="Desenvolvedor"
          />
        </S.Section>
      </Content>
    </S.PresentationContainer>
  );
};

export default Presentation;
