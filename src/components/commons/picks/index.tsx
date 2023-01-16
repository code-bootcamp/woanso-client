import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/libraries/store";
import * as S from "./styles";

export default function Picks() {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);

  const onClickMoveToPage = () => {
    router.push("/join");
  };

  return (
    <S.PicksWrapper>
      <S.LeftWrapper>
        <S.Title>Picks</S.Title>
        <S.LeftContents>
          {!accessToken ? (
            <S.LeftButton onClick={onClickMoveToPage}>
              <h4>로그인하고 더 많은 추천 받기</h4>
              <p>
                발견의 기쁨을 선물합니다
                <br /> 취향에 꼭 맞는 만화를 추천해주세요!
              </p>
            </S.LeftButton>
          ) : (
            <S.LeftButton>
              <h4>지금 대여하러 하기</h4>
              <p>
                추천받은 만화가 마음에 드시나요?
                <br /> 만화책을 대여해보세요!
              </p>
            </S.LeftButton>
          )}
        </S.LeftContents>
      </S.LeftWrapper>
      <S.RightWrapper>
        {new Array(6).fill(1).map((_, index) => (
          <S.RightCard key={index + 1}>
            <S.Image src={`/picksImage/0${index + 1}.png`} />
          </S.RightCard>
        ))}
      </S.RightWrapper>
    </S.PicksWrapper>
  );
}
