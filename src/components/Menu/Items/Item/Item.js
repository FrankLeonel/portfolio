import * as S from "./Item.style";

const Item = ({ label, path, onClick }) => {
  return (
    <S.Item>
      <S.Link href={path} onClick={onClick}>
        <S.Section>{label}</S.Section>
      </S.Link>
    </S.Item>
  );
};

export default Item;
