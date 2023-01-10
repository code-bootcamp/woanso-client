import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { FETCH_USER_LOGGED_IN } from "../../../commons/hooks/queries/useQueryFetchUserLoggedIn";
import { IMutation, IMutationCreateCommentArgs, IQuery } from "../../../commons/types/generated/types";
import { CREATE_COMMENT } from "./queries";
import * as S from "./style";

export default function CommunityCommentWriteUI(){
    const router = useRouter();
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState("");
    


//     const [createComment] = useMutation<
//     Pick<IMutation, "createComment">,
//     IMutationCreateCommentArgs
//   >(CREATE_COMMENT);

  const [createComment] = useMutation(CREATE_COMMENT);

  const { data } =
  useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  console.log(data)

  const onChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const onChangeUserId = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setUserId(event.target.value);
  };


  const onClickWrite = async () => {
    if (typeof router.query.boardId !== "string") return;

    try {
      await createComment({
        variables: {
          createCommentInput: {
            content,
            boardId: String(router.query.boardId),
            userId
          },
        },
        // refetchQueries: [
        //   {
        //     query: FETCH_BOARD_COMMENTS,
        //     variables: { boardId: router.query.id },
        //   },
        // ],
      });
      console.log("댓글등록")
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }

    setContent("");
    setUserId("");


  };

    return (
        <S.Wrap>
        <S.LeftWrap>
            <S.AvatorWrap>
                <S.Avator></S.Avator>
                <div onChange={onChangeUserId}></div>
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