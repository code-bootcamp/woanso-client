import { useState } from "react";
import * as S from "./style";

export default function KakaoAsk() {
  const [open, setOpen] = useState(false);

  const onClickOpenMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <S.Box>
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
