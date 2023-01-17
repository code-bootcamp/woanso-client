import styled from "@emotion/styled";

export const PicksWrapper = styled.div`
  margin: 0 auto;
  background-color: #f5efe3;
  width: 1000px;
  height: 625px;
  display: flex;
  justify-content: center;
  padding: 100px 0;
  gap: 15px;
`;

export const LeftWrapper = styled.div`
  display: flex;
`;

export const Title = styled.h3`
  font-size: 1.875rem;
  font-weight: bolder;
  margin-right: 15px;
  padding: 20px 0;
`;

export const LeftContents = styled.div`
  width: 320px;
  height: 420px;
  /* background-color: #ffffff; */
  position: relative;
  background-image: url("https://storage.googleapis.com/woanso-storage/2023/1/16/8b728350-e8bf-4d75-b426-8a0db9730814/origin/11.jpg");
  background-size: cover;
`;

export const LeftButton = styled.button`
  width: 280px;
  height: 100px;
  background-color: #77170d;
  color: white;
  position: absolute;
  bottom: 30px;
  left: 20px;
  padding: 0;

  h4 {
    font-size: 16px;
    font-weight: 500;
    padding: 8px 0;
    color: #ffffff;
  }

  p {
    font-size: 12px;
    font-weight: 300;
    line-height: 14px;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  width: 500px;
  height: 420px;
  overflow-y: scroll;
`;

export const RightCard = styled.div`
  background-color: #ffffff;
  width: calc(100% / 3 - 10px);
  min-width: 152px;
  height: calc(100% / 2 - 7.5px);
  min-height: 200px;
  background-color: white;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
