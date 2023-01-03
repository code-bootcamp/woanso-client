import * as S from "./styles";

export default function Randing() {
  return (
    <>
      <S.OuterWrap>
        <S.InnerWrap>
          {/* <S.VideoWrap> */}
          <video autoPlay muted loop>
            <source src="/randing/randing.mp4" type="video/mp4" />
          </video>
          {/* </S.VideoWrap> */}
          <S.ImgWrap>
            <S.LeftImg>
              <img src="/randing/1-1.png" />
            </S.LeftImg>
            <S.RightImg>
              <img src="/randing/3-1.png" />
            </S.RightImg>
            <S.LeftImg>
              <img src="/randing/2-1.png" />
            </S.LeftImg>
          </S.ImgWrap>
        </S.InnerWrap>
      </S.OuterWrap>
    </>
  );
}
