import * as S from "./style";

export default function CommunityCommentWriteUI(){
    return (
        <S.Wrap>
        <S.LeftWrap>
            <S.AvatorWrap>
                <S.Avator></S.Avator>
            </S.AvatorWrap>
            <S.ContentsWrap>
                <S.MidWrap>
                    <S.MidContents placeholder="답글을 등록합니다"></S.MidContents>
                </S.MidWrap>
            </S.ContentsWrap>
        </S.LeftWrap>
        <S.RightWrap>
            <S.Button>답글</S.Button>
        </S.RightWrap>
    </S.Wrap>
    )
}