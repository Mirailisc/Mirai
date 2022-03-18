import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "light",
}

export const theme = extendTheme({ config,
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode('white', 'gray.900')(props),
      }
    })
  },
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Montserrat, sans-serif',
  }
})