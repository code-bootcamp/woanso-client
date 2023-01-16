import * as S from "./style";

export default function CommunityTrendUI(){
    return (
        <S.Wrap>
            <S.TitleWrap>
                <S.Title>나를 위한</S.Title>
                <S.Title2>트렌드</S.Title2>
            </S.TitleWrap>
            <S.ContentsWrap>
                <S.Contents src="/picksImage/01.png"/>
                <S.Contents src="/picksImage/02.png"/>
                <S.Contents src="/picksImage/03.png"/>
                <S.Contents src="/picksImage/04.png"/>
                <S.Contents src="/picksImage/05.png"/>
                <S.Contents src="/picksImage/06.png"/>
                <S.Contents src="/picksImage/07.png"/>
            </S.ContentsWrap>
        </S.Wrap>
    )
}