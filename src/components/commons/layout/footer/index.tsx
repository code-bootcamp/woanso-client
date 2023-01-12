import { memo } from "react";
import * as S from "./styles";

function LayoutFooter() {
  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <S.TopContainer>
          <S.LeftWrap>
            <S.InfoName>(주)완소</S.InfoName>
          </S.LeftWrap>
          <S.LeftWrap>
            <S.InfoName>통신판매업 신고번호</S.InfoName>
            <S.InfoContent>2022-서울구로-1324호</S.InfoContent>
          </S.LeftWrap>
          <S.LeftWrap>
            <S.InfoName>사업장 주소</S.InfoName>
            <S.InfoContent>
              서울특별시 구로구 디지털로 300, 패스트파이브
            </S.InfoContent>
          </S.LeftWrap>
          <S.LeftWrap>
            <S.InfoName>대표 전화</S.InfoName>
            <S.InfoContent>01012345678</S.InfoContent>
          </S.LeftWrap>
          <S.LeftWrap>
            <S.InfoName>사업자 등록번호</S.InfoName>
            <S.InfoContent>325-11-01923</S.InfoContent>
          </S.LeftWrap>
        </S.TopContainer>

        <S.MiddleContainer>
          완소 웹사이트에 게시된 모든 컨텐츠들은 저작권법에 의거 보호받고
          있습니다.
          <br />
          저작권자 또는 (주)완소의 승인없이 컨텐츠의 일부 또는 전부를
          복제,전송,배포 및 기타의 방법으로 저작물을 이용할 경우에는
          <br /> 저작권법에 의해 법적 조치에 처해질 수 있으므로 주의하시길
          바랍니다.
        </S.MiddleContainer>
        <S.ButtomContainer>
          Copyright © 2022 완소 All Rights Reserved.
        </S.ButtomContainer>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
export default memo(LayoutFooter);
