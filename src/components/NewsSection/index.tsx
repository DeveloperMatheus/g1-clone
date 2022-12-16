import { Box, Container, Link, Text, Divider } from '@chakra-ui/react'
import CardNews from 'components/CardNews'
import SideNewsWidget from 'components/SideNewsWidget'
import cardNewsList from './mocks'

const NewsSection = () => (
  <Container
    display="flex"
    flexDirection="row"
    alignItems="start"
    justifyContent="center"
    as="section"
    maxWidth="1440px"
    mt={{
      base: '30px',
      lg: '50px'
    }}
  >
    <Box
      width={{
        base: '100%',
        lg: '70%'
      }}
      mr="7.5px"
    >
      {cardNewsList.map((item, index) => (
        <CardNews {...item} key={index} />
      ))}
    </Box>
    <Box
      display={{
        base: 'none',
        lg: 'inline-block'
      }}
      ml="7.5px"
      width="30%"
    >
      <SideNewsWidget
        title="Deu o que falar..."
        image="https://source.unsplash.com/user/willianjusten/1042x580"
        news={cardNewsList}
      />
    </Box>
  </Container>
)

export default NewsSection
