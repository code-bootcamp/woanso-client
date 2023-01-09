import * as S from "./styles"

export default function CommunityWriteUI(){
    return (
        <S.Wrap>
            <S.ContentsWrap>
                <S.contents placeholder="무슨 일이 일어나고 있나요?"></S.contents>
            </S.ContentsWrap>
            <S.BottomWrap>
                <S.ImgWrap>
                    <S.Img src="/img.png"></S.Img>
                </S.ImgWrap>
                <S.ButtonWrap>
                    <S.Button>등록</S.Button>
                </S.ButtonWrap>
            </S.BottomWrap>
        </S.Wrap>
    )
}

