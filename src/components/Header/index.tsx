import { Box, Flex, Container, Input, IconButton } from '@chakra-ui/react'
import Drawer from 'components/Drawer'
import Image from 'next/image'
import NextLink from 'next/link'

import { FaSearch } from 'react-icons/fa'

const Header = () => {
  return (
    <Flex
      backgroundColor="primary"
      as="nav"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      p={{ xs: 3, md: 3 }}
      boxShadow="md"
      aria-label="navbar"
      minWidth="100%"
      position="sticky"
      top={0}
      left={0}
      right={0}
      zIndex={11}
    >
      <Container
        maxW="1440px"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          width={{
            base: 'auto',
            lg: '200px'
          }}
        >
          <Drawer />
        </Box>

        <Box
          position="relative"
          width={{
            base: '42px',
            lg: '200px'
          }}
          height="42px"
        >
          <NextLink href={'/'} passHref>
            <Image fill src="/img/logo.svg" alt="Logo Empresa" />
          </NextLink>
        </Box>

        <Input
          display={{
            base: 'none',
            lg: 'block'
          }}
          width="200px"
          variant="filled"
          placeholder="Busca"
          backgroundColor="white"
          // _hover={{
          //   backgroundColor: 'darkPrimary'
          // }}
          _focus={{
            backgroundColor: 'white'
          }}
        />

        <IconButton
          display={{
            base: 'block',
            lg: 'none'
          }}
          width={{
            base: 'auto',
            lg: '200px'
          }}
          backgroundColor="transparent"
          color="white"
          aria-label="Search database"
          icon={<FaSearch />}
        />
      </Container>
    </Flex>
  )
}

export default Header
