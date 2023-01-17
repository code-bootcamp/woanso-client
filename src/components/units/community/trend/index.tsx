import * as S from "./style";

export default function CommunityTrendUI() {
  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <S.TitleWrap>
          <S.Title>커뮤니티</S.Title>
          <S.Title2>주의사항</S.Title2>
        </S.TitleWrap>
        <S.ContentsWrap>
          <S.Contents src="/icon/guide.png" />
          <S.Info>
            <ul>
              <li>
                ☑️ 홍보를 목적으로 작성하는 글은 모두 경고없이 삭제됩니다.
              </li>
              <li>
                ☑️ 싫어요 수가 좋아요 수보다 많은 게시물은 삭제될 수 있습니다.
              </li>
              <li>
                ☑️ 지속적으로 다른 사람들에게 불쾌감을 주는 글을 작성할 경우
                사용 중지됩니다.
              </li>
              <li>☑️ 비속어를 사용하는 경우 사용 중지됩니다.</li>
            </ul>
          </S.Info>
        </S.ContentsWrap>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
