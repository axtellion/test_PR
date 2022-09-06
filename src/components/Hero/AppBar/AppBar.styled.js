import styled from 'styled-components';

export const ImgLogo = styled.img`
  background-color: transparent;
  width: 100px;
  height: 80px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 30px;

  margin-right: 50px;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  color: white;
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
`;

export const LogoLink = styled.a`
  padding: 20px;
`;

export const SocialIconItem = styled.li`
  cursor: pointer;
  svg {
    width: 25px;
    height: 25px;
  }
  :hover {
    color: gold;
  }
`;
