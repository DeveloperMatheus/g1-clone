import { Text, Box } from '@chakra-ui/react'
import Image from 'next/image'

export type ProductCardProps = {
  title: string
  img: string
}

const ProductCard = ({ title, img }: ProductCardProps) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="end"
    flexFlow="column"
    borderWidth={2}
    borderRadius="lg"
    data-testid="product-card"
    overflow="hidden"
    data-aos="flip-left"
  >
    <Box width="100%" height={200} position="relative">
      <Image
        fill
        src={img}
        alt="Logo Empresa"
        aria-label="Logo Empresa"
        objectFit="cover"
      />
    </Box>

    <Box px={3} py={5} width="100%">
      <Text fontSize="2xl" textAlign="center">
        {title}
      </Text>
    </Box>
  </Box>
)

export default ProductCard
