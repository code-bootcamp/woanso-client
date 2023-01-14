import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { FETCH_BOARDS } from "../../../../commons/hooks/queries/useQueryFetchBoards";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import CommunityCommentWriteUI from "../../../units/comment/write";
import { DELETE_BOARD } from "../../../units/community/detail/queries";
import * as S from "../../../units/community/list/styles";

export default function CommunityListUI() {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardArgs>(
    FETCH_BOARDS
  );

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const onClickComment = () => {
    setIsEdit((prev) => !prev);
  };

  const onClickMoveToBoardDetail =
    (boardId: string) => (event: MouseEvent<HTMLDivElement>) => {
      void router.push(`/community/${boardId}`);
    };

  const onClickEdit = () => {
    router.push(`/community/${router.query.boardId}/edit`);
  };

  const onClickDelete = async () => {
    await deleteBoard({
      variables: {
        id: String(router.query.boardId),
      },
    });
    router.push(`/community/`);
    console.log("삭제완룡");
  };

  console.log(data);

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
                <S.MidContents onClick={onClickMoveToBoardDetail(el.id)}>
                  {el.content}
                </S.MidContents>
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
                  <S.CommentIcon
                    src="/Icon5.png"
                    onClick={onClickComment}
                  ></S.CommentIcon>
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
      ))}
    </>
  );
}
