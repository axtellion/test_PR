import Logo from 'images/logo.jpg';
import {
  ImgLogo,
  NavList,
  NavItem,
  SocialIcon,
  LogoLink,
} from './AppBar.styled';

import { MdLocationPin } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { Box } from 'components/Box';
import { MenuHero } from './MenuHero/MenuHero';

export const AppBar = () => {
  return (
    <Box display="flex" p="15px" width="1200px" mx="auto">
      <LogoLink href="/">
        <ImgLogo src={Logo} alt="Logo" />
      </LogoLink>
      <Box display="flex" flexWrap="wrap">
        <Box display="flex" mb="15px">
          <NavList>
            <NavItem>
              <MdLocationPin />
              <p>г. Харьков, ул. Мироносицкая 10</p>
            </NavItem>
            <NavItem>
              <BsTelephone />
              <p>+38 (099) 990-81-00 (viber, telegram)</p>
            </NavItem>
          </NavList>
          <SocialIcon>
            <li>
              <AiOutlineFacebook />
            </li>
            <li>
              <AiOutlineInstagram />
            </li>
          </SocialIcon>
        </Box>
        <MenuHero />
      </Box>
    </Box>
  );
};
