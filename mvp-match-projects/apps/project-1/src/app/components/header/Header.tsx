import styled from 'styled-components';
import UserBar from '../user-bar/UserBar';

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  padding-top: 21px;
  padding-left: 35px;
`;

const HeaderLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #f3f6f9; ;
`;

const Logo = styled.img`
  width: 27px;
  height: 40px;
`;

const Sandwitch = styled.img`
  width: 30px;
  height: 27px;
  margin-left: 41px;
  margin-bottom: 6px;
`;

const UserBarContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 100px;
  margin-bottom: 16px;
  color: #005b96;
  font-weight: 700;
`;

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Logo src="../assets/images/logo.svg" />
        <Sandwitch src="../assets/images/sandwitch.svg" />
        <UserBarContainer>
          <UserBar />
        </UserBarContainer>
      </HeaderContainer>
      <HeaderLine></HeaderLine>
    </>
  );
};
