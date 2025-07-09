import Content from "components/Content";
import Drawer from "components/Drawer";
import MenuBurguer from "components/MenuBurguer";
import { menuItems } from "constants/menuItems";
import useToggle from "hooks/useToggle";

import * as S from "./Header.style";
import MenuMain from "./MenuMain";
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
