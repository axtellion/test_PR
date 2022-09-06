import { Box } from 'components/Box';
import info from '../../images/info.jpg';
import { Title, Photo, Container, Text } from './Specificity.styled';

export const Specificity = () => {
  return (
    <Box py="40px" bg="#DCDCDC">
      <Title>Наши преимущества</Title>
      <Container>
        <Photo src={info} alt="Diving" />
        <Text>
          Очень долго подбирали разные варианты для того, чтобы отпразновать
          свой юбилейный День рождения в путишествии и не могли определиться...
          Решили за помощью втурагенство. Гульнара, выслушав все пожелания,
          предложила отдых в Турции, отель Justiano Club Park Conti 5* в
          Окурджарал возле Аланьи. Мы очень благодарны ей за предложенный
          вариант!!!! Отдых получился отличный! Отлеь с большой ухоженной
          территорией, внимательный обслуживающий персонал. Отличный номер с
          видом на море.
        </Text>
      </Container>
    </Box>
  );
};
