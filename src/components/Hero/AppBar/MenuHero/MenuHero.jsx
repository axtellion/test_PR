import { List, Item, Style, Container } from './MenuHero.styled';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { IoIosArrowDown } from 'react-icons/io';

export const MenuHero = () => {
  return (
    <Container>
      <List>
        <Item>
          <a href="/">Главная</a>
        </Item>
        <Item>
          <Style>
            <DropdownButton id="dropdown" title="Туры">
              <Dropdown.Item href="#/action-1">Горящие туры</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Поиск тура</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Туры по Украине</Dropdown.Item>
              <Dropdown.Item href="#/action-4">
                Экскурсионные туры
              </Dropdown.Item>
              <Dropdown.Item href="#/action-5">Week end туры</Dropdown.Item>
            </DropdownButton>
            <IoIosArrowDown />
          </Style>
        </Item>
        <Item>
          <a href="/">Страны</a>
        </Item>
        <Item>
          <Style>
            <DropdownButton id="dropdown" title="Услуги">
              <Dropdown.Item href="#/action-1">Авиабилеты</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Визовая поддержка</Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Индивидуальный трансфер
              </Dropdown.Item>
              <Dropdown.Item href="#/action-4">
                Подарочные сертификаты
              </Dropdown.Item>
              <Dropdown.Item href="#/action-5">
                Бронирование отелей и апартаментов
              </Dropdown.Item>
              <Dropdown.Item href="#/action-6">
                Как забронировать и оплатить тур
              </Dropdown.Item>
            </DropdownButton>
            <IoIosArrowDown />
          </Style>
        </Item>
        <Item>
          <a href="/">О компании</a>
        </Item>
        <Item>
          <a href="/">Контакты</a>
        </Item>
      </List>
    </Container>
  );
};
