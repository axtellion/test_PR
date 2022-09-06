import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  SlidImg,
  List,
  Container,
  Item,
  Wrap,
  CartWrap,
  CartTitle,
  CartInfo,
  CartSum,
  CartSumText,
} from './Slider.styled';
import { Box } from 'components/Box';
import { IoIosArrowForward } from 'react-icons/io';

import slid_1 from '../../images/slice_info_1.jpg';
import slid_2 from '../../images/slice_info_2.jpg';

export const Slid = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: false,
  };
  return (
    <Container>
      <List>
        <Item>Горящие туры</Item>
        <Item>Популярные туры</Item>
      </List>
      <Slider {...settings}>
        <Box width="700px" mr="50px">
          <Wrap>
            <Box display="flex">
              <SlidImg src={slid_1} alt="slid" />
              <CartWrap>
                <CartTitle>
                  <h3>8 мартв в Cyrene Sharm hotel</h3>
                  <p>(12.03.2018 - 19.03.2018)</p>
                </CartTitle>
                <CartInfo>
                  <p>Перелет, питание по системе all inclusive, трансфер</p>
                </CartInfo>
                <CartSum>
                  <CartSumText>
                    1259грн<span>/за 1 человека</span>
                  </CartSumText>
                  <IoIosArrowForward />
                </CartSum>
              </CartWrap>
            </Box>
          </Wrap>
        </Box>
        <Box width="700px" mr="50px">
          <Wrap>
            <Box display="flex">
              <SlidImg src={slid_1} alt="slid" />
              <CartWrap>
                <CartTitle>
                  <h3>8 мартв в Cyrene Sharm hotel</h3>
                  <p>(12.03.2018 - 19.03.2018)</p>
                </CartTitle>
                <CartInfo>
                  <p>Перелет, питание по системе all inclusive, трансфер</p>
                </CartInfo>
                <CartSum>
                  <CartSumText>
                    1259грн<span>/за 1 человека</span>
                  </CartSumText>
                  <IoIosArrowForward />
                </CartSum>
              </CartWrap>
            </Box>
          </Wrap>
        </Box>
        <Box width="700px" mr="50px">
          <Wrap>
            <Box display="flex">
              <SlidImg src={slid_2} alt="slid" />
              <CartWrap>
                <CartTitle>
                  <h3>8 мартв в Cyrene Sharm hotel</h3>
                  <p>(12.03.2018 - 19.03.2018)</p>
                </CartTitle>
                <CartInfo>
                  <p>Перелет, питание по системе all inclusive, трансфер</p>
                </CartInfo>
                <CartSum>
                  <CartSumText>
                    1259грн<span>/за 1 человека</span>
                  </CartSumText>
                  <IoIosArrowForward />
                </CartSum>
              </CartWrap>
            </Box>
          </Wrap>
        </Box>
      </Slider>
    </Container>
  );
};
