import { ChangeEvent, MouseEvent, useState } from "react";
import { useMutationBlockUserForAdmin } from "../../../commons/hooks/mutaions/useMutationBlockUserForAdmin";
import { useMutationUnblockUserForAdmin } from "../../../commons/hooks/mutaions/useMutationUnblockUserForAdmin";
import {
  FETCH_BLOCKED_USERS_FOR_ADMIN,
  useQueryFetchBlockedUsersForAdmin,
} from "../../../commons/hooks/queries/useQueryFetchBlockedUsersForAdmin";
import { useQueryFetchUsersForAdmin } from "../../../commons/hooks/queries/useQueryFetchUsersForAdmin";
import { useQuerySearchUserForAdmin } from "../../../commons/hooks/queries/useQuerySearchUserForAdmin";
import * as S from "./style";

export default function UserManagement() {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const { data: Users } = useQueryFetchUsersForAdmin();
  const { data: Blocked } = useQueryFetchBlockedUsersForAdmin();
  const [blockUserForAdmin] = useMutationBlockUserForAdmin();
  const [unblockUserForAdmin] = useMutationUnblockUserForAdmin();
  const { data: Searched } = useQuerySearchUserForAdmin(nickname);

  const onClickBlockUser = async (e: MouseEvent<HTMLButtonElement>) => {
    const result = await blockUserForAdmin({
      variables: {
        email: e.currentTarget.id,
      },
      refetchQueries: [{ query: FETCH_BLOCKED_USERS_FOR_ADMIN }],
    });
  };

  const onClickUnblockUser = async (e: MouseEvent<HTMLButtonElement>) => {
    await unblockUserForAdmin({
      variables: {
        email: e.currentTarget.id,
      },
      refetchQueries: [{ query: FETCH_BLOCKED_USERS_FOR_ADMIN }],
    });
  };

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.currentTarget.value);
  };

  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <S.PageTitle>User Management</S.PageTitle>
        <S.BoxTitle>회원 리스트</S.BoxTitle>
        <S.BoxSearch
          type="text"
          placeholder="회원 정보를 검색하세요."
          onChange={onChangeSearch}
        />

        <S.Table>
          <S.Thead>
            <S.TableRow>
              <S.TableHead>Status</S.TableHead>
              <S.TableHead>사용/정지</S.TableHead>
              <S.TableHead>Email</S.TableHead>
              <S.TableHead>Nickname</S.TableHead>
              <S.TableHead>Phone</S.TableHead>
              <S.TableHead>Interest</S.TableHead>
            </S.TableRow>
          </S.Thead>

          <S.Tbody>
            {Users?.fetchUsersForAdmin.map((el: any) => (
              <S.TableRow2 key={el.id}>
                <S.TableData>
                  <S.UserStatus id={el.email} onClick={onClickBlockUser}>
                    유저 정지
                  </S.UserStatus>
                  {/* <S.UserStatus2 id={el.email} onClick={onClickUnblockUser}>
                    정지 풀기
                  </S.UserStatus2> */}
                </S.TableData>
                <S.TableData>사용</S.TableData>
                <S.TableData>{el.email}</S.TableData>
                <S.TableData>{el.nickname}</S.TableData>
                <S.TableData>{el.phone}</S.TableData>
                <S.TableData>{el.interest}</S.TableData>
              </S.TableRow2>
            ))}
          </S.Tbody>
        </S.Table>

        <S.BoxTitle>중지 된 회원 리스트</S.BoxTitle>
        <S.Table>
          <S.Thead>
            <S.TableRow>
              <S.TableHead>Status</S.TableHead>
              <S.TableHead>사용/정지</S.TableHead>
              <S.TableHead>Email</S.TableHead>
              <S.TableHead>Nickname</S.TableHead>
              <S.TableHead>Phone</S.TableHead>
              <S.TableHead>Interest</S.TableHead>
            </S.TableRow>
          </S.Thead>

          <S.Tbody>
            {Blocked?.fetchBlockedUsersForAdmin.map((el: any) => (
              <S.TableRow2 key={el.id}>
                <S.TableData>
                  <S.UserStatus2 id={el.email} onClick={onClickUnblockUser}>
                    정지 풀기
                  </S.UserStatus2>
                </S.TableData>
                <S.TableData>정지</S.TableData>
                <S.TableData>{el.email}</S.TableData>
                <S.TableData>{el.nickname}</S.TableData>
                <S.TableData>{el.phone}</S.TableData>
                <S.TableData>{el.interest}</S.TableData>
              </S.TableRow2>
            ))}
          </S.Tbody>
        </S.Table>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
