import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { IMutation, IMutationDeleteCommentArgs } from "../../../../commons/types/generated/types";
import { DELETE_COMMENT, FETCH_COMMENTS } from "./queries";
import * as S from "./style";



export default function CommunityCommentListUIItem(props){

    const router = useRouter();
    const [isEdit, setIsEdit] = useState(false);

    const [deleteComment] = useMutation<
    Pick<IMutation, "deleteComment">,
    IMutationDeleteCommentArgs
  >(DELETE_COMMENT);

  const onClickUpdate = () => {
    setIsEdit(true);
  };

  const onClickDelete = async () => {
    try {
      await deleteComment({
        variables: {
          ID: props.el?.id,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: { boardId: router.query.id },
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
                    <S.Date>2시간 전</S.Date>
                </S.TopWrap>
                <S.MidWrap>
                    <S.MidContents>{props.el?.content}</S.MidContents>
                </S.MidWrap>
            </S.ContentsWrap>
        </S.LeftWrap>
        <S.RightWrap>
            <S.IconWrap>
                <S.Edit src="/icon/Vector7.png" onClick={onClickUpdate}></S.Edit>
                <S.Del src="/icon/Vector6.png" onClick={onClickDelete}></S.Del>
            </S.IconWrap>
        </S.RightWrap>
    </S.Wrap>
    )
}