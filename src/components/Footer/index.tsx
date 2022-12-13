import {
  Box,
  SimpleGrid,
  Text,
  Link,
  IconButton,
  Container
} from '@chakra-ui/react'
import { FaInstagram } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { IoLogoFacebook } from 'react-icons/io5'

import Image from 'next/image'

const Footer = () => (
  <Container
    as="footer"
    position="sticky"
    minWidth="100%"
    top="100%"
    aria-label="footer"
    boxShadow="dark-lg"
    px={3}
    py={5}
    mt={{ base: '30px', lg: '80px' }}
    backgroundColor="primary"
  >
    <SimpleGrid
      columns={{ xs: 1, md: 3 }}
      spacing="40px"
      maxWidth={{ xl: '60%' }}
      mx="auto"
    >
      <Box>
        <Text color="white" fontSize="2xl" textAlign="center">
          Mapa do site
        </Text>
        <Link
          color="white"
          aria-label="link"
          display="block"
          mt={3}
          textAlign="center"
          href="#"
        >
          Home
        </Link>
        <Link
          color="white"
          aria-label="link"
          display="block"
          mt={3}
          textAlign="center"
          href="#servicos"
        >
          Serviços
        </Link>
        <Link
          color="white"
          aria-label="link"
          display="block"
          mt={3}
          textAlign="center"
          href="#areas-atuacao"
        >
          Áreas de Atuação
        </Link>
        <Link
          color="white"
          aria-label="link"
          display="block"
          mt={3}
          textAlign="center"
          href="#sobre-nos"
        >
          Sobre Nós
        </Link>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="center"
        width="100%"
        height="130px"
        position="relative"
      >
        <Image
          width={130}
          height={130}
          src="/img/logo.svg"
          alt="Logo Empresa"
        />
      </Box>
      <Box textAlign="center">
        <Text color="white" fontSize="2xl" textAlign="center">
          Redes Sociais
        </Text>
        <Link
          href="https://www.facebook.com/profile.php?id=100083355901567"
          target="_blank"
        >
          <IconButton
            bg="transparent"
            color="white"
            aria-label="Call Sage"
            fontSize="40px"
            borderRadius="full"
            icon={<IoLogoFacebook />}
            mr={3}
            _hover={{ colorScheme: 'transparent' }}
            _focus={{ colorScheme: 'transparent' }}
            _active={{ colorScheme: 'transparent' }}
          />
        </Link>
        <Link
          href="https://www.instagram.com/vale.controledepragas/"
          target="_blank"
        >
          <IconButton
            bg="transparent"
            color="white"
            aria-label="Call Sage"
            fontSize="40px"
            borderRadius="full"
            icon={<FaInstagram />}
            mr={3}
            _hover={{ colorScheme: 'transparent' }}
            _focus={{ colorScheme: 'transparent' }}
            _active={{ colorScheme: 'transparent' }}
          />
        </Link>
        <Link href="https://wa.me/+5571999442998" target="_blank">
          <IconButton
            bg="transparent"
            color="white"
            aria-label="Call Sage"
            fontSize="40px"
            borderRadius="full"
            icon={<IoLogoWhatsapp />}
            _hover={{ colorScheme: 'transparent' }}
            _focus={{ colorScheme: 'transparent' }}
            _active={{ colorScheme: 'transparent' }}
          />
        </Link>
      </Box>
    </SimpleGrid>

    <Box mt="5px">
      <Text color="white" textAlign="center">
        © Copyright 2000-2022 Globo Comunicação e Participações S.A.
      </Text>
    </Box>
  </Container>
)

export default Footer
