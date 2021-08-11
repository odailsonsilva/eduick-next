import { AppProps } from 'next/app'
import Head from 'next/head'
import { makeServer } from 'services/mirage'
import { ThemeProvider } from 'styled-components'
import { Provider as NextAuthProvider } from 'next-auth/client'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer } from 'react-toastify'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { queryClient } from 'services/queryClient'
import { AuthProvider } from 'services/hooks/useAuth'

import 'react-toastify/dist/ReactToastify.css'

//INICIALIZANDO O MIRAGE JS
if (process.env.NODE_ENV === 'development') {
  makeServer()
}

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextAuthProvider session={pageProps.session}>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <Head>
              <title>Eduick</title>
              <link rel="manifest" href="/manifest.json" />
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />

            <ToastContainer />
          </ThemeProvider>
        </AuthProvider>

        <ReactQueryDevtools />
      </NextAuthProvider>
    </QueryClientProvider>
  )
}

export default App
