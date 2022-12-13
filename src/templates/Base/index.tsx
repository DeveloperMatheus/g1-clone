import { Box } from '@chakra-ui/react'
import Header from 'components/Header'
import Footer from 'components/Footer'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <Box minHeight="100vh">
    <Header />

    <main>{children}</main>

    <Footer />
  </Box>
)

export default Base
