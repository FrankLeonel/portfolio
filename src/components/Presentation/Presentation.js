import Content from "components/Content";
import file from "files/cv.pdf";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import * as S from "./Presentation.style";

const Presentation = () => {
  const { text } = useTypewriter({
    words: ["hard", "fun", "a journey", "LIFE!"],
    loop: 0,
    typeSpeed: 160,
    deleteSpeed: 100,
    delaySpeed: 2000,
  });

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

          <S.AnimationCoding>
            Coding is <span>{text}</span>
            <Cursor />
          </S.AnimationCoding>
        </S.Section>
      </Content>
    </S.PresentationContainer>
  );
};

export default Presentation;
