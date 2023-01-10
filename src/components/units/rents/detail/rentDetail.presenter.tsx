import RentsReviewWrite from "../../rentsReview/write/rentsReviewWrite.container";
import * as S from "./rentDetail.styles";
import React, { useState } from "react";
import RentsReviewList from "../../rentsReview/list/rentsReviewList.container";
import { useRouter } from "next/router";
import { useQueryFetchComic } from "../../../../commons/hooks/queries/useQueryFetchComic";

export default function RentDetailUI() {
  const router = useRouter();
  const [toggleIcon, setToggleIcon] = useState(false);
  const [starCount, setStarCount] = useState(3);

  // console.log(router.query.boardId);
  const { data } = useQueryFetchComic(router.query.boardId);
  console.log(data);

  const onClickToggle = () => {
    setToggleIcon((prev) => !prev);
  };

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.DetailWrap>
            <S.ImageWrap>
              <img src={data?.fetchComic.illustrator} />
            </S.ImageWrap>

            <S.InfoWrap>
              <S.InfoFlexWrap>
                <S.BookName>{data?.fetchComic.title}</S.BookName>
                <div onClick={onClickToggle}>
                  {toggleIcon ? <S.HearIconClicked /> : <S.HearIcon />}
                </div>
              </S.InfoFlexWrap>
              <S.BookScore>
                <div>
                  {new Array(starCount).fill(1).map((_, index) => (
                    <S.fillStar />
                  ))}
                  {new Array(5 - starCount).fill(1).map((_, index) => (
                    <S.Star />
                  ))}
                </div>
                <p>3점</p>
              </S.BookScore>
              <S.BookAuthor>{data?.fetchComic.author}</S.BookAuthor>
              <S.BookDetail>{data?.fetchComic.description}</S.BookDetail>
              <S.InfoFlexWrap>
                <S.Price>{data?.fetchComic.rentalFee}원</S.Price>
                <S.RentBtn>
                  {data?.fetchComic.isAvailable ? "대여" : "대여불가"}
                </S.RentBtn>
              </S.InfoFlexWrap>
            </S.InfoWrap>
          </S.DetailWrap>

          <RentsReviewWrite />
          <S.ReviewListBox>
            <RentsReviewList />
            <RentsReviewList />
            <RentsReviewList />
            <RentsReviewList />
            <RentsReviewList />
          </S.ReviewListBox>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
