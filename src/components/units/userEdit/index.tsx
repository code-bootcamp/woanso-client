import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import UserEditPw from "../userEditPw";
import * as S from "./style";

export default function UserEdit({ User }: any) {
  const [edit, setEdit] = useState(false);
  const [phonenum, setPhonenum] = useState("");

  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhonenum(e.target.value);
  };

  const onClickMoveToEdit = () => {
    User?.fetchUserLoggedIn.phone === String(phonenum)
      ? setEdit(true)
      : Modal.error({ content: "본인 확인에 실패했습니다." });
  };

  return (
    <>
      {edit ? (
        <UserEditPw />
      ) : (
        <S.UserEditWrap>
          <S.TitleWrapper>
            <S.Title>본인 확인</S.Title>
            <S.TitleSub>
              개인정보보호를 위해 핸드폰 번호를 입력해 주세요.
            </S.TitleSub>
          </S.TitleWrapper>

          <S.Input
            type="number"
            placeholder="핸드폰 번호 확인"
            onChange={onChangePhone}
          />

          <S.Button onClick={onClickMoveToEdit}>확인</S.Button>
        </S.UserEditWrap>
      )}
    </>
  );
}
