import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { FETCH_USER_LOGGED_IN } from "../../../../commons/hooks/queries/useQueryFetchUserLoggedIn";
import {
  IMutation,
  IMutationCreateCommentArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_COMMENTS } from "../list/queries";
import { CREATE_COMMENT } from "./queries";
import * as S from "./style";

export default function CommunityCommentWriteUI() {
  const router = useRouter();
  const [content, setContent] = useState("");

  const [createComment] = useMutation(CREATE_COMMENT);

  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const onChangeContent = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const onClickWrite = async () => {
    if (typeof router.query.boardId !== "string") return;

    try {
      await createComment({
        variables: {
          createCommentInput: {
            content,
            boardId: String(router.query.boardId),
          },
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }

    setContent("");
  };

  return (
    <S.Wrap>
      <S.LeftWrap>
        <S.AvatarWrap>
          <S.Avatar></S.Avatar>
        </S.AvatarWrap>
        <S.ContentsWrap>
          <S.MidWrap>
            <S.MidContents
              placeholder="답글을 등록합니다"
              onChange={onChangeContent}
            ></S.MidContents>
          </S.MidWrap>
        </S.ContentsWrap>
      </S.LeftWrap>
      <S.RightWrap>
        <S.Button onClick={onClickWrite}>답글</S.Button>
      </S.RightWrap>
    </S.Wrap>
  );
}
