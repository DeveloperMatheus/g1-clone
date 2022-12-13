import { extendTheme } from '@chakra-ui/react'
import breakpoints from './breakpoints'
import colors from './colors'

const theme = extendTheme({
  breakpoints,
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  colors,
  lineHeights: {
    base: 1.6
  },
  components: {
    Link: {
      baseStyle: {
        _focus: {
          boxShadow: 'none'
        }
      }
    },
    Button: {
      defaultProps: {
        colorScheme: 'blue'
      }
    },
    Radio: {
      parts: ['label'],
      baseStyle: {
        label: {
          width: '100%'
        }
      }
    }
  }
})

export default theme
