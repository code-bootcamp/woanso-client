import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { useQueryFetchBoards } from "../../../../commons/hooks/queries/useQueryFetchBoards";
import * as S from "./style";

export default function MyIngo({ UserId }: any) {
  const router = useRouter();
  const { data } = useQueryFetchBoards();
  console.log(data?.fetchBoards);

  const onClickMoveToPosting = (e: MouseEvent<HTMLDivElement>) => {
    router.push("/community");
  };

  return (
    <S.MyInfoWrap>
      <S.TopWrap>
        <S.ItemWrap>
          <S.TopTitle>등급</S.TopTitle>
          <S.GradeImg src="/grade/01.png" />
          <S.TopInfo>실버</S.TopInfo>
        </S.ItemWrap>
        <S.ItemWrap>
          <S.TopTitle>포인트</S.TopTitle>
          <S.PointImg src="/icon/point.png" />
          <S.TopInfo>3,000</S.TopInfo>
        </S.ItemWrap>
        <S.ItemWrap>
          <S.TopTitle>포스팅</S.TopTitle>
          <S.BigText>1</S.BigText>
        </S.ItemWrap>
        <S.ItemWrap>
          <S.TopTitle>댓글</S.TopTitle>
          <S.BigText>10</S.BigText>
        </S.ItemWrap>
      </S.TopWrap>

      <S.BottomWrap>
        <S.Title>Posting</S.Title>
        <S.PostingListWrap>
          {data?.fetchBoards.filter(
            (el: any) =>
              el.user.id === "610950a3-31ab-421a-a334-7d82cb19ce67" && (
                <S.PostingWrap key={el.id} onClick={onClickMoveToPosting}>
                  <S.PostingImg src={el.boardImg[0]} />
                </S.PostingWrap>
              )
          )}
        </S.PostingListWrap>
      </S.BottomWrap>
    </S.MyInfoWrap>
  );
}
