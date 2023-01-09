import * as S from "./style";

export default function CommunityCommentListUI(){
    return (
        <S.Wrap>
        <S.LeftWrap>
            <S.AvatorWrap>
                <S.Avator></S.Avator>
            </S.AvatorWrap>
            <S.ContentsWrap>
                <S.TopWrap>
                    <S.Name>정명희</S.Name>
                    <S.Date>2시간 전</S.Date>
                </S.TopWrap>
                <S.MidWrap>
                    <S.MidContents>ㅋㅋㅋㅋㅋ 이렇게 찍었으면 성공했을지도</S.MidContents>
                </S.MidWrap>
            </S.ContentsWrap>
        </S.LeftWrap>
        <S.RightWrap>
            <S.IconWrap>
                <S.Edit src="/Vector7.png"></S.Edit>
                <S.Del src="/Vector6.png"></S.Del>
            </S.IconWrap>
        </S.RightWrap>
    </S.Wrap>
    )
}