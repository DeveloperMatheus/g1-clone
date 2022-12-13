import { Text, Box, Container } from '@chakra-ui/react'

const HeroSection = () => (
  <Container maxWidth="1440px" as="section">
    {/* Desktop */}
    <Box
      display={{ base: 'none', lg: 'flex' }}
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      mt="50px"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        border="1px solid #e1e1e1"
        height="600px"
        width="50%"
        padding="30px"
        mr="15px"
      >
        <Text color="darkText" fontWeight="semibold" flex="1">
          Novo governo
        </Text>

        <Box flex="2">
          <Text
            fontSize="40px"
            lineHeight="45px"
            color="primary"
            fontWeight="bold"
          >
            Lula anuncia Aloizio Mercadante como futuro presidente do BNDES
          </Text>

          <Text fontSize="16px" color="darkText" fontWeight="medium" mt="25px">
            Confirmação do nome do ex-ministro para comandar o banco ocorreu no
            evento que encerrou trabalhos da equipe de transição.{' '}
          </Text>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        border="1px solid #e1e1e1"
        height="600px"
        width="50%"
        padding="30px"
      >
        <Text color="darkText" fontWeight="semibold" flex="1">
          Novo governo
        </Text>

        <Box flex="2">
          <Text
            fontSize="40px"
            lineHeight="45px"
            color="primary"
            fontWeight="bold"
          >
            Lula anuncia Aloizio Mercadante como futuro presidente do BNDES
          </Text>

          <Text fontSize="16px" color="darkText" fontWeight="medium" mt="25px">
            Confirmação do nome do ex-ministro para comandar o banco ocorreu no
            evento que encerrou trabalhos da equipe de transição.{' '}
          </Text>
        </Box>
      </Box>
    </Box>
  </Container>
)

export default HeroSection
