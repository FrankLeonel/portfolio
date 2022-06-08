import { ReactComponent as CssIcon } from "assets/icons/css.svg";
import { ReactComponent as EmailIcon } from "assets/icons/email.svg";
import { ReactComponent as GitHubIcon } from "assets/icons/github.svg";
import { ReactComponent as HtmlIcon } from "assets/icons/html.svg";
import { ReactComponent as InstagramIcon } from "assets/icons/instagram.svg";
import { ReactComponent as JSIcon } from "assets/icons/javascript.svg";
import { ReactComponent as LinkedinIcon } from "assets/icons/linkedin.svg";
import { ReactComponent as ProgrammerIcon } from "assets/icons/programmer.svg";
import { ReactComponent as ReactIcon } from "assets/icons/react.svg";
import Content from "components/Content";
import Divider from "components/Divider";
import TextDataRounded from "components/TextDataRounded";
import * as S from "./AboutMe.style";

const AboutMe = () => {
  return (
    <S.AboutMeContainer id="about_me">
      <Content>
        <S.Section>
          <S.ContainerImage>
            <ProgrammerIcon className="programmer" width="60%" height="60%" />
            <S.AboutFigure>
              <ReactIcon
                className="figure_one icon_one"
                width={50}
                height={50}
              />
            </S.AboutFigure>
            <S.AboutFigure>
              <JSIcon className="figure_two icon_two" width={50} height={50} />
            </S.AboutFigure>
            <S.AboutFigure>
              <HtmlIcon
                className="figure_three icon_three"
                width={50}
                height={50}
              />
            </S.AboutFigure>
            <S.AboutFigure>
              <CssIcon
                className="figure_four icon_four"
                width={50}
                height={50}
              />
            </S.AboutFigure>
          </S.ContainerImage>

          <S.ContainerText>
            <h2>Quem sou</h2>
            <Divider />
            <p>
              Meu nome é Frank Leonel, sou técnico de informática e graduando em
              Sistemas de Informação pela Universidade Federal do Ceará - Campus
              Crateús. Atualmente, trabalho como desenvolvedor front-end, mas
              tenho conhecimento no desenvolvimento de interfaces mobile (Nativo
              e Híbrido).
            </p>
          </S.ContainerText>
        </S.Section>
        <S.GridMedias>
          <TextDataRounded
            icon={<EmailIcon />}
            title="Email"
            description="franksleonel@gmail.com"
          />
          <TextDataRounded
            icon={<InstagramIcon />}
            title="Instagram"
            description="@frankleonel"
          />
          <TextDataRounded
            icon={<GitHubIcon />}
            title="GitHub"
            description="github.com/FrankLeonel"
          />
          <TextDataRounded
            icon={<LinkedinIcon />}
            title="Linkedin"
            description="linkedin.com/in/frankleonel/"
          />
        </S.GridMedias>
      </Content>
    </S.AboutMeContainer>
  );
};

export default AboutMe;
