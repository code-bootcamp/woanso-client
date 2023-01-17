import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { FETCH_BOARDS } from "./queries";
import * as S from "./styles";

export default function CommunityListUI() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARDS);

  const onClickMoveToBoardDetail =
    (boardId: string) => (event: MouseEvent<HTMLDivElement>) => {
      void router.push(`/community/${boardId}`);
    };

  return (
    <S.Wrap>
      {data?.fetchBoards.map((el: any, index: number) => (
        <S.ContentsWrap key={el.id}>
          <S.MidWrap>
            <S.ImgWrap>
              <S.Img
                src={`https://storage.googleapis.com/${data.fetchBoards[index].boardImg[0]?.url}`}
                onClick={onClickMoveToBoardDetail(el.id)}
              />
            </S.ImgWrap>
            <S.MidContents onClick={onClickMoveToBoardDetail(el.id)}>
              {el.content}
            </S.MidContents>
          </S.MidWrap>
        </S.ContentsWrap>
      ))}
    </S.Wrap>
  );
}
