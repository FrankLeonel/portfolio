import { ReactComponent as CssIcon } from "assets/icons/css.svg";
import { ReactComponent as HtmlIcon } from "assets/icons/html5.svg";
import { ReactComponent as JSIcon } from "assets/icons/js.svg";
import { ReactComponent as ProgrammerIcon } from "assets/icons/programmer.svg";
import { ReactComponent as ReactIcon } from "assets/icons/react.svg";
import Content from "components/Content";
import Divider from "components/Divider";
import * as S from "./AboutMe.style";

const AboutMe = () => {
  return (
    <S.AboutMeContainer id="about_me">
      <Content>
        <S.Section>
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

          <S.ContainerText>
            <h2>Quem sou</h2>
            <Divider />
            <p>
              Meu nome é Frank Leonel, graduando em Sistemas de Informação pela
              Universidade Federal do Ceará - Campus Crateús. Atualmente,
              trabalho como desenvolvedor front-end, mas tenho conhecimento no
              desenvolvimento de interfaces mobile.
            </p>
          </S.ContainerText>
        </S.Section>
      </Content>
    </S.AboutMeContainer>
  );
};

export default AboutMe;
