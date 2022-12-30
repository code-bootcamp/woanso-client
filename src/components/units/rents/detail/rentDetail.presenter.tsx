import RentsReviewWrite from "../../rentsReview/write/rentsReviewWrite.container";
import * as S from "./rentDetail.styles";

export default function RentDetailUI() {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.ProductInfo>
            <S.ProductTitle>
              <S.h1>상품명</S.h1>
            </S.ProductTitle>
            <S.Title>
              <S.TitleLeft>
                <div>저자</div>
                <div>출판사</div>
                <div>등록날짜</div>
              </S.TitleLeft>
              <S.TitleRight>
                <S.editBtn>수정</S.editBtn>
                <S.editBtn>삭제</S.editBtn>
              </S.TitleRight>
            </S.Title>
          </S.ProductInfo>
          <S.TopContainer>
            <S.InfoLeft>
              <S.InfoImage />
              <img
                src="/item1.png"
                style={{ width: "500px", height: "780px" }}
              />
            </S.InfoLeft>
            <S.InfoRight>
              <S.RightContainer>
                <S.InfoWrap></S.InfoWrap>
                <S.InfoWrap>
                  <S.InfoName>대여가</S.InfoName>
                  <S.InfoContent1>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div style={{ fontSize: "24px", fontWeight: "500" }}>
                        9,900
                      </div>
                      <div>원</div>
                    </div>
                  </S.InfoContent1>
                </S.InfoWrap>
                <S.InfoWrap>
                  <S.InfoName>보증금</S.InfoName>
                  <S.InfoContent1>10,000원</S.InfoContent1>
                </S.InfoWrap>
                <S.InfoWrap>
                  <S.InfoName>배송료</S.InfoName>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <S.InfoContent1>3000원</S.InfoContent1>
                    <S.InfoContent1 style={{ color: "grey" }}>
                      (10,0000원 이상 무료배송)
                    </S.InfoContent1>
                  </div>
                </S.InfoWrap>
                <S.InfoWrap style={{ marginBottom: "100px" }}>
                  <S.InfoName>대여기간 선택</S.InfoName>
                  <S.InfoContent1>캘린더넣기~~~</S.InfoContent1>
                </S.InfoWrap>
                <S.InfoWrap>
                  <S.InfoName>수령예상일</S.InfoName>
                  <S.InfoContent1>지금 주문하면 내일 수령</S.InfoContent1>
                </S.InfoWrap>
                <S.BtnWrapper>
                  <div>
                    <S.Button1>입고알림</S.Button1>
                  </div>
                  <div>
                    <S.Button2 style={{ opacity: "0.7" }}>장바구니</S.Button2>
                    <S.Button2>대여하기</S.Button2>
                  </div>
                </S.BtnWrapper>
              </S.RightContainer>
            </S.InfoRight>
          </S.TopContainer>
          <S.MiddleContainer>
            <S.InfoWrap>
              <S.Name2>기본정보</S.Name2>
              <S.InfoContent2>ISBN: 1234567890000</S.InfoContent2>
            </S.InfoWrap>
            <S.InfoWrap>
              <S.Name2>시리즈</S.Name2>
              <S.InfoContent2>
                <img
                  src="/item1.png"
                  style={{ width: "100px", height: "100px" }}
                />
              </S.InfoContent2>
            </S.InfoWrap>
            <S.InfoWrap>
              <S.Name2>책소개</S.Name2>
              <S.InfoContent2>asd</S.InfoContent2>
            </S.InfoWrap>
            <S.InfoWrap>
              <S.Name2>작가소개</S.Name2>
              <S.InfoContent2>123</S.InfoContent2>
            </S.InfoWrap>
          </S.MiddleContainer>
          <S.BottomContainer></S.BottomContainer>
          <RentsReviewWrite />
        </S.Container>
      </S.Wrapper>
    </>
  );
}
