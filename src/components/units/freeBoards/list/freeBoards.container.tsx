import * as S from "./freeBoards.styles"

export default function FreeBoard(){
    return (
        <S.OutWrapper>
            <S.TitleWrapper>
                <S.Title>자유게시판</S.Title>
                <S.SearchBar></S.SearchBar>
                <S.Search>검색</S.Search>
            </S.TitleWrapper>
            <S.Wrapper>
            <S.FreeBoardWrapper>
                <S.BoardTitle>Talk</S.BoardTitle>
                <S.Line/>
                <S.ContentsWrapper>
                    <S.ContentsSubWrapper>
                        <S.Contents>1. 가장 매력있는 남자 오디션 남자 캐릭터는?</S.Contents>
                        <S.Contents>2. 겨울에 남자친구랑 볼만한 순정 만화 추천해주세요~!!</S.Contents>
                        <S.Contents>3. 나루토가 쓰는 기술 이름이 뭔가요?</S.Contents>
                        <S.Contents>4. 인생 만화 추천해주세요!!</S.Contents>
                    </S.ContentsSubWrapper>
                    <S.ContentsViewWrapper>
                        <S.ViewWrapper>
                        <S.View src="/see.png"></S.View>
                        <S.Number>77</S.Number>
                        </S.ViewWrapper>
                        <S.ViewWrapper>
                        <S.View src="/see.png"></S.View>
                        <S.Number>58</S.Number>
                        </S.ViewWrapper>
                        <S.ViewWrapper>
                        <S.View src="/see.png"></S.View>
                        <S.Number>35</S.Number>
                        </S.ViewWrapper>
                        <S.ViewWrapper>
                        <S.View src="/see.png"></S.View>
                        <S.Number>22</S.Number>
                        </S.ViewWrapper>
                    </S.ContentsViewWrapper>
                </S.ContentsWrapper>
                <S.PageNumber> 
                    <S.Page style={{color: "#77170d"}}>1</S.Page>
                    <S.Page>2</S.Page>
                    <S.Page>3</S.Page>
                    <S.Page>4</S.Page>
                    <S.Page>5</S.Page>
                    <S.Page>6</S.Page>
                    <S.Page>7</S.Page>
                    <S.Page>8</S.Page>
                    <S.Page>9</S.Page>
                    <S.Page>10</S.Page>
                     </S.PageNumber>
            </S.FreeBoardWrapper>
            <S.FreeBoardWrapper>
                <S.BoardTitle>짤 공유</S.BoardTitle>
            <S.Line/>
            <S.ContentsWrapper>
                <S.ContentsSubWrapper>
                    <S.Contents>1. 직장 동료에게 쓰기 좋은 짤</S.Contents>
                    <S.Image src="/1111.png"/>
                    <S.Contents>2. 슬램덩크에서 배우는 자존감 높이기</S.Contents>
                    <S.Image src="/11.png"/>
                </S.ContentsSubWrapper>
                <S.ContentsViewWrapper>
                </S.ContentsViewWrapper>
            </S.ContentsWrapper>
            </S.FreeBoardWrapper>
        </S.Wrapper>
        </S.OutWrapper>
    )
}