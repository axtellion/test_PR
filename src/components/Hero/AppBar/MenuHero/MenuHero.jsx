import { Item } from './MenuHero.styled';
import { Box } from 'components/Box';

// import { IoIosArrowDown } from 'react-icons/io';

export const MenuHero = () => {
  return (
    <Box py="10px" px="20px" bg="gold" borderRadius="10px">
      <Item>
        <li>
          <a href="/">Главная</a>
        </li>
        <li>
          <a href="/">Туры</a>
        </li>
        <li>
          <a href="/">Страны</a>
        </li>
        <li>
          <a href="/">Услуги</a>
        </li>
        <li>
          <a href="/">О компании</a>
        </li>
        <li>
          <a href="/">Контакты</a>
        </li>
      </Item>
    </Box>
  );
};
