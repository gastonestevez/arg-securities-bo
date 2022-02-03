import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

import store from '../app/store'
import { ThemeProvider } from '@mui/material'
import { theme } from '../theme'
import './navbar.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />

      </ThemeProvider>
    </Provider>
  )
}
