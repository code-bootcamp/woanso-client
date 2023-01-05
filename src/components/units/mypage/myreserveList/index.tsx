import { OuterWrap, InnerWrap } from "../../../../commons/styles/Wrapper";
import * as S from "./styles"


export default function MyReserveListUI() {
  return (
    <OuterWrap>
      <InnerWrap>
        <S.Wrap>
          <S.TitleWrap>
            <S.Title>대여내역</S.Title>
          </S.TitleWrap>
          <S.ContentsWrap>
            <S.ImgWrap>
              <S.Img src="/item1.png"></S.Img>
            </S.ImgWrap>
            <S.RentWrap>
              <S.RentDate>2023.01.05 대여</S.RentDate>
              <S.RentTitle>순정만화임당</S.RentTitle>
              <S.RentWriter>자까</S.RentWriter>
              <S.RentPrice>15,000원</S.RentPrice>
            </S.RentWrap>
            <S.ButtonWrap>
              <S.WishIcon></S.WishIcon>
              <S.ReviewButton>리뷰쓰기</S.ReviewButton>
              <S.RentButton>재대여</S.RentButton>
            </S.ButtonWrap>
          </S.ContentsWrap>
        </S.Wrap>
      </InnerWrap>
    </OuterWrap>
  );
}
