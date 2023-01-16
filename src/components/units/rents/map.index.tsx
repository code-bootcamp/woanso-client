import { useRouter } from "next/router";
import { MouseEvent } from "react";
import * as S from "./map.style";

export default function ListMap({ el }: any) {
  const router = useRouter();
  const onClickMoveToDetail = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/rents/${e.currentTarget.id}`);
  };

  return (
    <S.BookSubWrapper id={el.comicId} onClick={onClickMoveToDetail}>
      <S.BookImg src={`https://storage.googleapis.com/${el.ISBN}`}></S.BookImg>
      <S.BookInfo>
        <S.BookTitle>{el.title.slice(0, 18)}</S.BookTitle>
        <S.BookInfoSub>
          <S.BookAuthor>{el.author}</S.BookAuthor>
          <S.BookPrice>{el.rentalFee}원</S.BookPrice>
        </S.BookInfoSub>
      </S.BookInfo>
    </S.BookSubWrapper>
  );
}
