import styled from "@emotion/styled";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffdced;
  padding: 20px 100px;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 100px;
  object-fit: contain;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #6dd1e1;
  text-shadow: 2px 2px 2px white;
  padding-left: 10px;
`;

const UserBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserLogin = styled.div`
  color: #ffffff;
  text-shadow: 1px 1px 1px #555555;
  margin-right: 15px;
`;
const UserJoin = styled.div`
  color: #ffffff;
  text-shadow: 1px 1px 1px #555555;
`;

export default function Home() {
  return (
    <>
      <Header>
        <Logo>
          <LogoImg src="/logo2.png" />
          <Title>완 - 소</Title>
        </Logo>

        <UserBox>
          <UserLogin>로그인</UserLogin>
          <UserJoin>회원가입</UserJoin>
        </UserBox>
      </Header>
    </>
  );
}
