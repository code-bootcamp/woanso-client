import * as S from "./styles";

export default function ChatList() {
  return (
    <>
      <S.OuterWrap>
        <S.InnerWrap>
          <S.DateBox>2023/1/3</S.DateBox>
          <S.ChatWrap>
            <img src="/icon/son.png" />
            <S.ChatBox>
              <S.ChatContents>안녕하세요</S.ChatContents>
            </S.ChatBox>
          </S.ChatWrap>
          <S.MyChatBox>
            <S.MyChat>네 혹시 짱구 보셨나요?</S.MyChat>
          </S.MyChatBox>
          <S.ChatWrap>
            <img src="/icon/son.png" />
            <S.ChatBox>
              <S.ChatContents>당연히 봤져</S.ChatContents>
            </S.ChatBox>
          </S.ChatWrap>
          <S.ChatWrap>
            <img src="/icon/son.png" />
            <S.ChatBox>
              <S.ChatContents>다른 거 추천 좀 해주세용</S.ChatContents>
            </S.ChatBox>
            <S.ChatTime>2:49 pm</S.ChatTime>
          </S.ChatWrap>
          <S.TextareaBox>
            <S.WriteBox placeholder="Enter a chat" />
            <S.ChatBtn>
              <img src="/icon/send2.png" />
            </S.ChatBtn>
          </S.TextareaBox>
        </S.InnerWrap>
      </S.OuterWrap>
    </>
  );
}
