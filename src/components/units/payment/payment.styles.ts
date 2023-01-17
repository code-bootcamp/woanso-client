import styled from "@emotion/styled";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export const Wrap = styled.div`
padding-top: 180px;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
width: 1000px;
margin: auto;
`
export const TitleWrap = styled.div`
height: 44px;
`
export const Title = styled.span`
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 100%;
margin-right: 5px;
`
export const SubWrap = styled.div``
export const SubTitle = styled.div`
width: 131px;
height: 23px;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 100%;
display: flex;
align-items: center;
letter-spacing: -0.05em;
color: #333333;
`

export const PaymentWrap = styled.div`
`
export const UserWrap = styled.div`
display: flex;
gap: 50px;

`

export const Line = styled.div`
width: 1000px;
height: 0px;
margin: 30px 0;
border: 1px solid #000000;
`
export const LeftUserWrap = styled.div`
display: flex;
flex-direction: column;
gap: 35px;
margin-top: 15px;
`
export const Label = styled.div`
width: 60px;
height: 23px;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 100%;
display: flex;
align-items: center;
letter-spacing: -0.05em;
color: #333333;
`
export const Label2 = styled(Label)`
margin-top: 125px;
`
export const RightUserWrap = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`

const Input = styled.input`
height: 50px;
background: #FFFFFF;
border: 1px solid #D1D5D9;
border-radius: 8px;
padding: 10px;
`


export const InputMid = styled(Input)`
width: 160px;
`
export const InputSmall = styled(Input)`
width: 70px;
`

export const InputLong = styled(Input)`
width: 895px;
`

export const AddressWrap = styled.div`
display: flex;
gap: 10px;
`
export const AdressNumber = styled.div``
export const Button = styled.button`
width: 124px;
height: 50px;
background: #77170D;
border-radius: 8px;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 100%;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.05em;
justify-content: center;
color: #FFFFFF;
`

export const AddressDetail = styled.div``
export const Number = styled.div``

export const ProductWrap = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
width: 1000px;
`
export const ProductTitleWrap = styled.div``
export const ProductTitle = styled.div`
width: 116px;
height: 23px;
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 100%;
display: flex;
align-items: center;
letter-spacing: -0.05em;
color: #333333;
`
export const ProductContentsWrap = styled.div`
display: flex;
justify-content: space-between;
`
export const ProductLeftWrap = styled.div`
display: flex;
gap: 20px;
`
export const ProductImgWrap = styled.div``
export const ProductImg = styled.img`
width: 100px;
height: 100px;
background: #D9D9D9;
`
export const LeftWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 5px;
`
export const ProductLeftTitle = styled.div`
width: 280px;
height: 17px;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 100%;
display: flex;
align-items: center;
letter-spacing: -0.05em;
color: #000000;
`
export const TotleBooks = styled.div`
width: 280px;
height: 29px;
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 100%;
display: flex;
align-items: center;
letter-spacing: -0.05em;
color: #000000;
`
export const ProductRightWrap = styled.div`
`
export const Price = styled.div`
width: 73px;
height: 34px;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 100%;
display: flex;
align-items: center;
letter-spacing: -0.05em;
color: #000000;
padding-top: 80px;
padding-left: 17px;
`

export const PriceWrap = styled.div`
display: flex;
width: 1000px;
gap: 300px;
justify-content: flex-end;
`
export const PriceLeftWrap = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`
export const PriceLeft = styled.div`
width: 80px;
height: 16px;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 100%;
display: flex;
align-items: center;
letter-spacing: -0.05em;
color: #000000;
`
export const PriceRightWrap = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`
export const PriceRight = styled.div`
width: 65px;
height: 16px;
left: 1379px;
top: 1176px;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 100%;
display: flex;
align-items: center;
letter-spacing: -0.05em;
color: #000000;
justify-content: center;
`

export const SubmitButtonWrap = styled.div`
display: flex;
justify-content: center;
margin-top: 50px;
width: 1000px;
`
export const SubmitButton = styled.button`
width: 340px;
height: 50px;
background: #77170D;
border-radius: 8px;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 100%;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.05em;
color: #FFFFFF;
justify-content: center;
`

export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcode)``;