import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { IMutation, IMutationDeleteBoardArgs, IQuery, IQueryFetchBoardArgs } from "../../../commons/types/generated/types";
import { DELETE_BOARD, FETCH_BOARD } from "./queries";
import * as S from "./styles";
import CommunityCommentWriteUI from "../communityCommentWrite/index"
import CommunityModal from "../communityDeleteModal";

export default function CommunityDetailUI(){
    const router = useRouter();
    
    const [isEdit, setIsEdit] = useState(false);

    const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

    const onClickComment = () => {
        setIsEdit((prev) => !prev)
    }


    const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
        FETCH_BOARD,
        { variables: { id: String(router.query.boardId) } }
      );
      console.log(data)


      const onClickEdit = () => {
        router.push(`/community/${router.query.boardId}/edit`);
      };

      const onClickDelete = async () => {
        await deleteBoard({
          variables: {
            id: router.query.boardId,
          },
        });
        router.push(`/community/`);
      };

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
                        <S.MidContents>{data?.fetchBoard.content}</S.MidContents>
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
                    <S.Edit src="/Vector7.png" onClick={onClickEdit}></S.Edit>
                    <S.Del src="/Vector6.png" onClick={onClickDelete}></S.Del>
                </S.IconWrap>
            </S.RightWrap>
        </S.Wrap>
        { isEdit && (
            <CommunityCommentWriteUI/>
        )}
        <CommunityModal/>
        
    </>
    )
}

