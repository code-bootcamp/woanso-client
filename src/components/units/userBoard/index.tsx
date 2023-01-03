import { useState } from "react";
import * as S from "./style"

export default function UserBoard() {
    const [change, setChange ] = useState(false);

    const onClickReview = () => {
        setChange(true)
    }

    const onClickBoard = () => {
        setChange(false)
    }



  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <S.BoxWrapper>
            <S.BoxButtonWrapper>
                <S.BoxButton onClick={onClickBoard}>게시글</S.BoxButton>
                <S.BoxButton onClick={onClickReview}>리뷰</S.BoxButton>
            </S.BoxButtonWrapper>
        <S.BoxTitle>회원 리스트</S.BoxTitle>
        <S.BoxSearch placeholder="회원 정보를 검색하세요." />
        <S.BoxUserList>다나카상</S.BoxUserList>
        <S.BoxUserList>다나카상</S.BoxUserList>
        <S.BoxUserList>다나카상</S.BoxUserList>
        <S.BoxUserList>다나카상</S.BoxUserList>
        <S.BoxUserList>다나카상</S.BoxUserList>
        <S.BoxUserList>다나카상</S.BoxUserList>
        <S.BoxUserList>다나카상</S.BoxUserList>
        <S.BoxUserList>다나카상</S.BoxUserList>
        <S.BoxUserList>다나카상</S.BoxUserList>
        </S.BoxWrapper>
     {change ? (
        <S.Table>
        <S.Thead>
          <S.TableRow>
            <S.TableHead>게시글 제목</S.TableHead>
            <S.TableHead>게시글 날짜</S.TableHead>
            <S.TableHead>리뷰 내용</S.TableHead>
            <S.TableHead>평점</S.TableHead>
          </S.TableRow>
        </S.Thead>
        <S.Tbody>
          {["a", "b", "c", "d", "e", "f", "g", "h", "i"].map(
            (el, index) => (
              <S.TableRow2 key={index}>
                <S.TableDaata>완소에서 빌려보장~</S.TableDaata>
                <S.TableDaata>2023-01-02</S.TableDaata>
                <S.TableDaata>완소 정말 최고네요 ~~!!!</S.TableDaata>
                <S.TableDaata>2</S.TableDaata>
              </S.TableRow2>
            )
          )}
        </S.Tbody>
      </S.Table>
      
     ) : (
        <S.Table>
        <S.Thead>
          <S.TableRow>
            <S.TableHead>게시글 제목</S.TableHead>
            <S.TableHead>게시글 날짜</S.TableHead>
            <S.TableHead>좋아요</S.TableHead>
            <S.TableHead>싫어요</S.TableHead>
          </S.TableRow>
        </S.Thead>
        <S.Tbody>
          {["a", "b", "c", "d", "e", "f", "g", "h", "i"].map(
            (el, index) => (
              <S.TableRow2 key={index}>
                <S.TableDaata>완소에서 빌려보장~</S.TableDaata>
                <S.TableDaata>2023-01-02</S.TableDaata>
                <S.TableDaata>1,230</S.TableDaata>
                <S.TableDaata>2</S.TableDaata>
              </S.TableRow2>
            )
          )}
        </S.Tbody>
      </S.Table>
       )}
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
