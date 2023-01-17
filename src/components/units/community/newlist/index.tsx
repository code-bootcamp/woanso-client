import { useQuery } from "@apollo/client";
import Router, { useRouter } from "next/router";
import { FETCH_BOARDS } from "../../../../commons/hooks/queries/useQueryFetchBoards";
import { getDays } from "../../../../commons/libraries/getTimes";
import * as S from "./style";

export default function CommunityNewList() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARDS);

  const onClickCommunity = () => {
    void router.push(`/community`);
  };

  const onClickDetailCommunity = (boardId: any) => () => {
    void router.push(`/community/${boardId}`);
  }

    console.log(data);
  return (
    <S.CommunityNewListWrap>
      <S.TitleWrapper>
        <p></p>
        <h3>커뮤니티 최신글</h3>
        <span></span>
        <button onClick={onClickCommunity}>더보기 &gt;</button>
      </S.TitleWrapper>

      <S.ContentsWrap>
        {data?.fetchBoards.map((el: any, index: number) => (
          <S.Content key={el}>
            <S.Image src={`https://storage.googleapis.com/${el.boardImg[0].url}`} onClick={onClickDetailCommunity(el.id)}
            
            />
            <S.Info>
              <p>{el.user.nickname}</p>
              <span>{getDays(el.createdAt)}</span>
            </S.Info>
          </S.Content>
        ))}
      </S.ContentsWrap>
    </S.CommunityNewListWrap>
  );
}
