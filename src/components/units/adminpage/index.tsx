import * as S from "./style";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { Modal } from "antd";
import { debounce } from "lodash";
import { useMutation } from "@apollo/client";
import { useQueryFetchUsersForAdmin } from "../../../commons/hooks/queries/useQueryFetchUsersForAdmin";
import { useQueryFetchComics } from "../../../commons/hooks/queries/useQueryFetchComics";
import { LogoutForAdmin } from "../../../commons/hooks/mutaions/useMutaionLogoutForAdmin";
import { useQueryAvailableComicsForAdmin } from "../../../commons/hooks/queries/useQueryAvailableComicsForAdmin";
import { useQueryFetchComicsWithTitle } from "../../../commons/hooks/queries/useQueryFetchComicsWithTitle";
import Search from "../../commons/search";

const MenuLists = [
  { id: "/rents/new", name: "상품 추가" },
  { id: "/adminpage/usermanagement", name: "유저 권한 관리" },
];

export default function AdminpageUI() {
  const router = useRouter();
  const [IsSearch, setIsSearch] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const { data: Users } = useQueryFetchUsersForAdmin();
  const { data: availableComics } = useQueryAvailableComicsForAdmin();
  const { data: Comics } = useQueryFetchComics();
  const [logoutForAdmin] = useMutation(LogoutForAdmin);

  const onClickMoveToPage = (e: MouseEvent<HTMLLIElement>) => {
    router.push(e.currentTarget.id);
  };

  const onClickLogout = async () => {
    try {
      await logoutForAdmin();
      Modal.success({
        content: "로그아웃 되었습니다!",
        afterClose() {
          location.reload();
          router.push("/adminlogin");
        },
      });
    } catch (error) {
      Modal.error({ content: "로그아웃에 실패했습니다." });
    }
  };

  const { data: search } = useQueryFetchComicsWithTitle(keyword);
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setIsSearch(true);
    getDebounce(e.currentTarget.value);
  };
  const getDebounce = debounce((value) => {
    setKeyword(value);
  }, 500);

  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <S.SideWrap>
          <S.UserInfoWrap>
            <S.UserAvatar>
              <S.AvatarImg src="/icon/admin.jpeg" />
            </S.UserAvatar>
          </S.UserInfoWrap>

          <S.MenuBarWrap>
            <S.MenuLists>
              {MenuLists.map((el) => (
                <S.MenuList key={el.id} id={el.id} onClick={onClickMoveToPage}>
                  <S.MenuName>{el.name}</S.MenuName>
                </S.MenuList>
              ))}
              <S.MenuList onClick={onClickLogout}>
                <S.MenuName>로그아웃</S.MenuName>
              </S.MenuList>
            </S.MenuLists>
          </S.MenuBarWrap>
        </S.SideWrap>

        <S.SectionsWrap>
          <S.SectionWrap>
            <S.BoxTitle>상품 관리</S.BoxTitle>
            <S.MiniWrap>
              <S.ContentBox>
                대여 가능{" "}
                <span>{availableComics?.availableComicsForAdmin[0]}</span>
              </S.ContentBox>
              <S.ContentBox>
                대여 불가{" "}
                <span>{availableComics?.availableComicsForAdmin[1]}</span>
              </S.ContentBox>
            </S.MiniWrap>

            <S.BoxTitle>상품 리스트</S.BoxTitle>
            <S.BoxSearch
              type="test"
              placeholder="찾으시는 상품을 검색하세요."
              onChange={onChangeSearch}
            />
            <S.ItemsWrap>
              {Comics?.fetchComics.map((el: any, index: string) =>
                search?.fetchComicsWithTitle.map(
                  (item: any) =>
                    item.comicId === el.comicId && (
                      <S.ItemWrap key={index}>
                        <S.ItemImg
                          src={`https://storage.googleapis.com/${el.ISBN}`}
                        />
                        <S.ItemName>{el.title}</S.ItemName>
                      </S.ItemWrap>
                    )
                )
              )}
            </S.ItemsWrap>
          </S.SectionWrap>
          <S.SectionWrap>
            <S.BoxTitle>회원 검색</S.BoxTitle>
            <Search
              setUsername={setUsername}
              text="회원 닉네임을 검색하세요."
            />
            <table style={{ width: "100%", textAlign: "left" }}>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>닉네임</th>
                  <th>메일</th>
                  <th>연락처</th>
                  <th>관심 장르</th>
                </tr>
              </thead>

              <tbody>
                {Users?.fetchUsersForAdmin.map(
                  (el: any, i: number) =>
                    el.nickname === username && (
                      <tr key={el.id}>
                        <th scope="row">{i + 1}</th>
                        <td>{el.nickname}</td>
                        <td>{el.email}</td>
                        <td>{el.phone}</td>
                        <td>{el.interest}</td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </S.SectionWrap>
        </S.SectionsWrap>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
