import * as S from "./MenuBurguer.style";

const MenuBurguer = ({ open, onClick }) => {
  return (
    <S.MenuBurguer open={open} onClick={onClick}>
      <div />
      <div />
      <div />
    </S.MenuBurguer>
  );
};

export default MenuBurguer;
