import styled from "@emotion/styled";

export const OutWrapper = styled.div``
export const InnerWrapper = styled.div`
margin: 100px 0px;
text-align: center;
`
export const IdpwFindWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const TitleWrapper = styled.div`
margin-bottom: 20px;
`
export const Title = styled.div`
font-size: 32px;
`
export const NavWrapper = styled.div`
display: flex;
justify-content: center;
gap: 50px;
/* margin-bottom: 40px; */
`
export const Nav = styled.div`
font-size: 20px;
/* border-bottom: 1px solid gray; */
color: ${props => props.qqq ? "#fff" : "black"};
padding: 7px 20px;
background-color: ${props => props.qqq ? "#77170d" : "white"};
border-radius: 8px 8px 0 0;
`
export const Nav2 = styled.div`
font-size: 20px;
/* border-bottom: 1px solid gray; */
color: ${props => props.ccc ? "#fff" : "black"};
background-color: ${props => props.ccc ? "#77170d" : "white"};
border-radius: 8px 8px 0 0;
padding: 7px 20px;
`
export const InputWrapper = styled.div`
display: flex;
width: 450px;
margin-bottom: 60px;
flex-direction: column;
border: 2px solid ${props => props.bbb ? "#F5EFE3" : "#F5EFE3"};
align-items: center;
padding:40px;
`
export const Input = styled.input`
border: none;
border-bottom: 1px solid gray;
text-align: start;
margin-bottom: 40px;
padding: 15px;
width: 300px;
margin-top: 20px;
display: flex;
`

export const Input2 = styled.input`
border: none;
text-align: start;
padding: 15px;
width: 250px;
margin-top: 20px;
display: flex;
`
export const Line = styled.div`
background-color: gray;
width: 300px;
margin-bottom: 40px;
height: 0px;
border-bottom: 1px solid gray;
`
export const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
`
export const CheckButton = styled.div`
width: 200px;
height: 40px;
color: #ffffff;
padding: 10px;
background-color: #77170D;
`
export const Button = styled.button`
width: 50px;
height: 28px;
/* color: #ffffff; */
padding: 6px;
background-color: #F5EFE3;
font-size: 12px;
margin-top: 30px;
/* margin-right: 100px; */
/* margin-left: 80px; */
`

export const CheckWrapper = styled.div`
display: flex;
flex-direction: column;

`

export const CheckWrapper2 = styled.div`
display: flex;
`