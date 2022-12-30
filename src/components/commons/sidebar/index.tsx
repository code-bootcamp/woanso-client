import { useState } from "react";
import * as S from "./style";

export default function SideBar() {
  const [open, setOpen] = useState(false);

  const onClickMoveTokakao = () => {
    let pageUrl = "https://open.kakao.com/o/s8iiqXVe";
    document.location.href = pageUrl;
  };
  const onClickOpenMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <S.Box onClick={onClickMoveTokakao}>
          <S.PhoneIcon />
        </S.Box>
        <S.BoxLong open={open}>
          <S.Box onClick={onClickOpenMenu}>
            {open ? <S.MinusIcon /> : <S.PlusIcon />}
          </S.Box>
          {open && (
            <S.MenuLists>
              <S.MenuList>
                {["메인", "대여", "커뮤니티", "이벤트"].map((el) => (
                  <S.MenuList>
                    <S.Text>{el}</S.Text>
                  </S.MenuList>
                ))}
              </S.MenuList>
            </S.MenuLists>
          )}
        </S.BoxLong>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
