import { useState } from "react";
import * as S from "./style";

export default function UserManagement() {
  const [userState, steState] = useState(0);

  const onClickUserStatus = (e) => {
    steState(e.currentTarget.id);
    console.log(e.currentTarget.id);
  };

  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <S.PageTitle>User Management</S.PageTitle>
        <S.BoxTitle>회원 리스트</S.BoxTitle>
        <S.BoxSearch placeholder="회원 정보를 검색하세요." />
        <S.Table>
          <S.Thead>
            <S.TableRow>
              <S.TableHead>상태</S.TableHead>
              <S.TableHead>닉네임</S.TableHead>
              <S.TableHead>등급</S.TableHead>
              <S.TableHead>관심 장르</S.TableHead>
              <S.TableHead>대여 여부</S.TableHead>
              <S.TableHead>대여 횟수</S.TableHead>
              <S.TableHead>대여 총액</S.TableHead>
            </S.TableRow>
          </S.Thead>

          <S.Tbody>
            {["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"].map(
              (el, index) => (
                <S.TableRow2 key={index}>
                  <S.TableDaata>
                    <S.UserStatus id={el} onClick={onClickUserStatus}>
                      사용중지
                    </S.UserStatus>
                    <S.Text>
                      {userState === el ? "이용 중지" : "이용 중"}
                    </S.Text>
                  </S.TableDaata>
                  <S.TableDaata>아무게</S.TableDaata>
                  <S.TableDaata>브론즈</S.TableDaata>
                  <S.TableDaata>액션</S.TableDaata>
                  <S.TableDaata>true</S.TableDaata>
                  <S.TableDaata>5</S.TableDaata>
                  <S.TableDaata>200000</S.TableDaata>
                </S.TableRow2>
              )
            )}
          </S.Tbody>

          {/* <tfoot>
            <tr>
              <S.TableHead colspan="4">SUM</S.TableHead>
              <S.TableHead>118</S.TableHead>
            </tr>
          </tfoot> */}
        </S.Table>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
