import Content from "components/Content";
import Drawer from "components/Drawer";
import MenuBurguer from "components/MenuBurguer";
import useToggle from "hooks/useToggle";
import * as S from "./Header.style";
import MenuMain from "./MenuMain";

const Header = () => {
  const [showMenu, onToggleMenu] = useToggle();

  const menuItems = [
    {
      label: "Quem sou",
      path: "#about_me",
    },
    {
      label: "Projetos",
      path: "#projects",
    },
    {
      label: "Habilidades",
      path: "#skills",
    },
    {
      label: "Conhecimentos",
      path: "#conhecimentos",
    },
  ];

  return (
    <S.Header>
      <Content>
        <S.Section>
          <S.Title>Portfólio - Frank Leonel</S.Title>
          <MenuBurguer open={showMenu} onClick={onToggleMenu} />
          <MenuMain items={menuItems} />
        </S.Section>
      </Content>

      <Drawer show={showMenu} items={menuItems} onClose={onToggleMenu} />
    </S.Header>
  );
};

export default Header;
