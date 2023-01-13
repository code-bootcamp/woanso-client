import { useState } from "react";
import { useQueryFetchWishlist } from "../../../../commons/hooks/queries/useQueryFetchWishlist";
import { OuterWrap, InnerWrap } from "../../../../commons/styles/Wrapper";
import ConfirmModal from "../../../commons/customModal/checkModal";
import * as S from "./style";

export default function MyWishList() {
  const [confirm, setConfirm] = useState(false);
  const { data } = useQueryFetchWishlist();
  console.log("===============", data);

  const onClickCancle = () => {
    setConfirm(true);
  };

  return (
    <OuterWrap>
      <InnerWrap>
        <S.MyWishListWrap>
          <S.Title>찜 목록</S.Title>
          <S.ListsWrap>
            {new Array(3).fill(1).map((_, index) => (
              <S.List key={index}>
                <S.BookImg src={`/item${index + 1}.png`} />
                <S.InfoWrap>
                  <S.BookName>
                    <h4>책제목</h4>
                  </S.BookName>
                  <S.BookAuthor>작가 이름</S.BookAuthor>
                  <S.BookRented>대여 일자</S.BookRented>
                </S.InfoWrap>
                <S.Btn onClick={onClickCancle}>취소</S.Btn>
                {confirm && (
                  <ConfirmModal confirm={confirm} setConfirm={setConfirm} />
                )}
              </S.List>
            ))}
          </S.ListsWrap>
        </S.MyWishListWrap>
      </InnerWrap>
    </OuterWrap>
  );
  /* <S.Wrap>
             <S.ContentsWrap>
               <S.ContentsIcon src="/icon/2.png"></S.ContentsIcon>
               <S.ContentsGrup>
                 <S.Content>위시리스트가 비어있네요!</S.Content>
                 <S.Content>취향에 맞는 만화책으로 채워보세요.</S.Content>
               </S.ContentsGrup>
               <SubmitButton2>추천리스트 보기</SubmitButton2>
             </S.ContentsWrap>
           </S.Wrap>
         )} */
}
