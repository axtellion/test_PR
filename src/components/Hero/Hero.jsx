import { Container, Wrap, Text, Btn } from './Hero.styled';
import { AppBar } from './AppBar/AppBar';
import { SliderBg } from './SliderBg/SliderBg';
import { Box } from 'components/Box';

export const Hero = () => {
  return (
    <Box position="relative" height="700px">
      <Container>
        <AppBar />
      </Container>
      <SliderBg />
      <Wrap>
        <Text>Лучшее предложение по солнечному Египту из Харькова</Text>
        <Btn>Получить предложение</Btn>
      </Wrap>
    </Box>
  );
};
