import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  Button,
  IconButton,
  Icon,
  Text
} from '@chakra-ui/react'

import Link from 'next/link'
import Image from 'next/image'

import { FaBars, FaAngleRight } from 'react-icons/fa'

import drawerList from './mocks'

const DrawerExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <IconButton
          onClick={onOpen}
          aria-label="Open Drawer"
          backgroundColor="primary"
          _hover={{
            backgroundColor: 'darkPrimary'
          }}
          color="white"
          textAlign="center"
          icon={<FaBars />}
        />

        <Text color="secondary" fontSize="14px" fontWeight="bold">
          MENU
        </Text>
      </Box>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody mt="30px">
              <Link href="#">
                {drawerList.map((drawerLabel, index) => (
                  <Button
                    width="100%"
                    color="grey"
                    fontSize="20px"
                    fontWeight="light"
                    variant="ghost"
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    key={index}
                    mt="15px"
                  >
                    {drawerLabel}
                    <Icon color="primary" fontSize="18px" as={FaAngleRight} />
                  </Button>
                ))}
              </Link>
            </DrawerBody>
            <DrawerFooter>
              <Box mr={3} width="100%" height="80px" position="relative">
                <Image
                  fill
                  src="/img/logo.svg"
                  alt="Logo Empresa"
                  aria-label="Logo Empresa"
                  objectFit="contain"
                />
              </Box>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default DrawerExample
