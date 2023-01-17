import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { useQueryFetchAllComments } from "../../../../commons/hooks/queries/useQueryFetchAllComments";
import { useQueryFetchBoards } from "../../../../commons/hooks/queries/useQueryFetchBoards";
import * as S from "./style";

export default function MyIngo({ User }: any) {
  const router = useRouter();
  const { data } = useQueryFetchBoards();
  const { data: comments } = useQueryFetchAllComments();
  const userId = User?.fetchUserLoggedIn.id;

  const fetchBoardsByUser = data?.fetchBoards.filter(
    (el: any) => el.user.id === userId
  );

  const userComments = comments?.fetchAllComments.filter((el: any) => {
    el.user.id === userId;
  });

  const onClickMoveToPosting = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/community/${e.currentTarget.id}`);
  };

  return (
    <S.MyInfoWrap>
      <S.TopWrap>
        <S.ItemWrap>
          <S.TopTitle>등급</S.TopTitle>
          <S.GradeImg src="/grade/01.png" />
          <S.TopInfo>브론즈</S.TopInfo>
        </S.ItemWrap>
        <S.ItemWrap>
          <S.TopTitle>포스팅</S.TopTitle>
          <S.BigText>{fetchBoardsByUser?.length}</S.BigText>
        </S.ItemWrap>
        <S.ItemWrap>
          <S.TopTitle>댓글</S.TopTitle>
          <S.BigText>{userComments?.length}</S.BigText>
        </S.ItemWrap>
      </S.TopWrap>

      <S.BottomWrap>
        <S.Title>Posting</S.Title>
        <S.PostingListWrap>
          {fetchBoardsByUser?.map((el: any) => (
            <S.PostingWrap
              key={el.id}
              id={el.id}
              onClick={onClickMoveToPosting}
            >
              <S.PostingImg
                src={`https://storage.googleapis.com/${el.boardImg[0].url}`}
              />
            </S.PostingWrap>
          ))}
        </S.PostingListWrap>
      </S.BottomWrap>
    </S.MyInfoWrap>
  );
}
