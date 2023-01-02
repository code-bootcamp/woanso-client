import { useRouter } from "next/router";
import * as S from "./style";

const MenuLists = [
  { id: "rentslist", name: "대여목록" },
  { id: "reservationlist", name: "예약내역" },
  { id: "userinfoedit", name: "회원정보 수정" },
  { id: "askkakao", name: "1:1 문의" },
  { id: "faq", name: "FAQ" },
];

export default function MypageUI() {
  const router = useRouter();

  const onClickMoveToPage = (e) => {
    if (e.currentTarget.id === "askkakao") {
      const kakaoUrl = `https://open.kakao.com/o/s8iiqXVe`;
      window.open(kakaoUrl, "_blank");
    } else {
      router.push(e.currentTarget.id);
    }
  };

  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <S.SideWrap>
          <S.UserInfoWrap>
            <S.UserAvatar>
              <S.AvatarImg src="/" />
            </S.UserAvatar>
            <S.UserName>완소님</S.UserName>
          </S.UserInfoWrap>

          <S.MenuBarWrap>
            <S.MenuLists>
              {MenuLists.map((el) => (
                <S.MenuList key={el.id} id={el.id} onClick={onClickMoveToPage}>
                  <S.MenuName>{el.name}</S.MenuName>
                </S.MenuList>
              ))}
            </S.MenuLists>
          </S.MenuBarWrap>
        </S.SideWrap>

        <S.MainWrap>
          <S.TopMenusWrap>
            {["최근 본 상품", "장바구니", "이벤트"].map((el, index) => (
              <S.BoxBig key={index}>{el}</S.BoxBig>
            ))}
          </S.TopMenusWrap>
          <S.ButtomMenusWrap>
            <S.BoxSmall>
              <S.BoxTitle>쿠폰</S.BoxTitle>
              <S.BoxTitle>0장</S.BoxTitle>
            </S.BoxSmall>
            <S.BoxSmall>
              <S.BoxTitle>포인트</S.BoxTitle>
              <S.BoxTitle>0P</S.BoxTitle>
            </S.BoxSmall>
            <S.BoxSmall>
              <S.BoxTitle>등급</S.BoxTitle>
              <S.MyGrade>프렌즈</S.MyGrade>
            </S.BoxSmall>
            <S.BoxSmall>
              <S.BoxTitle>내 게시물</S.BoxTitle>
              <S.BoxTitle>0장</S.BoxTitle>
            </S.BoxSmall>
          </S.ButtomMenusWrap>
        </S.MainWrap>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
