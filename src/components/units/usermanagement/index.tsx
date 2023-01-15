import { MouseEvent, useState } from "react";
import { useMutationBlockUserForAdmin } from "../../../commons/hooks/mutaions/useMutationBlockUserForAdmin";
import { useMutationUnblockUserForAdmin } from "../../../commons/hooks/mutaions/useMutationUnblockUserForAdmin";
import {
  FETCH_BLOCKED_USERS_FOR_ADMIN,
  useQueryFetchBlockedUsersForAdmin,
} from "../../../commons/hooks/queries/useQueryFetchBlockedUsersForAdmin";
import { useQueryFetchUsersForAdmin } from "../../../commons/hooks/queries/useQueryFetchUsersForAdmin";
import * as S from "./style";

export default function UserManagement() {
  const [email, setEmail] = useState("");
  const { data: Users } = useQueryFetchBlockedUsersForAdmin();
  const [blockUserForAdmin] = useMutationBlockUserForAdmin();
  const [unblockUserForAdmin] = useMutationUnblockUserForAdmin();

  console.log(Users);

  const onClickBlockUser = async (e: MouseEvent<HTMLButtonElement>) => {
    const result = await blockUserForAdmin({
      variables: {
        email: e.currentTarget.id,
      },
      refetchQueries: [{ query: FETCH_BLOCKED_USERS_FOR_ADMIN }],
    });
    console.log(result);
  };

  const onClickUnblockUser = async (e: MouseEvent<HTMLButtonElement>) => {
    const result = await unblockUserForAdmin({
      variables: {
        email: e.currentTarget.id,
      },
      refetchQueries: [{ query: FETCH_BLOCKED_USERS_FOR_ADMIN }],
    });
    console.log(result);
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
              <S.TableHead>Status</S.TableHead>
              <S.TableHead>사용/정지</S.TableHead>
              <S.TableHead>Email</S.TableHead>
              <S.TableHead>Nickname</S.TableHead>
              <S.TableHead>Phone</S.TableHead>
              <S.TableHead>Interest</S.TableHead>
            </S.TableRow>
          </S.Thead>

          <S.Tbody>
            {Users?.fetchBlockedUsersForAdmin.map((el: any) => (
              <S.TableRow2 key={el.id}>
                <S.TableDaata>
                  <S.UserStatus id={el.email} onClick={onClickBlockUser}>
                    유저 정지
                  </S.UserStatus>
                  <S.UserStatus2 id={el.email} onClick={onClickUnblockUser}>
                    정지 풀기
                  </S.UserStatus2>
                </S.TableDaata>
                <S.TableDaata>사용</S.TableDaata>
                <S.TableDaata>{el.email}</S.TableDaata>
                <S.TableDaata>{el.nickname}</S.TableDaata>
                <S.TableDaata>{el.phone}</S.TableDaata>
                <S.TableDaata>{el.interest}</S.TableDaata>
              </S.TableRow2>
            ))}
          </S.Tbody>

          {/* <tfoot>
            <tr>
              <S.TableHead colSpan={5}>SUM</S.TableHead>
              <S.TableHead>{}</S.TableHead>
            </tr>
          </tfoot> */}
        </S.Table>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
