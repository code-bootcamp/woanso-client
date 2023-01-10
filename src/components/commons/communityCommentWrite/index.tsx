import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { IMutation, IMutationCreateCommentArgs } from "../../../commons/types/generated/types";
import { CREATE_COMMENT } from "./queries";
import * as S from "./style";

export default function CommunityCommentWriteUI(){
    const router = useRouter();
    const [content, setContent] = useState("");


//     const [createComment] = useMutation<
//     Pick<IMutation, "createComment">,
//     IMutationCreateCommentArgs
//   >(CREATE_COMMENT);

  const [createComment] = useMutation(CREATE_COMMENT);

  const onChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };


  const onClickWrite = async () => {
    if (typeof router.query.boardId !== "string") return;

    try {
      await createComment({
        variables: {
          createCommentInput: {
            content,
          },
          boardId: router.query.id,
        },
        // refetchQueries: [
        //   {
        //     query: FETCH_BOARD_COMMENTS,
        //     variables: { boardId: router.query.id },
        //   },
        // ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }

    setContent("");
  };

    return (
        <S.Wrap>
        <S.LeftWrap>
            <S.AvatorWrap>
                <S.Avator></S.Avator>
            </S.AvatorWrap>
            <S.ContentsWrap>
                <S.MidWrap>
                    <S.MidContents placeholder="답글을 등록합니다"
                    onChange={onChangeContent}
                    ></S.MidContents>
                </S.MidWrap>
            </S.ContentsWrap>
        </S.LeftWrap>
        <S.RightWrap>
            <S.Button onClick={onClickWrite}>답글</S.Button>
        </S.RightWrap>
    </S.Wrap>
    )
}