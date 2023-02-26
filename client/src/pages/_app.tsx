import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import LayoutMain from '@/components/presentations/LayoutMain'
import { store } from '@/store'
import theme from '@/lib/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LayoutMain>
          <Component {...pageProps} />
        </LayoutMain>
      </ThemeProvider>
    </Provider>
  )
}
