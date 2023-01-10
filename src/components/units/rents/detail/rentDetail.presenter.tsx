import RentsReviewWrite from "../../rentsReview/write/rentsReviewWrite.container";
import * as S from "./rentDetail.styles";
import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import type { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import RentsReviewList from "../../rentsReview/list/rentsReviewList.container";

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const disabledDate: RangePickerProps["disabledDate"] = (current) => {
  return current && current < dayjs().endOf("day");
};

export default function RentDetailUI() {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [starCount, setStarCount] = useState(3);

  const onClickToggle = () => {
    setToggleIcon((prev) => !prev);
  };

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.DetailWrap>
            <S.ImageWrap>
              <img src="/item1.png" />
            </S.ImageWrap>

            <S.InfoWrap>
              <S.InfoFlexWrap>
                <S.BookName>만화책이름</S.BookName>
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
              <S.BookAuthor>작가이름</S.BookAuthor>
              <S.BookDetail>
                만화책설명 만화책설명 만화책설명 만화책설명 만화책설명
                만화책설명
              </S.BookDetail>
              <S.InfoFlexWrap>
                <S.Price>15,000원</S.Price>
                <S.RentBtn>대여</S.RentBtn>
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
