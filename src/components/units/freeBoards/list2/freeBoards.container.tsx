import * as S from "./freeBoards.styles";

export default function FreeBoard() {
  return (
    <S.OutterWrap>
      <S.InnerWrap>
        <S.FreeBoardWrap>
          <S.HotBoardWrap>
            <S.BoardTitle>Weekly Hot</S.BoardTitle>
            <S.HotBoard></S.HotBoard>
            <S.HotBoard></S.HotBoard>
            <S.HotBoard></S.HotBoard>
          </S.HotBoardWrap>
          <S.NewBoardWrap>
            <S.BoardTitle>New</S.BoardTitle>
            <S.BoardWrap>
              <S.UserInfo>
                <S.AvatarWrap>
                  <S.Avatar src="/" />
                </S.AvatarWrap>
                <S.UserName>다나카상</S.UserName>
                <S.ImagesWrap>
                  <S.Image src="/" />
                </S.ImagesWrap>
              </S.UserInfo>
            </S.BoardWrap>
            <S.BoardWrap></S.BoardWrap>
          </S.NewBoardWrap>
        </S.FreeBoardWrap>
      </S.InnerWrap>
    </S.OutterWrap>
  );
}
