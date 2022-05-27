import Menu from "components/Menu";
import React, { useEffect } from "react";
import * as S from "./Drawer.style";

const Drawer = ({ show, title, items = [], onClose }) => {
  useEffect(() => {
    document.body.style.overflowY = show ? "hidden" : "auto";
    return () => {
      document.body.style.overflowY = "unset";
    };
  }, [show]);

  return (
    <>
      <S.Drawer show={show} className="active">
        <Menu title={title} items={items} onClose={onClose} />
      </S.Drawer>
    </>
  );
};

export default Drawer;
