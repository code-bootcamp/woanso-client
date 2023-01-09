import * as S from "./styles";

export default function CommunityListUI(){
    return (
        <>
        <S.Wrap>
            <S.LeftWrap>
                <S.AvatorWrap>
                    <S.Avator></S.Avator>
                </S.AvatorWrap>
                <S.ContentsWrap>
                    <S.TopWrap>
                        <S.Name>이유진</S.Name>
                        <S.Date>2시간 전</S.Date>
                    </S.TopWrap>
                    <S.MidWrap>
                        <S.MidContents>귀멸의 칼날 실사화 캐스팅 생각남</S.MidContents>
                        <S.ImgWrap>
                            <S.Img src="/image1.png" />
                            <S.Img src="/image2.png" />
                        </S.ImgWrap>
                    </S.MidWrap>
                    <S.BottomWrap>
                        <S.LikeWrap>
                            <S.LikeIcon src="/Icon3.png"></S.LikeIcon>
                            <S.Like>30</S.Like>
                        </S.LikeWrap>
                        <S.CommentWrap>
                            <S.CommentIcon src="/Icon5.png"></S.CommentIcon>
                            <S.Comment>10</S.Comment>
                        </S.CommentWrap>
                    </S.BottomWrap>
                </S.ContentsWrap>
            </S.LeftWrap>
            <S.RightWrap>
                <S.IconWrap>
                    <S.Edit src="/Vector7.png"></S.Edit>
                    <S.Del src="/Vector6.png"></S.Del>
                </S.IconWrap>
            </S.RightWrap>
        </S.Wrap>
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
                    <S.MidContents>곧 방학인데 만화 추천해주세요</S.MidContents>
                </S.MidWrap>
                <S.BottomWrap>
                    <S.LikeWrap>
                        <S.LikeIcon src="/Icon8.png"></S.LikeIcon>
                        <S.Like>30</S.Like>
                    </S.LikeWrap>
                    <S.CommentWrap>
                        <S.CommentIcon src="/Icon5.png"></S.CommentIcon>
                        <S.Comment>10</S.Comment>
                    </S.CommentWrap>
                </S.BottomWrap>
            </S.ContentsWrap>
        </S.LeftWrap>
        <S.RightWrap>
            <S.IconWrap>
                <S.Edit src="/Vector7.png"></S.Edit>
                <S.Del src="/Vector6.png"></S.Del>
            </S.IconWrap>
        </S.RightWrap>
    </S.Wrap>
    </>
    )
}

