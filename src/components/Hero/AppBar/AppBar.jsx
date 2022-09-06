import Logo from 'images/logo.jpg';
import {
  ImgLogo,
  NavList,
  NavItem,
  SocialIcon,
  LogoLink,
  SocialIconItem,
} from './AppBar.styled';

import { MdLocationPin } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { Box } from 'components/Box';
import { MenuHero } from './MenuHero/MenuHero';

export const AppBar = () => {
  return (
    <Box p="15px" width="1200px" mx="auto">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <LogoLink href="/">
          <ImgLogo src={Logo} alt="Logo" />
        </LogoLink>
        <Box>
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
              <SocialIconItem>
                <AiOutlineFacebook />
              </SocialIconItem>
              <SocialIconItem>
                <AiOutlineInstagram />
              </SocialIconItem>
            </SocialIcon>
          </Box>
          <MenuHero />
        </Box>
      </Box>
    </Box>
  );
};
