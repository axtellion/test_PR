import Carousel from 'react-bootstrap/Carousel';
import { Container, BgHero } from './SliderBg.styled';

import bg_1 from '../../../images/bg_1.jpg';
import bg_2 from '../../../images/bg_2.jpg';
import bg_3 from '../../../images/bg_3.jpg';
import bg_4 from '../../../images/bg_4.jpg';

export const SliderBg = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <BgHero className="d-block w-100" src={bg_1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <BgHero className="d-block w-100" src={bg_2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <BgHero className="d-block w-100" src={bg_3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <BgHero className="d-block w-100" src={bg_4} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};
