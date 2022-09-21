import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 43px;
  position: relative;

  .user_initials {
    position: absolute;
    font-size: 23px;
    line-height: 27px;
    top: 8px;
    left: 8px;
    color: #ffffff;
  }

  .user_name {
    margin-left: 11px;
    padding-top: 12px;
    width: 100%;
    left: 11px;
  }
`;

const UserBar = () => {
  return (
    <Container>
      <img
        className="avatar"
        alt="John Doe"
        src="../assets/images/empty_avatar.png"
      />
      <span className="user_initials">JD</span>
      <span className="user_name">John Doe</span>
    </Container>
  );
};

export default UserBar;
