import * as S from "./Signup.styles"

export default function SignupUI(){


  const onClickSubmit =  () => {
   
  };



    return (
        <S.Wrapper>
            <S.TitleWrapper>
                <S.TitleMain>회원가입</S.TitleMain>
                <S.TitleSub>Sign up</S.TitleSub>
            </S.TitleWrapper>
            {/* <form onSubmit={handleSubmit(onClickSubmit)}> */}
            <S.ContentsWrapper>
                <S.SubWrapper>
                    <S.Label>아이디</S.Label>
                    <S.Input placeholder="이메일 아이디를 @까지 정확하게 입력하세요." type="text"></S.Input>
                </S.SubWrapper>
                <S.SubWrapper>
                    <S.Label>닉네임</S.Label>
                    <S.Input placeholder="사용할 닉네임을 입력하세요." type="text"></S.Input>
                </S.SubWrapper>
                <S.SubWrapper>
                    <S.Label>비밀번호</S.Label>
                    <S.Input placeholder="영문+숫자 조합 8~16자리를 입력해주세요." type="password" ></S.Input>
                </S.SubWrapper>
                <S.SubWrapper>
                    <S.Label>비밀번호확인</S.Label>
                    <S.Input placeholder="영문+숫자 조합 8~16자리를 입력해주세요." type="password" ></S.Input>
                </S.SubWrapper>
                <S.SubWrapper>
                    <S.Label>성별</S.Label>
                    <S.Radio type="radio" id="woman" name="radio-button"/>여
                    <S.Radio type="radio" id="man" name="radio-button"/>남
                </S.SubWrapper>
                <S.SubWrapper>
                    <S.Label>장르 선택</S.Label>
                    <S.CheckBox type="checkbox"/>국내 순정
                    <S.CheckBox type="checkbox"/>해외 순정
                    <S.CheckBox type="checkbox"/>드라마
                    <S.CheckBox type="checkbox"/>무협
                    <S.CheckBox type="checkbox"/>학원
                    <S.CheckBox type="checkbox"/>액션
                    <S.CheckBox type="checkbox"/>판타지/SF
                    <S.CheckBox type="checkbox"/>스포츠
                    <S.CheckBox type="checkbox"/>공포/추리
                </S.SubWrapper>
            </S.ContentsWrapper>
            <S.ButtonWrapper>
                <S.SignupButton>회원가입하기</S.SignupButton>
                <S.BackButton>취소</S.BackButton>
            </S.ButtonWrapper>
            
            <S.Footer>
                    <S.Footer1>이미 아이디가 있으신가요?</S.Footer1>
                    <S.Footer2>로그인</S.Footer2>
                </S.Footer>
                {/* </form> */}
        </S.Wrapper>
    )
}