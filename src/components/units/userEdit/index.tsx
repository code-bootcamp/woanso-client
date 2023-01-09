import { useState } from "react";
import UserEditPw from "../userEditPw";
import * as S from "./style";

export default function UserEdit() {
  const [edit, setEdit] = useState(false);

  const onClickMoveToEdit = () => {
    setEdit(true);
  };

  return (
    <>
      {edit ? (
        <UserEditPw />
      ) : (
        <S.UserEditWrap>
          <S.TitleWrapper>
            <S.Title>비밀번호 확인</S.Title>
            <S.TitleSub>
              개인정보보호를 위해 비밀번호를 입력해 주세요.
            </S.TitleSub>
          </S.TitleWrapper>

          <S.InputPassWord type="password" placeholder="비밀번호 확인" />

          <S.Button onClick={onClickMoveToEdit}>확인</S.Button>
        </S.UserEditWrap>
      )}
    </>
  );
}
