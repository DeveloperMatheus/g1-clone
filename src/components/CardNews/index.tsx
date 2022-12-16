import { Text, Box, UnorderedList, ListItem } from '@chakra-ui/react'
import Image from 'next/image'

export type CardNewsType = {
  imageSrc: string
  title: string
  subtitleList: string[]
  createdAt: string
  fieldArea: string
}

const CardNews = ({
  imageSrc,
  title,
  subtitleList,
  createdAt,
  fieldArea
}: CardNewsType) => (
  <Box
    display="flex"
    flexDirection={{
      base: 'column',
      lg: 'row'
    }}
    alignItems="start"
    justifyContent="center"
    mb={{
      base: '15px',
      lg: '40px'
    }}
    borderBottom="1px solid #e1e1e1"
  >
    {/* Image Desktop */}
    <Box
      display={{
        base: 'none',
        lg: 'block'
      }}
      width="400px"
      height="220px"
      position="relative"
      mr="15px"
    >
      <Image fill alt="Imagem da notícia" src={imageSrc} />
    </Box>

    <Box>
      <Text color="primary" fontSize="24px" lineHeight="35px" fontWeight="bold">
        {title}
      </Text>

      {/* Image Mobile */}
      <Box
        display={{
          base: 'block',
          lg: 'none'
        }}
        width="100%"
        height="220px"
        position="relative"
        mt="10px"
      >
        <Image fill alt="Imagem da notícia" src={imageSrc} />
      </Box>

      <UnorderedList mt="10px">
        {subtitleList.map((item, index) => (
          <ListItem
            fontSize="14px"
            color="primary"
            fontWeight="medium"
            key={index}
          >
            {item}
          </ListItem>
        ))}
      </UnorderedList>
      <Text fontSize="12px" color="darkText" fontWeight="medium" mt="10px">
        Há {createdAt} - Em {fieldArea}
      </Text>
    </Box>
  </Box>
)

export default CardNews
