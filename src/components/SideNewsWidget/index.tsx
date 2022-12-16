import { Text, Box, Divider, Link } from '@chakra-ui/react'
import Image from 'next/image'

export type SideNewsWidgetItemProps = {
  title: string
  imageSrc: string
}

export type SideNewsWidgetProps = {
  title: string
  image?: string
  news: SideNewsWidgetItemProps[]
}

const SideNewsWidget = ({ title, image, news }: SideNewsWidgetProps) => (
  <Box
    borderRadius="4px"
    boxShadow="0 1px 2px rgb(0 0 0 / 5%)"
    border="1px solid #e1e1e1"
  >
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      py="16px"
      px="24px"
    >
      <Text fontWeight="bold">{title}</Text>

      {image && (
        <Box minWidth="48px" minHeight="18px" position="relative" ml="15px">
          <Image fill alt="Imagem da notícia" src={image} />
        </Box>
      )}
    </Box>

    <Divider orientation="horizontal" />

    {news.map((item, index) => (
      <>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="start"
          justifyContent="space-between"
          padding="24px"
          key={index}
        >
          <Link
            fontWeight="bold"
            lineHeight="20px"
            _hover={{
              textDecoration: 'none'
            }}
            color="primary"
          >
            {item.title}
          </Link>

          <Box
            minWidth="94px"
            minHeight="94px"
            bg="purple"
            position="relative"
            ml="15px"
          >
            <Image fill alt="Imagem da notícia" src={item.imageSrc} />
          </Box>
        </Box>

        {index !== news.length - 1 && <Divider orientation="horizontal" />}
      </>
    ))}
  </Box>
)

export default SideNewsWidget
