import { useRouter } from "next/router";
import { MouseEvent } from "react";
import * as S from "./map.style";

export default function ListMap(props: any) {
  const router = useRouter();
  const onCLickMoveToDetail = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/rents/${e.currentTarget.id}`);
  };
  return (
    <S.BookSubWrapper
      key={props.el.comicId}
      id={props.el.comicId}
      onClick={onCLickMoveToDetail}
    >
      <S.BookImg
        src={`https://storage.googleapis.com/${props.el.ISBN}`}
      ></S.BookImg>
      <S.BookInfo>
        <S.BookTitle>{props.el.title}</S.BookTitle>
      </S.BookInfo>
    </S.BookSubWrapper>
  );
}
