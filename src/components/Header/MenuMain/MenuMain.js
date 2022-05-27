import * as S from "./MenuMain.style";

const MenuMain = ({ items = [] }) => {
  return (
    <S.Items>
      {items.map((item) => (
        <S.Item key={item.label}>
          <S.Link href={item.path} onClick={item.onClick}>
            {item.label}
          </S.Link>
        </S.Item>
      ))}
    </S.Items>
  );
};

export default MenuMain;
