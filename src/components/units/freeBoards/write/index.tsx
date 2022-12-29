import { useState } from "react";
import * as S from "./styles";

export default function FreeBoardsWrite() {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <S.WriteBoard>
      <S.BoardWrite>
        <S.ImgAndWrite>
          <S.ProfileImg src="/profile-freeboard.png" />
          <S.BoardContentWrite placeholder="무슨일이 일어나고 있나요?"></S.BoardContentWrite>
        </S.ImgAndWrite>
        <S.UnderBar>
          <S.ImgChoice src="/photo.png" />
          <S.WriteSubmit>{!isEdit ? "등록하기" : "수정하기"}</S.WriteSubmit>
        </S.UnderBar>
      </S.BoardWrite>
    </S.WriteBoard>
  );
}
