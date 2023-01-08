import * as S from "./style";

export default function SignupBenefit() {
  return (
    <S.Wrap>
      <S.EventSubTitle>EVENT</S.EventSubTitle>
      <S.EventTitle>신규 회원 가입 혜택</S.EventTitle>
      <S.EventBenefit>
        신규 회원 가입하시는 고객분들께 <S.Strong>즉시 포인트</S.Strong> 증정
      </S.EventBenefit>

      <S.PointBox>
        <S.PointText>완소 포인트</S.PointText>
        <S.PointAmount>3,000</S.PointAmount>
      </S.PointBox>
    </S.Wrap>
  );
}
