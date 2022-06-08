import Content from "components/Content";
import Divider from "components/Divider";
import { knowledge } from "constants/knowledge";
import * as S from "./Knowledge.style";

const Knowledge = () => {
  return (
    <S.KnowledgeContainer id="conhecimentos">
      <Content>
        <S.Section>
          <S.ContainerText>
            <h2>Conhecimentos</h2>
            <Divider />
          </S.ContainerText>

          <S.Skills>
            <S.Description>
              <p className="changeDescription">
                *passe o cursor do mouse no card para ler*
              </p>
            </S.Description>

            <S.SkillsCards>
              {knowledge.map((knowledge, index) => (
                <S.SkillContent key={index}>
                  <p>{knowledge.name}</p>
                  <img
                    src={require(`assets/icons/${knowledge.img}`)}
                    width="60px"
                    height="60px"
                    alt={`ícone do ${knowledge.name}`}
                  />
                </S.SkillContent>
              ))}
            </S.SkillsCards>
          </S.Skills>
        </S.Section>
      </Content>
    </S.KnowledgeContainer>
  );
};

export default Knowledge;
