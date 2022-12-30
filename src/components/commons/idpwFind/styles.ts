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
width: 400px;
margin-bottom: 60px;
flex-direction: column;
border: 2px solid ${props => props.bbb ? "#F5EFE3" : "#F5EFE3"};
`

// export const InputWrapper2 = styled.div`
// display: flex;
// width: 350px;
// height: 100px;
// margin-bottom: 60px;
// flex-direction: column;
// background-color: ${props => props.bbb ? "#F5EFE3" : "purple"};
// `

export const Input = styled.div`
border-bottom: 1px solid gray;
text-align: start;
margin-bottom: 40px;
padding: 10px;
width: 300px;
margin-left: 20px;
margin-top: 20px;
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
