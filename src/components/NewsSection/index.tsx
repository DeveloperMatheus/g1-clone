import { Box, Container } from '@chakra-ui/react'
import CardNews from 'components/CardNews'
import cardNewsList from './mocks'

const NewsSection = () => (
  <Container as="section" maxWidth="1440px">
    <Box width="70%">
      {cardNewsList.map((item, index) => (
        <CardNews {...item} key={index} />
      ))}
    </Box>
    <Box width="30%"></Box>
  </Container>
)

export default NewsSection
