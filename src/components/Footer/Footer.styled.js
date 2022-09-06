import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;

  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  padding-top: 30px;
  padding-bottom: 30px;
`;

export const Text = styled.p`
  width: 325px;
  border-top: 0.2px solid black;
  border-bottom: 0.2px solid black;

  padding-top: 15px;
  padding-bottom: 15px;
`;

export const LogoImg = styled.img`
  margin-bottom: 30px;
`;

export const LogoText = styled.p`
  display: flex;
  gap: 10px;
  align-items: center;

  padding-top: 20px;

  color: #c0c0c0;
  img {
    width: 120px;
  }
`;

export const Title = styled.h3`
  color: white;

  margin-bottom: 40px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    a {
      color: white;
    }
  }
`;

export const SocialList = styled.ul`
  display: flex;
  gap: 30px;
  flex-direction: column;
  margin-right: 50px;
  margin-bottom: 20px;

  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

export const SocialItem = styled.li`
  display: flex;
  gap: 10px;
`;

export const SocialIcon = styled.ul`
  display: flex;
  gap: 20px;
  svg {
    width: 25px;
    height: 25px;
    color: white;

    border: red;
  }
`;
