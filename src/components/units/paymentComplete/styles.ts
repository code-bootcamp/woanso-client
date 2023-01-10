import styled from "@emotion/styled";

export const Wrap = styled.div`
padding: 400px 0 200px 0; 
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`
export const TitleWrap = styled.div`
display: flex;
gap: 10px;
`
export const Title = styled.span`
height: 49px;
font-style: normal;
font-weight: 700;
font-size: 49px;
line-height: 100%;
display: flex;
align-items: center;
letter-spacing: -0.05em;
color: #333333;
`
export const Number = styled.div`
width: 192px;
height: 16px;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 100%;
display: flex;
align-items: center;
letter-spacing: -0.05em;
color: #333333;
`
export const ButtonWrap = styled.div`
gap: 20px;
display: flex;
`
const Button = styled.button`
width: 240px;
height: 50px;
border-radius: 8px;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 100%;
`
export const MoreButton = styled(Button)`
background: #FFFFFF;
border: 1px solid #D1D5D9;
color: #738096;
`
export const DetailButton = styled(Button)`
background: #77170D;
color: #FFFFFF;
`