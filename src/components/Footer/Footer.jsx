import webakula from '../../images/webakula.png';
import footerLogo from '../../images/foter.jpg';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { MdLocationPin } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';

import {
  Container,
  Text,
  LogoImg,
  LogoText,
  Title,
  List,
  SocialList,
  SocialItem,
  SocialIcon,
} from './Footer.styled';
import { Box } from 'components/Box';

export const Footer = () => {
  return (
    <Box bg=" #4682b4">
      <Container>
        <div>
          <LogoImg src={footerLogo} alt="Logo" />
          <Text>
            Кураж тур агенство, которое предоставляет услуги по поиску,
            оформлению и подбору туров для вас и ваших родных.
          </Text>
          <LogoText>
            Создание сайта - <img src={webakula} alt="Webakula" />
          </LogoText>
        </div>
        <div>
          <Title>Навигация</Title>
          <List>
            <li>
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="/">О компании</a>
            </li>
            <li>
              <a href="/">Туры</a>
            </li>
            <li>
              <a href="/">Контакты</a>
            </li>
            <li>
              <a href="/">Услуги</a>
            </li>
          </List>
        </div>
        <div>
          <Title>Поддержка</Title>
          <List>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Блог</a>
            </li>
            <li>
              <a href="/">Обратная связь</a>
            </li>
          </List>
        </div>
        <div>
          <Title>Контакты</Title>
          <SocialList>
            <SocialItem>
              <MdLocationPin />
              <p>г. Харьков, ул. Мироносицкая 10a</p>
            </SocialItem>
            <SocialItem>
              <BsTelephone />
              <p>+38 (099) 990-81-00</p>
            </SocialItem>
          </SocialList>
          <SocialIcon>
            <li>
              <AiOutlineFacebook />
            </li>
            <li>
              <AiOutlineInstagram />
            </li>
          </SocialIcon>
        </div>
      </Container>
    </Box>
  );
};
