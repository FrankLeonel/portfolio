// import PngPresentation from "assets/images/presentation.png";
// import WebpPresentation from "assets/images/presentation.webp";
import { ReactComponent as CssIcon } from "assets/icons/css.svg";
import { ReactComponent as HtmlIcon } from "assets/icons/html5.svg";
import { ReactComponent as JSIcon } from "assets/icons/js.svg";
import { ReactComponent as ProgrammerIcon } from "assets/icons/programmer.svg";
import { ReactComponent as ReactIcon } from "assets/icons/react.svg";
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
          <S.ContainerImage>
            <ProgrammerIcon className="programmer" />
            <S.AboutFigure>
              <ReactIcon className="figure_one icon_one" />
            </S.AboutFigure>
            <S.AboutFigure>
              <JSIcon className="figure_two icon_two" />
            </S.AboutFigure>
            <S.AboutFigure>
              <HtmlIcon className="figure_three icon_three" />
            </S.AboutFigure>
            <S.AboutFigure>
              <CssIcon className="figure_four icon_four" />
            </S.AboutFigure>
          </S.ContainerImage>
          {/* <S.ImagePresentation
            src={WebpPresentation}
            webp={WebpPresentation}
            fallback={PngPresentation}
            alt="Desenvolvedor"/> */}
        </S.Section>
      </Content>
    </S.PresentationContainer>
  );
};

export default Presentation;
