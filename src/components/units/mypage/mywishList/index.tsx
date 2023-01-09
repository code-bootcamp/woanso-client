import { useState } from "react";
import { SubmitButton2 } from "../../../../commons/styles/Button";
import { OuterWrap, InnerWrap } from "../../../../commons/styles/Wrapper";
import * as S from "./style";

export default function MywishList() {
  const [isActive, setIsActive] = useState(false);

  const onClickMove = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <OuterWrap>
      <InnerWrap>
        <S.MainTitleWrap>
          <S.MainTitle onClick={onClickMove}>WISHLIST</S.MainTitle>
        </S.MainTitleWrap>
        {isActive ? (
          <S.Wrap>
            <S.CradWrap>
              <S.IconWrap>
                <S.Icon src="/Vector8.png"></S.Icon>
              </S.IconWrap>
              <S.ContentsWrap>
                <S.Img src="/item1.png"></S.Img>
                <S.Title>순정만화임당</S.Title>
                <S.Writer>작가</S.Writer>
                <S.Price>15,000원</S.Price>
                <S.ButtonWrap>
                  <SubmitButton2>대여하기</SubmitButton2>
                </S.ButtonWrap>
                {/* <S.Remove>Remove</S.Remove> */}
              </S.ContentsWrap>
            </S.CradWrap>
            <S.CradWrap>
              <S.IconWrap>
                <S.Icon src="/Vector8.png"></S.Icon>
              </S.IconWrap>
              <S.ContentsWrap>
                <S.Img src="/item1.png"></S.Img>
                <S.Title>순정만화임당</S.Title>
                <S.Writer>작가</S.Writer>
                <S.Price>15,000원</S.Price>
                <S.ButtonWrap>
                  <SubmitButton2>대여하기</SubmitButton2>
                </S.ButtonWrap>
                {/* <S.Remove>Remove</S.Remove> */}
              </S.ContentsWrap>
            </S.CradWrap>
            <S.CradWrap>
              <S.IconWrap>
                <S.Icon src="/Vector8.png"></S.Icon>
              </S.IconWrap>
              <S.ContentsWrap>
                <S.Img src="/item1.png"></S.Img>
                <S.Title>순정만화임당</S.Title>
                <S.Writer>작가</S.Writer>
                <S.Price>15,000원</S.Price>
                <S.ButtonWrap>
                  <SubmitButton2>대여하기</SubmitButton2>
                </S.ButtonWrap>
                {/* <S.Remove>Remove</S.Remove> */}
              </S.ContentsWrap>
            </S.CradWrap>
            <S.CradWrap>
              <S.IconWrap>
                <S.Icon src="/Vector8.png"></S.Icon>
              </S.IconWrap>
              <S.ContentsWrap>
                <S.Img src="/item1.png"></S.Img>
                <S.Title>순정만화임당</S.Title>
                <S.Writer>작가</S.Writer>
                <S.Price>15,000원</S.Price>
                <S.ButtonWrap>
                  <SubmitButton2>대여하기</SubmitButton2>
                </S.ButtonWrap>
                {/* <S.Remove>Remove</S.Remove> */}
              </S.ContentsWrap>
            </S.CradWrap>
            <S.CradWrap>
              <S.IconWrap>
                <S.Icon src="/Vector8.png"></S.Icon>
              </S.IconWrap>
              <S.ContentsWrap>
                <S.Img src="/item1.png"></S.Img>
                <S.Title>순정만화임당</S.Title>
                <S.Writer>작가</S.Writer>
                <S.Price>15,000원</S.Price>
                <S.ButtonWrap>
                  <SubmitButton2>대여하기</SubmitButton2>
                </S.ButtonWrap>
                {/* <S.Remove>Remove</S.Remove> */}
              </S.ContentsWrap>
            </S.CradWrap>
            <S.CradWrap>
              <S.IconWrap>
                <S.Icon src="/Vector8.png"></S.Icon>
              </S.IconWrap>
              <S.ContentsWrap>
                <S.Img src="/item1.png"></S.Img>
                <S.Title>순정만화임당</S.Title>
                <S.Writer>작가</S.Writer>
                <S.Price>15,000원</S.Price>
                <S.ButtonWrap>
                  <SubmitButton2>대여하기</SubmitButton2>
                </S.ButtonWrap>
                {/* <S.Remove>Remove</S.Remove> */}
              </S.ContentsWrap>
            </S.CradWrap>
            <S.CradWrap>
              <S.IconWrap>
                <S.Icon src="/Vector8.png"></S.Icon>
              </S.IconWrap>
              <S.ContentsWrap>
                <S.Img src="/item1.png"></S.Img>
                <S.Title>순정만화임당</S.Title>
                <S.Writer>작가</S.Writer>
                <S.Price>15,000원</S.Price>
                <S.ButtonWrap>
                  <SubmitButton2>대여하기</SubmitButton2>
                </S.ButtonWrap>
                {/* <S.Remove>Remove</S.Remove> */}
              </S.ContentsWrap>
            </S.CradWrap>
            <S.CradWrap>
              <S.IconWrap>
                <S.Icon src="/Vector8.png"></S.Icon>
              </S.IconWrap>
              <S.ContentsWrap>
                <S.Img src="/item1.png"></S.Img>
                <S.Title>순정만화임당</S.Title>
                <S.Writer>작가</S.Writer>
                <S.Price>15,000원</S.Price>
                <S.ButtonWrap>
                  <SubmitButton2>대여하기</SubmitButton2>
                </S.ButtonWrap>
                {/* <S.Remove>Remove</S.Remove> */}
              </S.ContentsWrap>
            </S.CradWrap>
          </S.Wrap>
        ) : (
          <S.Wrap2>
            <S.ContentsWrap2>
              <S.ContentsIcon src="/2.png"></S.ContentsIcon>
              {/* <S.ContentsIcon>❤️</S.ContentsIcon> */}
              <S.ContentsGrup>
                <S.Content>위시리스트가 비어있네요!</S.Content>
                <S.Content>취향에 맞는 만화책으로 채워보세요.</S.Content>
              </S.ContentsGrup>
              <SubmitButton2>추천리스트 보기</SubmitButton2>
            </S.ContentsWrap2>
          </S.Wrap2>
        )}
      </InnerWrap>
    </OuterWrap>
  );
}
