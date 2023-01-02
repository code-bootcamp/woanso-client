import * as S from "./styles";

export default function LayoutFooter() {
  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <S.LeftContainer>
          <S.LeftTitle>(주)완소</S.LeftTitle>
          <S.LeftNavWrap>
            <S.LeftNav>회사소개</S.LeftNav>
            <S.LeftNav>이용약관</S.LeftNav>
            <S.LeftNav>개인정보처리방침</S.LeftNav>
            <S.LeftNav>이용안내</S.LeftNav>
          </S.LeftNavWrap>
          <S.LeftInfo>
            <S.Title>쇼핑몰 기본정보</S.Title>
            <S.LeftWrap>
              <S.InfoName>사업장 주소</S.InfoName>
              <S.InfoContent>
                서울특별시 구로구 디지털로 300 패스트파이브 구로점
              </S.InfoContent>
            </S.LeftWrap>
            <S.LeftWrap>
              <S.InfoName>대표 전화</S.InfoName>
              <S.InfoContent>01012345678</S.InfoContent>
            </S.LeftWrap>
            <S.LeftWrap>
              <S.InfoName>사업자 등록번호</S.InfoName>
              <S.InfoContent>325-11-01923</S.InfoContent>
            </S.LeftWrap>
            <S.LeftWrap>
              <S.InfoName>통신판매업 신고번호</S.InfoName>
              <S.InfoContent>2022-서울구로-1324호</S.InfoContent>
            </S.LeftWrap>
            <S.LeftWrap>
              <span>Copyright © 2022 완소 All Rights Reserved.</span>
            </S.LeftWrap>
          </S.LeftInfo>
        </S.LeftContainer>
        <S.RightContainer>
          <S.IconWrap>
            <S.Icon>
              <img src="./icon/facebook.png" />
            </S.Icon>
            <S.Icon>
              <img src="./icon/kakao.png" />
            </S.Icon>
            <S.Icon>
              <img src="./icon/instagram.png" />
            </S.Icon>
            <S.Icon>
              <img src="./icon/twitter.png" />
            </S.Icon>
            <S.Icon>
              <img src="./icon/line.png" />
            </S.Icon>
          </S.IconWrap>
        </S.RightContainer>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
