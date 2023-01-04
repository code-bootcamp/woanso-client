import { useState } from "react";
import * as S from "./styles";

export default function IdpwFind() {
  const [qqq, setQqq] = useState<boolean>(true);
  const [ccc, setCcc] = useState<boolean>(false);
  const [bbb, setBbb] = useState<boolean>(true);

  const onClickEmail = () => {
    console.log("이메일 찾아줘!!");
    setCcc(false);
    setQqq(true);
    setBbb(true);
  };

  const onClickPassword = () => {
    console.log("비밀번호 찾아줘!!");
    setQqq(false);
    setCcc(true);
    setBbb(false);
  };

  return (
    <S.OutWrapper>
      <S.InnerWrapper>
        <S.IdpwFindWrapper>
          <S.TitleWrapper>
            <S.Title>이메일 / 비밀번호 찾기</S.Title>
          </S.TitleWrapper>
          <S.NavWrapper>
            <S.Nav onClick={onClickEmail} qqq={qqq}>
              이메일 찾기
            </S.Nav>
            <S.Nav2 onClick={onClickPassword} ccc={ccc}>
              비밀번호 찾기
            </S.Nav2>
          </S.NavWrapper>
          {qqq ? (
            <S.InputWrapper onClick={onClickEmail} bbb={bbb}>
              <S.Input
                type="text"
                placeholder="전화번호 입력('-'제외)"
              ></S.Input>
            </S.InputWrapper>
          ) : (
            <S.InputWrapper>
              <S.Input type="text" placeholder="이메일 입력"></S.Input>
              <S.CheckWrapper>
                <S.CheckWrapper2>
                  <S.Input2
                    type="text"
                    placeholder="전화번호 입력('-'제외)"
                  ></S.Input2>
                  <S.Button>확인</S.Button>
                </S.CheckWrapper2>
                <S.Line />
              </S.CheckWrapper>
              <S.Input type="password" placeholder="새 비밀번호 입력"></S.Input>
              <S.Input type="password" placeholder="새 비밀번호 확인"></S.Input>
            </S.InputWrapper>
          )}
          <S.ButtonWrapper>
            <S.CheckButton>확인</S.CheckButton>
          </S.ButtonWrapper>
        </S.IdpwFindWrapper>
      </S.InnerWrapper>
    </S.OutWrapper>
  );
}
