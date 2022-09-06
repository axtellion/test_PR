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
  border-top: 1px solid #a9a9a9;
  border-bottom: 1px solid #a9a9a9;

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
  margin-bottom: 40px;
  color: white;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    a {
      color: white;
      :hover,
      :active,
      :focus {
        outline: none;
        color: gold;
      }
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
  border-bottom: 1px solid #a9a9a9;

  color: white;
`;

export const SocialItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  cursor: pointer;
  :hover {
    color: gold;
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const SocialIcon = styled.ul`
  display: flex;
  gap: 20px;

  color: white;
  svg {
    cursor: pointer;
    width: 25px;
    height: 25px;

    border: red;
    :hover {
      color: gold;
    }
  }
`;
