import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { getDays } from "../../../../commons/libraries/getTimes";
import {
  IMutation,
  IMutationDeleteCommentArgs,
} from "../../../../commons/types/generated/types";
import { DELETE_COMMENT, FETCH_COMMENTS } from "./queries";
import * as S from "./style";

export default function CommunityCommentListUIItem(props: any) {
  const router = useRouter();

  const [deleteComment] = useMutation<
    Pick<IMutation, "deleteComment">,
    IMutationDeleteCommentArgs
  >(DELETE_COMMENT);
  console.log(router)

  const onClickDelete = async () => {
    try {
      await deleteComment({
        variables: {
          ID: props.el?.id,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <S.Wrap>
      <S.LeftWrap>
        <S.AvatorWrap>
          <S.Avator></S.Avator>
        </S.AvatorWrap>
        <S.ContentsWrap>
          <S.TopWrap>
            <S.Name>{props.el?.user.nickname}</S.Name>
            <S.Date>{getDays(props.el?.createdAt)}</S.Date>
          </S.TopWrap>
          <S.MidWrap>
            <S.MidContents>{props.el?.content}</S.MidContents>
          </S.MidWrap>
        </S.ContentsWrap>
      </S.LeftWrap>
      <S.RightWrap>
        <S.IconWrap>
          <S.Del src="/icon/Vector6.png" onClick={onClickDelete}></S.Del>
        </S.IconWrap>
      </S.RightWrap>
    </S.Wrap>
  );
}
