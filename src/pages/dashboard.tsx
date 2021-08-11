import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { Dashboard } from 'templates/Dashboard'

export default function Home() {
  return <Dashboard />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx)

  if (!!cookies['eduick.token'] || !!cookies['next-auth.session-token']) {
    return {
      props: {}
    }
  }

  return {
    redirect: {
      destination: '/',
      permanent: false
    }
  }
}
