import * as S from "./style";
export default function MainBanner() {
  return (
    <S.BannerWrap>
      <S.BannerImg src="/banner.jpg" />
      {/* <S.BannerVideo autoPlay loop muted>
        <source src="/banner.mp4" type="video/mp4" />
      </S.BannerVideo> */}
    </S.BannerWrap>
  );
}
