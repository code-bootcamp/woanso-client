import styled from "@emotion/styled";

export const OuterWrap = styled.div`
  padding-top: 180px;
  padding-bottom: 50px;
  /* border-bottom: 1px solid #000000; */
`;

export const InnerWrap = styled.div`
  background-color: #f5efe3;
  padding: 50px 120px;
`;

export const TitleWrap = styled.div`
  display: flex;
  gap: 7px;
  margin-bottom: 20px;
`;
export const Title = styled.div`
  /* width: 195px; */
  height: 44px;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 100%;
  /* or 30px */
  display: flex;
  align-items: center;
  letter-spacing: -0.05em;
  color: #000000;
`;

export const Title2 = styled(Title)`
  color: #77170d;
`;
export const ContentsWrap = styled.div`
  display: flex;
  gap: 2px;
`;
export const Contents = styled.img`
  height: 140px;
  margin-right: 35px;
`;
export const Info = styled.div`
  li {
    font-size: 1rem;
    line-height: 2rem;
  }
`;
