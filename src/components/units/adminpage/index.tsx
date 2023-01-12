import * as S from "./style";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import LogoutConfirmModal from "../../commons/customModal/logoutModal";
import { useQueryFetchUsersForAdmin } from "../../../commons/hooks/queries/useQueryFetchUsersForAdmin";
import { useQueryFetchComics } from "../../../commons/hooks/queries/useQueryFetchComics";

const MenuLists = [
  { id: "rents/new", name: "상품 추가" },
  { id: "usermanagement", name: "유저 게시글 관리" },
  { id: "usermanagement", name: "유저 권한 관리" },
];

export default function AdminpageUI() {
  const router = useRouter();
  const [confirm, setConfirm] = useState<boolean>(false);
  const { data: Users } = useQueryFetchUsersForAdmin();
  const { data: Comics } = useQueryFetchComics();
  console.log(Comics);

  const onClickMoveToPage = (e: MouseEvent<HTMLLIElement>) => {
    router.push(e.currentTarget.id);
  };

  // const [open, setOpen] = useState<boolean>(false);
  // const onClickOpenModal = () => {
  //   setOpen(true);
  // };

  const onClickLogout = () => {
    setConfirm(true);
  };

  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <S.SideWrap>
          <S.UserInfoWrap>
            <S.UserAvatar>
              <S.AvatarImg src="/king.jpeg" />
            </S.UserAvatar>
          </S.UserInfoWrap>

          <S.MenuBarWrap>
            <S.MenuLists>
              {MenuLists.map((el) => (
                <S.MenuList key={el.id} id={el.id} onClick={onClickMoveToPage}>
                  <S.MenuName>{el.name}</S.MenuName>
                </S.MenuList>
              ))}
              {/* <S.MenuList onClick={onClickOpenModal}>
                <S.MenuName>포인트 지불 관리</S.MenuName>
              </S.MenuList>
              <PointChangeModal open={open} setOpen={setOpen} /> */}
              <S.MenuList onClick={onClickLogout}>
                <S.MenuName>로그아웃</S.MenuName>
              </S.MenuList>
              <LogoutConfirmModal confirm={confirm} setConfirm={setConfirm} />
            </S.MenuLists>
          </S.MenuBarWrap>
        </S.SideWrap>

        <S.MainWrap>
          <S.SectionWrap>
            <S.LeftWrap>
              <S.MiniWrap>
                <S.BoxTitle>매출 관리</S.BoxTitle>
                <S.ContentBox>
                  이번 달 매출액 <br /> 100,000
                </S.ContentBox>
                <S.ContentBox>
                  지난 달 매출액 <br /> 0
                </S.ContentBox>
              </S.MiniWrap>

              <S.MiniWrap>
                <S.BoxTitle>상품 관리</S.BoxTitle>

                <S.ContentBox>
                  대여 가능 <br />
                  80
                </S.ContentBox>
                <S.ContentBox>
                  대여 불가
                  <br /> 20
                </S.ContentBox>
              </S.MiniWrap>
            </S.LeftWrap>

            <S.RigthWrap>
              <S.BoxTitle>상품 리스트</S.BoxTitle>
              <S.BoxSearch placeholder="찾으시는 상품을 검색하세요." />
              <S.ItemsWrap>
                {Comics?.fetchComics.map((el: any) => (
                  <S.ItemWrap>
                    <S.ItemImg
                      src={`https://storage.googleapis.com/${el.ISBN}`}
                    />
                    <S.ItemName>{el.title}</S.ItemName>
                  </S.ItemWrap>
                ))}
              </S.ItemsWrap>
            </S.RigthWrap>
          </S.SectionWrap>
          <S.SectionWrap2>
            <S.BoxTitle>회원 리스트</S.BoxTitle>
            <S.BoxSearch placeholder="회원 정보를 검색하세요." />
            <table style={{ width: "100%", textAlign: "left" }}>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>닉네임</th>
                  <th>메일</th>
                  <th>연락처</th>
                  <th>관심 장르</th>
                  <th>ID</th>
                </tr>
              </thead>

              <tbody>
                {Users?.fetchUsersForAdmin.map((el: any, i: number) => (
                  <tr key={el.id}>
                    <th scope="row">{i + 1}</th>
                    <td>{el.nickname}</td>
                    <td>{el.email}</td>
                    <td>{el.phone}</td>
                    <td>{el.interest}</td>
                    <td>{el.id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </S.SectionWrap2>
        </S.MainWrap>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
