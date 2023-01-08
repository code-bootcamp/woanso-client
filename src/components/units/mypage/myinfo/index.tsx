import * as S from "./style";

export default function MyIngo() {
  return (
    <S.MyInfoWrap>
      <S.TopWrap>
        <S.ItemWrap>
          <S.TopTitle>등급</S.TopTitle>
          <S.GradeImg src="/grade/01.png" />
          <S.TopInfo>실버</S.TopInfo>
        </S.ItemWrap>
        <S.ItemWrap>
          <S.TopTitle>포인트</S.TopTitle>
          <S.PointImg src="/icon/point.png" />
          <S.TopInfo>3,000</S.TopInfo>
        </S.ItemWrap>
        <S.ItemWrap>
          <S.TopTitle>포스팅</S.TopTitle>
          <S.BigText>28</S.BigText>
        </S.ItemWrap>
        <S.ItemWrap>
          <S.TopTitle>댓글</S.TopTitle>
          <S.BigText>10</S.BigText>
        </S.ItemWrap>
      </S.TopWrap>

      <S.BottomWrap>
        <S.Title>My Pick</S.Title>
        <S.PickListWrap>
          <S.PickItemWrap>
            <S.PickItemImg src="/" />
            <S.BookName>책이름</S.BookName>
            <S.BookAuthor>작가이름</S.BookAuthor>
          </S.PickItemWrap>
          <S.PickItemWrap>
            <S.PickItemImg src="/" />
            <S.BookName>책이름</S.BookName>
            <S.BookAuthor>작가이름</S.BookAuthor>
          </S.PickItemWrap>
          <S.PickItemWrap>
            <S.PickItemImg src="/" />
            <S.BookName>책이름</S.BookName>
            <S.BookAuthor>작가이름</S.BookAuthor>
          </S.PickItemWrap>
          <S.PickItemWrap>
            <S.PickItemImg src="/" />
            <S.BookName>책이름</S.BookName>
            <S.BookAuthor>작가이름</S.BookAuthor>
          </S.PickItemWrap>
          <S.PickItemWrap>
            <S.PickItemImg src="/" />
            <S.BookName>책이름</S.BookName>
            <S.BookAuthor>작가이름</S.BookAuthor>
          </S.PickItemWrap>
        </S.PickListWrap>
      </S.BottomWrap>
    </S.MyInfoWrap>
  );
}
