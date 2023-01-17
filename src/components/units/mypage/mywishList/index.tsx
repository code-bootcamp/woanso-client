import { Modal } from "antd";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { useMutationCreateWishList } from "../../../../commons/hooks/mutaions/useMutationCreateWishlist";
import {
  FETCH_WISHLIST,
  useQueryFetchWishlist,
} from "../../../../commons/hooks/queries/useQueryFetchWishlist";
import { SubmitButton2 } from "../../../../commons/styles/Button";
import { OuterWrap, InnerWrap } from "../../../../commons/styles/Wrapper";
import ConfirmModal from "../../../commons/customModal/checkModal";
import * as S from "./style";

export default function MyWishList({ User }: any) {
  const router = useRouter();
  const [confirm, setConfirm] = useState(false);
  const { data } = useQueryFetchWishlist();
  const [createWishlist] = useMutationCreateWishList();
  const TrueList = data?.fetchWishlist.filter((el: any) => el.isDib === true);

  const onClickCancle = async (e: MouseEvent<HTMLDivElement>) => {
    try {
      await createWishlist({
        variables: {
          createWishInput: {
            comicId: e.currentTarget.id,
            userId: String(User.fetchUserLoggedIn.id),
          },
        },
        refetchQueries: [{ query: FETCH_WISHLIST }],
      });
      Modal.success({ content: "찜 목록에서 삭제했습니다." });
    } catch (error) {
      Modal.error({ content: "삭제할 수 없습니다." });
      return;
    }
  };

  const onClickMoveToPage = () => {
    router.push("/rents");
  };

  return (
    <OuterWrap>
      <InnerWrap>
        {TrueList?.length > 0 ? (
          <S.MyWishListWrap>
            <S.Title>찜 목록</S.Title>
            <S.ListsWrap>
              {TrueList?.map((el: any) => (
                <S.List key={el.wishlistId}>
                  <S.BookImg
                    src={`https://storage.googleapis.com/${el.comic.ISBN}`}
                  />

                  <S.InfoWrap>
                    <S.BookName>
                      <h4>{el.comic.title}</h4>
                    </S.BookName>
                    <S.BookAuthor>{el.comic.author}</S.BookAuthor>
                    {/* <S.BookRented>{}</S.BookRented> */}
                  </S.InfoWrap>

                  <S.Btn id={el.comic.comicId} onClick={onClickCancle}>
                    취소
                  </S.Btn>

                  {confirm && (
                    <ConfirmModal confirm={confirm} setConfirm={setConfirm} />
                  )}
                </S.List>
              ))}
            </S.ListsWrap>
          </S.MyWishListWrap>
        ) : (
          <S.MyWishListWrap>
            <S.ContentsWrap>
              <S.ContentsIcon src="/icon/2.png"></S.ContentsIcon>
              <S.ContentsGrup>
                <S.Content>위시리스트가 비어있네요!</S.Content>
                <S.Content>취향에 맞는 만화책으로 채워보세요.</S.Content>
              </S.ContentsGrup>
              <SubmitButton2 onClick={onClickMoveToPage}>
                추천리스트 보기
              </SubmitButton2>
            </S.ContentsWrap>
          </S.MyWishListWrap>
        )}
      </InnerWrap>
    </OuterWrap>
  );
}
