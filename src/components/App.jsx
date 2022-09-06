import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';
import { Hero } from './Hero/Hero';
import { Slid } from './Slider/Slider';
import { Specificity } from './Specificity/Specificity';
import { OffersForm } from './OffersForm/OffersForm';
import { Footer } from './Footer/Footer';
export const App = () => {
  return (
    <Box width="100wh" mx="auto">
      <Hero />
      <Slid />
      <Specificity />
      <OffersForm />
      <Footer />
      <GlobalStyle />
    </Box>
  );
};
