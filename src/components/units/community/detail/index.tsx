import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
} from "../../../../commons/types/generated/types";
import {
  DISLIKE_BOARD,
  FETCH_BOARD,
  LIKE_BOARD,
} from "./queries";
import * as S from "./styles";
import CommunityCommentWriteUI from "../../comment/write/index";
import CommunityModal from "../deleteModal";
import { useRecoilState } from "recoil";
import { deleteModal } from "../../../../commons/libraries/store";
import { FETCH_USER_LOGGED_IN } from "../../../../commons/hooks/queries/useQueryFetchUserLoggedIn";

export default function CommunityDetailUI() {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useRecoilState(deleteModal);

  const {data: loggedInData} = useQuery(FETCH_USER_LOGGED_IN)

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const onClickComment = () => {
    setIsEdit((prev) => !prev);
  };

  const { data } = useQuery(FETCH_BOARD, {
    variables: { id: String(router.query.boardId) },
  });

  const onClickEdit = () => {
    router.push(`/community/${router.query.boardId}/edit`);
  };

  const onClickDelete = async () => {
    setIsModalOpen(true);
  };

  const onClickLike = async () => {
    await likeBoard({
      variables: {
        id: String(router.query.boardId),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { id: router.query.boardId },
        },
      ],
    });
  };

  const onClickDisLike = async () => {
    await dislikeBoard({
      variables: {
        id: String(router.query.boardId),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { id: router.query.boardId },
        },
      ],
    });
  };

  return (
    <>
      <S.Wrap>
        <S.LeftWrap>
          <S.AvatarWrap>
          {data?.fetchBoard.user.thumbnail ? (
              <S.Avatar
                src={`https://storage.googleapis.com/${data?.fetchBoard.user.thumbnail}`}
              />
            ) : (
              <S.Avatar src="/icon/avatar.png" />
            )}
          </S.AvatarWrap>
          <S.ContentsWrap>
            <S.TopWrap>
              <S.Name>{data?.fetchBoard.user.nickname}</S.Name>
            </S.TopWrap>
            <S.MidWrap>
              <S.MidContents>{data?.fetchBoard.content}</S.MidContents>
              <S.ImgWrap>
                <S.Img
                  src={`https://storage.googleapis.com/${data?.fetchBoard.boardImg[0]?.url}`}
                />
              </S.ImgWrap>
            </S.MidWrap>
            <S.BottomWrap>
              <S.LikeWrap>
                <S.LikeIcon
                  src="/icon/thumbs-up.png"
                  onClick={onClickLike}
                ></S.LikeIcon>
                <S.Like>{data?.fetchBoard.like}</S.Like>
              </S.LikeWrap>
              <S.LikeWrap>
                <S.LikeIcon
                  src="/icon/thumbs-down.png"
                  onClick={onClickDisLike}
                ></S.LikeIcon>
                <S.Like>{data?.fetchBoard.dislike}</S.Like>
              </S.LikeWrap>
              <S.CommentWrap>
                <S.CommentIcon
                  src="/icon/comment-regular.svg"
                  onClick={onClickComment}
                ></S.CommentIcon>
                <S.Comment></S.Comment>
              </S.CommentWrap>
            </S.BottomWrap>
          </S.ContentsWrap>
        </S.LeftWrap>
        <S.RightWrap>
          {loggedInData?.fetchUserLoggedIn.id === data?.fetchBoard.user.id ?
           <S.IconWrap>
           <S.Edit src="/icon/Vector7.png" onClick={onClickEdit}></S.Edit>
           <S.Del src="/icon/Vector6.png" onClick={onClickDelete}></S.Del>
         </S.IconWrap>
        :
        ""
        }
        </S.RightWrap>
      </S.Wrap>
      {isEdit && <CommunityCommentWriteUI />}
      {isModalOpen && (
        <>
          <CommunityModal />
          {/* <CommunityModal1/> */}
        </>
      )}
    </>
  );
}
