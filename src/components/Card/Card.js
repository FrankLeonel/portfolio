import { useTheme } from "styled-components";
import * as S from "./Card.style";

const Card = ({
  icon,
  title,
  description,
  url,
  background,
  orientation = "row",
  ...props
}) => {
  const theme = useTheme();
  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };
  return (
    <S.CardContainer
      onClick={() => openInNewTab(url)}
      background={theme.colors[background]}
      orientation={orientation}
      {...props}
    >
      <div>
        <S.Icon
          src={require(`assets/icons/${
            icon ? icon.toLowerCase() + ".svg" : "css.svg"
          }`)}
          alt={`ícone do ${icon ? icon : "css"}`}
          width="20%"
          height="100%"
        />

        <h3>{title}</h3>
      </div>
      <p>
        {description !== null
          ? description
          : "Este projeto ainda não contém nenhuma descrição."}
      </p>
    </S.CardContainer>
  );
};

export default Card;
