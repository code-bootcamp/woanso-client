import { useRouter } from "next/router";
import * as S from "./style";
import { allDatas } from "../section/detas";

const MenuLists = [
  { id: "additem", name: "상품 추가" },
  { id: "point", name: "포인트 관리" },
  { id: "event", name: "진행중인 이벤트" },
  { id: "logout", name: "로그아웃" },
];

export default function AdminpageUI() {
  const router = useRouter();

  const onClickMoveToPage = (e) => {
    router.push(e.currentTarget.id);
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
                  <a>
                    <S.MenuName>{el.name}</S.MenuName>
                  </a>
                </S.MenuList>
              ))}
            </S.MenuLists>
          </S.MenuBarWrap>
        </S.SideWrap>

        <S.MainWrap>
          <S.SectionWrap>
            <S.LeftWrap>
              <S.MiniWrap>
                <S.BoxTitle>회원 관리</S.BoxTitle>
                <S.ContentBox>
                  총 이용자 수 <br /> 100
                </S.ContentBox>
                <S.ContentBox>
                  현재 접속 중 <br /> 20
                </S.ContentBox>
                <S.FlexBox>
                  <S.ContentBox>
                    신규 회원 <br /> 3
                  </S.ContentBox>
                  <S.ContentBox>
                    탈퇴 회원 <br /> 0
                  </S.ContentBox>
                </S.FlexBox>
              </S.MiniWrap>

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
                <S.FlexBox>
                  <S.ContentBox>
                    대여 가능 <br />
                    80
                  </S.ContentBox>
                  <S.ContentBox>
                    대여 불가
                    <br /> 20
                  </S.ContentBox>
                </S.FlexBox>
              </S.MiniWrap>
            </S.LeftWrap>

            <S.RigthWrap>
              <S.BoxTitle>상품 리스트</S.BoxTitle>
              <S.BoxSearch placeholder="찾으시는 상품을 검색하세요." />
              <S.ItemsWrap>
                {allDatas.map((el) => (
                  <S.ItemWrap>
                    <S.ItemImg src={el.imgUrl} />
                    <S.ItemName>{el.name}</S.ItemName>
                  </S.ItemWrap>
                ))}
                {allDatas.map((el) => (
                  <S.ItemWrap>
                    <S.ItemImg src={el.imgUrl} />
                    <S.ItemName>{el.name}</S.ItemName>
                  </S.ItemWrap>
                ))}
                {allDatas.map((el) => (
                  <S.ItemWrap>
                    <S.ItemImg src={el.imgUrl} />
                    <S.ItemName>{el.name}</S.ItemName>
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
                  <th>등급</th>
                  <th>관심 장르</th>
                  <th>대여 여부</th>
                  <th>대여 횟수</th>
                  <th>대여 총액</th>
                  <th>가입 일</th>
                  <th>탈퇴 일</th>
                </tr>
              </thead>
              {/* <tfoot>
                <tr>
                  <td colspan="4">SUM</td>
                  <td>118</td>
                </tr>
              </tfoot> */}
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>아무게</td>
                  <td>브론즈</td>
                  <td>액션</td>
                  <td>true</td>
                  <td>5</td>
                  <td>200000</td>
                  <td>2022-12-27</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>아무게</td>
                  <td>브론즈</td>
                  <td>액션</td>
                  <td>true</td>
                  <td>5</td>
                  <td>200000</td>
                  <td>2022-12-27</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>아무게</td>
                  <td>브론즈</td>
                  <td>액션</td>
                  <td>true</td>
                  <td>5</td>
                  <td>200000</td>
                  <td>2022-12-27</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>아무게</td>
                  <td>브론즈</td>
                  <td>액션</td>
                  <td>true</td>
                  <td>5</td>
                  <td>200000</td>
                  <td>2022-12-27</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>아무게</td>
                  <td>브론즈</td>
                  <td>액션</td>
                  <td>true</td>
                  <td>5</td>
                  <td>200000</td>
                  <td>2022-12-27</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </S.SectionWrap2>
        </S.MainWrap>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
