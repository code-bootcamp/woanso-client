import { BulbFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

export const LoginWrapper = styled.div`
  width: 50%;
  /* box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.07); */
  border-radius: 10px;
  margin: 20px auto 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

@media screen and (max-width:568px) {
width: 350px;
justify-content: center;
align-items: center;
}
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const TitleMain = styled.div`
  width: 146.59px;
  height: 55.34px;
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 100%;
`;

export const TitleSub = styled.div`
  width: 83px;
  height: 32px;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 100%;
`;
export const ContentsWrapper = styled.div`
  box-sizing: border-box;
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 20px;

@media screen and (max-width:568px) {
width: 350px;
align-items: center;
}
`;

export const Label = styled.div`
  font-size: 20px;
  padding: 0 12px;
  
@media screen and (max-width:568px) {
width: 240px;
align-items: center;
}
`;

export const LoginButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Footer1 = styled.div`
  height: 18px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  text-align: center;
  cursor: pointer;
`;

export const SnsLoginWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  padding: 70px 0 100px 0;
`;

export const SnsLogin = styled.div``;

export const IconImg = styled.img`
  height: 70px;
  object-fit: contain;
`;