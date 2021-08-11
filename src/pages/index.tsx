import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

import { LandingPage } from 'templates/LandingPage'

export default function Home() {
  return <LandingPage />
}

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
