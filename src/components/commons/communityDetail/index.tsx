import { useState } from "react";
import * as S from "./styles";

export default function CommunityDetailUI(){
    
    const [isEdit, setIsEdit] = useState(false);

    const onClickComment = () => {
        setIsEdit((prev) => !prev)
    }


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
                            <S.CommentIcon src="/Icon5.png" onClick={onClickComment}></S.CommentIcon>
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
        { isEdit && (
            <S.CommentAddWrap>
                <S.CommentAdd>
                    <S.CommentLeftWrap>
                        <S.AvatorWrap>
                            <S.Avator></S.Avator>
                        </S.AvatorWrap>
                        <S.CommentContents placeholder="답글을 등록합니다."></S.CommentContents>

                    </S.CommentLeftWrap>
                    <S.CommentRightWrap>
                        <S.Button>답글</S.Button>
                    </S.CommentRightWrap>
                </S.CommentAdd>
            </S.CommentAddWrap>
        )}
        
    </>
    )
}

