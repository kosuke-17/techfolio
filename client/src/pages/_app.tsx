import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import LayoutMain from '@/components/presentations/LayoutMain'
import Snackbar from '@/components/presentations/Snackbar'
import theme from '@/lib/theme'
import { store } from '@/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LayoutMain>
          <Component {...pageProps} />
        </LayoutMain>
        <Snackbar />
      </ThemeProvider>
    </Provider>
  )
}
