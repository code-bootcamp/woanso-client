import * as S from "./styles";

export default function ChatList() {
  return (
    <S.Wrap>
    <S.ChatListWrap>
      <S.Wrap2>
      <S.TopWrap>
        <S.Line/>
        <S.Date>2023년 1월 8일</S.Date>
        <S.Line/>
      </S.TopWrap>
      <S.MyChatWrap>
        <S.MyChat>안녕하세요!</S.MyChat>
      </S.MyChatWrap>
      <S.ChatWrap>
        <S.Chat>네 안녕하세요!</S.Chat>
      </S.ChatWrap>
      <S.ChatWrap>
        <S.Chat>어떤 만화 좋아해요?</S.Chat>
      </S.ChatWrap>
      </S.Wrap2>
      <S.ChatTextWrap>
      <S.CahtText>메세지를 입력해주세요.</S.CahtText>
      <S.Send>전송</S.Send>
    </S.ChatTextWrap>
    </S.ChatListWrap>
    </S.Wrap>
  );
}
