import Content from "components/Content";
import Divider from "components/Divider";
import { skills } from "constants/skills";
import * as S from "./Skills.style";

const Skills = () => {
  return (
    <S.SkillsContainer id="skills">
      <Content>
        <S.Section>
          <S.ContainerText>
            <h2>Habilidades</h2>
            <Divider />
          </S.ContainerText>

          <ul>
            {skills.map((skill, index) => (
              <S.SkillCard
                key={index}
                icon={skill.img}
                title={skill.name}
                description={skill.description}
                background="primary"
                orientation="column"
              />
            ))}
          </ul>
        </S.Section>
      </Content>
    </S.SkillsContainer>
  );
};

export default Skills;
