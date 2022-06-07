import github from "assets/images/github.json";
import Card from "components/Card";
import Content from "components/Content";
import Divider from "components/Divider";
import useRepositories from "hooks/useRepositories";
import * as S from "./Projects.style";

const Projects = () => {
  const { repositories } = useRepositories();

  return (
    <S.ProjectsContainer id="projects">
      <Content>
        <S.Section>
          <S.ContainerText>
            <h2>Projetos</h2>
            <Divider />
          </S.ContainerText>

          {!repositories.length ? (
            <S.ContainerLoading>
              <S.Animation
                loop={true}
                play={true}
                animationData={github}
                title="Github"
              />
              <S.Loading>Carregando...</S.Loading>
            </S.ContainerLoading>
          ) : (
            <S.GridProjects>
              {repositories.map((repos, index) => (
                <Card
                  key={index}
                  icon={repos.language}
                  title={repos.name}
                  description={repos.description}
                  url={repos.svn_url}
                  background="secondary"
                />
              ))}
            </S.GridProjects>
          )}
        </S.Section>
      </Content>
    </S.ProjectsContainer>
  );
};

export default Projects;
