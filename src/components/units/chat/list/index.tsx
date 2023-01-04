import * as S from "./styles";

export default function ChatList() {
  return (
    <>
      <S.OuterWrap>
        <S.InnerWrap>
          <S.TopContainer>
            <S.TopLeft>
              <p>실시간 채팅</p>
              <S.Now>
                <img src="/icon/chat3.png" />
                <div>92명</div>
              </S.Now>
            </S.TopLeft>
            <S.CloseBtn>
              <img src="/icon/chat2.png" />
            </S.CloseBtn>
          </S.TopContainer>
          <S.DateBox>2023/1/3</S.DateBox>
          <S.ChatWrap>
            <img src="/icon/son.png" />
            <S.ChatTime>2:45 pm</S.ChatTime>
            <S.ChatBox>
              <S.ChatContents>안녕하세요</S.ChatContents>
            </S.ChatBox>
          </S.ChatWrap>
          <S.MyChatBox>
            <S.ChatTime>2:46 pm</S.ChatTime>
            <S.MyChat>네 혹시 짱구 보셨나요?</S.MyChat>
          </S.MyChatBox>
          <S.ChatWrap>
            <img src="/icon/son.png" />
            <S.ChatTime>2:48 pm</S.ChatTime>
            <S.ChatBox>
              <S.ChatContents>당연히 봤져</S.ChatContents>
            </S.ChatBox>
          </S.ChatWrap>
          <S.ChatWrap>
            <img src="/icon/son.png" />
            <S.ChatTime>2:49 pm</S.ChatTime>
            <S.ChatBox>
              <S.ChatContents>다른 거 추천 좀 해주세용</S.ChatContents>
            </S.ChatBox>
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
