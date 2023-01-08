import * as S from "./style";

export default function CommunityNewList() {
  return (
    <S.CommunityNewListWrap>
      <S.TitleWrapper>
        <p></p>
        <h3>커뮤니티 최신글</h3>
        <span></span>
        <button>더보기 &gt;</button>
      </S.TitleWrapper>
      <S.ContentsWrap>
        {new Array(12).fill(1).map((el, index) => (
          <S.Content>
            <S.Image src="" />
            <S.Info>
              <p>다나카</p>
              <span>1시간전</span>
            </S.Info>
          </S.Content>
        ))}
      </S.ContentsWrap>
    </S.CommunityNewListWrap>
  );
}
