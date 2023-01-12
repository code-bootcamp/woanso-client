import { useMutation } from "@apollo/client";
import { MouseEvent, useState } from "react";
import {
  BLOCK_USER_FOR_ADMIN,
  useMutationBlockUserForAdmin,
} from "../../../commons/hooks/mutaions/useMutationBlockUserForAdmin";
import { useQueryFetchBlockedUsersForAdmin } from "../../../commons/hooks/queries/useQueryFetchBlockedUsersForAdmin";
import * as S from "./style";

export default function UserManagement() {
  const [email, setEmail] = useState("");
  const { data: block } = useQueryFetchBlockedUsersForAdmin();
  console.log(block);

  const onClickUserUnBlock = (e: MouseEvent<HTMLButtonElement>) => {
    setEmail(e.currentTarget.id);
    // const [result] = useMutationBlockUserForAdmin(email);
    // console.log(result);
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
              <S.TableHead>Email</S.TableHead>
              <S.TableHead>Nickname</S.TableHead>
              <S.TableHead>Phone</S.TableHead>
              <S.TableHead>Interest</S.TableHead>
            </S.TableRow>
          </S.Thead>

          <S.Tbody>
            {block?.fetchBlockedUsersForAdmin.map((el: any) => (
              <S.TableRow2 key={el.id}>
                <S.TableDaata>
                  <S.UserStatus id={el.email} onClick={onClickUserUnBlock}>
                    block해제
                  </S.UserStatus>
                  <S.Text>이용 중지</S.Text>
                </S.TableDaata>
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
