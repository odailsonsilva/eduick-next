import router from 'next/router'
import { useSession, signOut as signOutNextAuth } from 'next-auth/client'
import { createContext, ReactNode, useContext, useState } from 'react'

import { setCookie, parseCookies, destroyCookie } from 'nookies'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

type Props = {
  children: ReactNode
}

type User = {
  github?: {
    email: string | null | undefined
    image: string | null | undefined
    name: string | null | undefined
  }
  tokenEduick: {
    user: string
  }
}

type SignInCredentials = {
  email: string
  password: string
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>
  isAuthenticated: boolean
  isLoading: boolean
  errors: SignInCredentials
  signOut(): void
}

const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: Props) {
  const [session] = useSession()

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUsers] = useState<User>()
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({} as SignInCredentials)

  function redirectCookie() {
    if (isAuthenticated) {
      router.push('/dashboard')
    } else {
      router.push('/')
    }
  }

  /**
   * LOGICA PARA LOGIN (MOCKADO) COM EMAIL
   */

  async function signIn({ email, password }: SignInCredentials) {
    setIsLoading(true)
    setErrors({
      email: '',
      password: ''
    })

    /**
     * SIMULA UM TIMING DE REQUEST
     */

    await new Promise((resolve) => setTimeout(resolve, 2000))

    if (email === 'user@eduick.com' && password === 'Teste123@') {
      const token = 'açlasjdlasjdasdlajs'

      setCookie(undefined, 'eduick.token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      })

      toast('Login successfully ', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        type: 'success'
      })

      /**
       * COMO AS INFORMAÇOES ESTAO MOCKA, ESTE SETTIMEOUT SERVE PARA EVITAR
       * POSSIVEIS ERROS DURANTE A ANALISE DOS COOKIES
       */

      setTimeout(() => {
        const { 'eduick.token': tokenS } = parseCookies()
        if (tokenS) router.push('/dashboard')
      }, 1000)
    } else {
      toast('Invalid credentials', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        type: 'error'
      })

      setErrors({
        email: 'Check your email',
        password: 'Check your password'
      })
    }asd

    setIsLoading(false)
  }

  function signOut() {
    if (session) {
      return signOutNextAuth()
    } else {
      destroyCookie(undefined, 'eduick.token')
      setUsers({} as any)

      toast('Logout successfully ', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        type: 'success'
      })

      setTimeout(() => {
        router.push('/')
      }, 1000)
    }
  }

  return (
    <AuthContext.Provider
      value={{ signIn, isAuthenticated, isLoading, errors, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
