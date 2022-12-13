import { Container, Text } from '@chakra-ui/react'
import ProductCardSlider from 'components/ProductCardSlider'
import mockServico from 'components/ProductCardSlider/mock'

const Carousel = () => (
  <Container
    maxWidth="1440px"
    className="section-offset-anchor"
    mt={{ base: '30px', lg: '80px' }}
    id="servicos"
  >
    <Text
      as="h2"
      lineHeight={{ base: '35px', md: '60px' }}
      fontSize="4xl"
      fontWeight="bold"
      textAlign="center"
    >
      Serviços
    </Text>
    <ProductCardSlider items={mockServico} />
  </Container>
)

export default Carousel
