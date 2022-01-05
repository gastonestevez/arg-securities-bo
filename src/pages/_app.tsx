import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

import store from '../app/store'
import Navbar from '../components/Navbar'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  )
}
