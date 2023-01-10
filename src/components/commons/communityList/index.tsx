import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { IQuery, IQueryFetchBoardArgs } from "../../../commons/types/generated/types";
import CommunityCommentWriteUI from "../communityCommentWrite";
import { FETCH_BOARDS } from "./queries";
import * as S from "./styles";

export default function CommunityListUI(){
    const router = useRouter();
    
    const [isEdit, setIsEdit] = useState(false);

    const { data } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardArgs
    >(FETCH_BOARDS);

    const onClickComment = () => {
        setIsEdit((prev) => !prev)
    }

    const onClickMoveToBoardDetail = (boardId) => (event: MouseEvent<HTMLDivElement>) => {
        void router.push(`/community/${boardId}`);
      };

    console.log(data)

    return (
        <>
        {data?.fetchBoards.map((el, index) => (
        <S.Wrap key={el.id}>
            <S.LeftWrap>
                <S.AvatorWrap>
                    <S.Avator></S.Avator>
                </S.AvatorWrap>
                <S.ContentsWrap>
                    <S.TopWrap>
                        <S.Name>{el.user.nickname}</S.Name>
                        <S.Date>2시간 전</S.Date>
                    </S.TopWrap>
                    <S.MidWrap>
                        <S.MidContents onClick={onClickMoveToBoardDetail(el.id)}>{el.content}</S.MidContents>
                        <S.ImgWrap>
                            <S.Img src="/image1.png" />
                            <S.Img src="/image2.png" />
                        </S.ImgWrap>
                    </S.MidWrap>
                    <S.BottomWrap>
                        <S.LikeWrap>
                            <S.LikeIcon src="/Icon3.png"></S.LikeIcon>
                            <S.Like>{el.like}</S.Like>
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
        ))}
    </>
    )
}

