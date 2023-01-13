import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { useQueryFetchBoardsByUser } from "../../../../commons/hooks/queries/useQueryFetchBoardsByUser";
import * as S from "./style";

export default function MyIngo() {
  const router = useRouter();
  const { data } = useQueryFetchBoardsByUser();
  console.log(data?.fetchBoardsByUser);

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
          {data?.fetchBoardsByUser.map((el: any) => (
            <S.PostingWrap key={el.id} onClick={onClickMoveToPosting}>
              <S.PostingImg src={el.boardImg.url} />
            </S.PostingWrap>
          ))}
        </S.PostingListWrap>
      </S.BottomWrap>
    </S.MyInfoWrap>
  );
}
