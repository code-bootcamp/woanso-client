import styled from "@emotion/styled";
import { Modal } from "antd";

export const ModalCustom = styled(Modal)`
  
  .ant-modal-content {
    border-radius: 10px;
  }
  .ant-modal-body {
    padding-top: 10px;
    font-size: 14px;
    line-height: 1.5715;
    word-wrap: break-word;
  }
  .ant-modal-title {
    color: #fff;
  }
  .ant-modal-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px;
  }
  .ant-modal-footer > .ant-btn-primary {
    display: none;
  }
  .ant-modal-footer > .ant-btn-default {
    display: none;
  }
  .ant-modal-close-x {
    display: none;
  }
`

export const Wrap = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
padding: 60px;

`
export const TopWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
`
export const Img = styled.div`
width: 60px;
height: 60px;
border-radius: 50%;
background: #FAFAFD;
border: 1px solid rgba(218, 218, 218, 0.4);
color: #77170D;
font-size: 40px;
display: flex;
justify-content: center;
font-weight: 700;
`
export const Title = styled.div`
width: 408px;
height: 36px;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
/* identical to box height, or 150% */

text-align: center;
letter-spacing: -0.05em;

color: #333333;
`
export const SubTitle = styled.div`
width: 408px;
height: 24px;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
/* identical to box height, or 133% */

display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.05em;
justify-content: center;
color: #888888;
`
export const BottomWrap = styled.div`
display: flex;
gap: 20px;
justify-content: center;
`
export const BackButton = styled.button`
width: 148px;
height: 50px;

background: #FFFFFF;
border: 1px solid #D1D5D9;
border-radius: 8px;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 100%;
/* or 20px */

display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.05em;

color: #738096;
justify-content: center;
`
export const DelButton = styled.button`
width: 148px;
height: 50px;

background: #77170D;
border-radius: 10px;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
/* or 150% */

display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.04em;
justify-content: center;
color: #FFFFFF;

`

