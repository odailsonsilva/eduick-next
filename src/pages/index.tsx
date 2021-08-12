import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

import { LandingPage } from 'templates/LandingPage'

/**
 * A estrutura da page fica dentro de templates
 */

export default function Home() {
  return <LandingPage />
}

/**
 * Rotas P/ "visitante" atraves do SSR
 * Verifica se existe algum dos cookies abaixo,então faz o redirect
 */

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx)

  if (!!cookies['eduick.token'] || !!cookies['next-auth.session-token']) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
