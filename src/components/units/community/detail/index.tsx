import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { DELETE_BOARD, FETCH_BOARD, LIKE_BOARD } from "./queries";
import * as S from "./styles";
import CommunityCommentWriteUI from "../../comment/write/index";
import CommunityModal from "../deleteModal";
import { useRecoilState } from "recoil";
import { deleteModal } from "../../../../commons/libraries/store";
import CommunityModal1 from "../modal";

export default function CommunityDetailUI() {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useRecoilState(deleteModal);

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const onClickComment = () => {
    setIsEdit((prev) => !prev);
  };

  const { data } = useQuery(FETCH_BOARD, {
    variables: { id: String(router.query.boardId) },
  });
  console.log(data);

  const onClickEdit = () => {
    router.push(`/community/${router.query.boardId}/edit`);
  };

  const onClickDelete = async () => {
    // await deleteBoard({
    //   variables: {
    //     id: router.query.boardId,
    //   },
    // });
    setIsModalOpen(true);
    // router.push(`/community/`);
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

  return (
    <>
      <S.Wrap>
        <S.LeftWrap>
          <S.AvatorWrap>
            <S.Avator
              src={`https://storage.googleapis.com/${data?.fetchBoard.user.thumbnail}`}
            />
          </S.AvatorWrap>
          <S.ContentsWrap>
            <S.TopWrap>
              <S.Name>{data?.fetchBoard.user.nickname}</S.Name>
              {/* <S.Name>이유진</S.Name> */}
              {/* <S.Date>2시간 전</S.Date> */}
            </S.TopWrap>
            <S.MidWrap>
              <S.MidContents>{data?.fetchBoard.content}</S.MidContents>
              <S.ImgWrap>
                {/* <S.Img src="/image1.png" />
                            <S.Img src="/image2.png" /> */}
                <S.Img
                  src={`https://storage.googleapis.com/${data?.fetchBoard.boardImg[0]?.url}`}
                />
              </S.ImgWrap>
            </S.MidWrap>
            <S.BottomWrap>
              <S.LikeWrap>
                <S.LikeIcon
                  src="/icon/Icon3.png"
                  onClick={onClickLike}
                ></S.LikeIcon>
                <S.Like>{data?.fetchBoard.like}</S.Like>
              </S.LikeWrap>
              <S.CommentWrap>
                <S.CommentIcon
                  src="/icon/Icon5.png"
                  onClick={onClickComment}
                ></S.CommentIcon>
                <S.Comment>10</S.Comment>
              </S.CommentWrap>
            </S.BottomWrap>
          </S.ContentsWrap>
        </S.LeftWrap>
        <S.RightWrap>
          <S.IconWrap>
            <S.Edit src="/icon/Vector7.png" onClick={onClickEdit}></S.Edit>
            <S.Del src="/icon/Vector6.png" onClick={onClickDelete}></S.Del>
          </S.IconWrap>
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
