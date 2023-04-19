import { menuItems } from "constants/menuItems";
import Content from "components/Content";
import Drawer from "components/Drawer";
import MenuBurguer from "components/MenuBurguer";
import MenuMain from "./MenuMain";
import useToggle from "hooks/useToggle";

import * as S from "./Header.style";
const Header = () => {
  const [showMenu, onToggleMenu] = useToggle();

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
