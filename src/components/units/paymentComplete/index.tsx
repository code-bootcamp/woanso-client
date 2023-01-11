import { InnerWrap, OuterWrap } from "../../../commons/styles/Wrapper";
import * as S from "./styles";

export default function PaymentCompleteUI(){
    return (
        <OuterWrap>
            <InnerWrap>
                <S.Wrap>
                    <S.TitleWrap>
                        <S.Title>대여가</S.Title>
                        <S.Title style={{color: "#77170D"}}>완료</S.Title>
                        <S.Title>되었습니다.</S.Title>
                    </S.TitleWrap>
                    
                    <S.Number>주문번호(123123123123123)</S.Number>
                    <S.ButtonWrap>
                        <S.MoreButton>만화책 더 둘러보기</S.MoreButton>
                        <S.DetailButton>대여내역상세</S.DetailButton>
                    </S.ButtonWrap>
                </S.Wrap>
            </InnerWrap>
        </OuterWrap>
    )
}