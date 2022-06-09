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

          <ul>
            {knowledge.map((knowledge, index) => (
              <S.KnowledgeCard
                key={index}
                icon={knowledge.img}
                title={knowledge.name}
                description={knowledge.description}
                background="secondary"
                orientation="column"
              />
            ))}
          </ul>
        </S.Section>
      </Content>
    </S.KnowledgeContainer>
  );
};

export default Knowledge;
