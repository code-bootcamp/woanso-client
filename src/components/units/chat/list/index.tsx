import * as S from "./styles";

export default function ChatList() {
  return (
    <>
      <S.OuterWrap>
        <S.InnerWrap>
          <S.ChatWrap>
            <img
              src="/icon/chat.png"
              style={{ width: "60px", height: "60px" }}
            />
            <S.ChatBox>
              <S.ChatContents>안녕하세요</S.ChatContents>
            </S.ChatBox>
          </S.ChatWrap>
          <S.MyChatBox>
            <S.MyChat>네 혹시 짱구 보셨나요?</S.MyChat>
          </S.MyChatBox>
          <S.ChatWrap>
            <img
              src="/icon/chat.png"
              style={{ width: "60px", height: "60px" }}
            />
            <S.ChatBox>
              <S.ChatContents>당연히 봤져</S.ChatContents>
            </S.ChatBox>
          </S.ChatWrap>
          <S.ChatWrap>
            <img
              src="/icon/chat.png"
              style={{ width: "60px", height: "60px" }}
            />
            <S.ChatBox>
              <S.ChatContents>다른 거 추천 좀 해주세용</S.ChatContents>
            </S.ChatBox>
          </S.ChatWrap>
          <S.TextareaBox>
            <S.WriteBox placeholder="message" />
            <S.ChatBtn>전송</S.ChatBtn>
          </S.TextareaBox>
        </S.InnerWrap>
      </S.OuterWrap>
    </>
  );
}
