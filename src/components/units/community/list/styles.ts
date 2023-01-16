import styled from "@emotion/styled";

export const Wrap = styled.div`
width: 1000px;
display: flex;
justify-content: space-between;
border-radius: 20px;
flex-wrap: wrap;
gap: 10px;
`
export const ContentsWrap = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
border: 1px solid #999999;
border-radius: 20px;
box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
transition: .15s all ease-in-out;
    :hover {
      transform: scale(1.1);
    }
margin-bottom: 40px;
`

export const MidWrap = styled.div``
export const MidContents = styled.div`
margin-bottom: 30px;
width: 300px;
height: 10px;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 100%;
display: flex;
align-items: center;
letter-spacing: -0.05em;
color: #333333;
padding: 20px 20px;
`
export const ImgWrap = styled.div`
margin-bottom: 20px;
cursor: pointer;
`
export const Img = styled.img`
height: 280px;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
width: 300px;
`