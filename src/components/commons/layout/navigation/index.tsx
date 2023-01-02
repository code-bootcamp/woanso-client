import { useRouter } from "next/router";
import { userInfo } from "os";
import * as S from "./styles";

export default function LayoutNavigation() {
  const router = useRouter();

  const MenuList = [
    {
      name: "홈",
      //   id: "home",
      url: "/",
    },
    {
      name: "대여",
      //   id: "rents",
      url: "/rents",
    },
    {
      name: "커뮤니티",
      //   id: "freeboards",
      url: "/freeboards",
    },
    {
      name: "이벤트",
      //   id: "event",
      url: "/event",
    },
    {
      name: "마이페이지",
      //   id: "mypage",
      url: "/mypage",
    },
  ];

  const onClickMoveToPage = (url: string) => () => {
    router.push(`${url}`);
  };

  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <S.Navigation>
          <ul>
            {MenuList.map((el) => {
              return <li onClick={onClickMoveToPage(el.url)}>{el.name}</li>;
            })}
          </ul>
        </S.Navigation>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
