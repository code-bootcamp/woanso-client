import * as S from "./style";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { allDatas } from "../section/detas";
import LogoutConfirmModal from "../../commons/customModal/logoutModal";
import FaqModal from "../../commons/customModal/faqModal";

const MenuLists = [
  { id: "mypage/myrentList", name: "대여목록" },
  { id: "mypage/myreservationList", name: "예약내역" },
  { id: "mypage/mypoint", name: "포인트 충전" },
  { id: "userEdit", name: "회원정보 수정" },
];

export default function MyPageUI() {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  const onClickMoveToPage = (e: MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.id === "askkakao") {
      const kakaoUrl = `https://open.kakao.com/o/s8iiqXVe`;
      window.open(kakaoUrl, "_blank");
    } else {
      router.push(e.currentTarget.id);
    }
  };

  const onClickMoveToProfileEdit = () => {
    router.push("/userEdit");
  };

  const onClickOpenModal = () => {
    setOpen(true);
  };

  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <S.SideWrap>
          <S.UserInfoWrap>
            <S.UserAvatar onClick={onClickMoveToProfileEdit}>
              <S.AvatarImg src="/userAvatar.jpeg" />
            </S.UserAvatar>
            <p>
              <S.UserGrade>브론즈</S.UserGrade>다나카상
            </p>
          </S.UserInfoWrap>

          <S.MenuBarWrap>
            <S.MenuLists>
              {MenuLists.map((el) => (
                <S.MenuList key={el.id} id={el.id} onClick={onClickMoveToPage}>
                  <S.MenuName>{el.name}</S.MenuName>
                </S.MenuList>
              ))}
              <S.MenuList id="askkakao" onClick={onClickMoveToPage}>
                <S.MenuName>1:1 문의</S.MenuName>
              </S.MenuList>
              {/* <S.MenuList onClick={onClickOpenModal}>
                <S.MenuName>FAQ</S.MenuName>
              </S.MenuList>
              <FaqModal open={open} setOpen={setOpen} /> */}
            </S.MenuLists>
          </S.MenuBarWrap>
        </S.SideWrap>

        <S.MainWrap>
          <S.SectionWrap>
            <S.LeftWrap>
              <S.MiniWrap>
                <S.BoxTitle>내가 쓴 게시물</S.BoxTitle>
                <S.ContentBox>나는 다나카상이 제일 좋아~~~</S.ContentBox>
                <S.ContentBox>가나다라마바사하~!</S.ContentBox>
              </S.MiniWrap>

              <S.MiniWrap>
                <S.BoxTitle>내가 쓴 댓글</S.BoxTitle>
                <S.ContentBox>ㅎㅎㅎ 킹받쥬?</S.ContentBox>
                <S.ContentBox>어쩔 저쩔~</S.ContentBox>
              </S.MiniWrap>
            </S.LeftWrap>

            <S.RigthWrap>
              <S.BoxTitle>최근 본 상품</S.BoxTitle>
              <S.ItemsWrap>
                <S.ItemWrap>
                  <S.NoItemImg src="/noitem.png" />
                </S.ItemWrap>
                {allDatas.map((el) => (
                  <S.ItemWrap>
                    <S.ItemImg src={el.imgUrl} />
                  </S.ItemWrap>
                ))}
              </S.ItemsWrap>
              <S.BoxTitle>WISH LIST</S.BoxTitle>
              <S.ItemsWrap>
                {allDatas.map((el) => (
                  <S.ItemWrap>
                    <S.ItemImg src={el.imgUrl} />
                  </S.ItemWrap>
                ))}
              </S.ItemsWrap>
            </S.RigthWrap>
          </S.SectionWrap>
        </S.MainWrap>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
