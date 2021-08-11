import { AppProps } from 'next/app'
import Head from 'next/head'
import { makeServer } from 'services/mirage'
import { ThemeProvider } from 'styled-components'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { queryClient } from 'services/queryClient'

//INICIALIZANDO O MIRAGE JS
if (process.env.NODE_ENV === 'development') {
  makeServer()
}

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Eduick</title>
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
