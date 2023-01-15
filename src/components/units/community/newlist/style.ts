import styled from "@emotion/styled";

export const CommunityNewListWrap = styled.div`
  margin: 0 auto;
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px 0;

  p {
    width: calc((100% - 270px) / 2);
    height: 1px;
    background-color: #000000;
  }

  span {
    width: calc((100% - 270px) / 2 - 61px);
    height: 1px;
    background-color: #000000;
  }

  h3 {
    font-size: 1.875rem;
    font-weight: bolder;
    text-align: center;
    width: 270px;
  }

  button {
    font-size: 0.875rem;
    background: none;
  }
`;

export const ContentsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1px;
  max-width: 845px;
`;

export const Info = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.65);
  display: none;
  padding: 8px;
  color: #ffffff;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;

  p {
    font-weight: 400;
  }

  span {
    font-weight: 300;
  }
`;

export const Content = styled.div`
  width: 140px;
  height: 140px;
  background-color: #d9d9d9;
  position: relative;
  cursor: pointer;

  &:hover ${Info} {
    display: flex;
  }
`;

export const Image = styled.img`
width: 140px;
height: 140px;
`;
