import * as S from "./style";

export default function Searchbar() {
  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <S.SearchWrap>
          <S.Input placeholder="만화책을 검색하세요" />
          <S.SearchIcon>검색</S.SearchIcon>
        </S.SearchWrap>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
