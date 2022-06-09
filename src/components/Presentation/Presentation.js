import Content from "components/Content";
import file from "files/cv.pdf";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import * as S from "./Presentation.style";

const Presentation = () => {
  const { text: profission } = useTypewriter({
    words: ["Front-end developer"],
    loop: 0,
    typeSpeed: 200,
    deleteSpeed: 100,
    delaySpeed: 1500,
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
              <S.Profission>
                {profission}
                <span>
                  <Cursor />
                </span>
              </S.Profission>
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
            Coding is{" "}
            <span>
              <Typewriter
                words={["hard", "fun", "a journey", "LIFE!"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={500}
              />
            </span>
          </S.AnimationCoding>
        </S.Section>
      </Content>
    </S.PresentationContainer>
  );
};

export default Presentation;
