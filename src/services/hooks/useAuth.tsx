import router from 'next/router'
import { useSession } from 'next-auth/client'
import { createContext, ReactNode, useContext, useState } from 'react'

import { setCookie, parseCookies } from 'nookies'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

type Props = {
  children: ReactNode
}

type User = {
  github: {
    email: string | null | undefined
    image: string | null | undefined
    name: string | null | undefined
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
}

const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: Props) {
  const [session] = useSession()

  const [user, setUsers] = useState<User>()
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({} as SignInCredentials)
  const isAuthenticated = !!user

  async function signIn({ email, password }: SignInCredentials) {
    setIsLoading(true)
    setErrors({
      email: '',
      password: ''
    })

    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log('hook', { email, password })

    if (email === 'user@eduick.com' && password === 'Teste123@') {
      const token = 'açlasjdlasjdasdlajs'

      setCookie(undefined, 'eduick.token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      })

      router.push('/dashboard')
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
    }

    setIsLoading(false)
  }

  /**
   * VERIFICA SE EXISTE SESSION (COOKIES) COM LOGIN SOCIAL
   */

  useEffect(() => {
    if (session !== undefined) {
      setUsers({
        github: {
          email: session?.user?.email,
          image: session?.user?.image,
          name: session?.user?.name
        }
      })
    }
  }, [session])

  useEffect(() => {
    const { 'eduick.token': token } = parseCookies()

    if (token) {
      // buscar as info atualizadas do usuario
      // salvar as informacoes atualizadas
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ signIn, isAuthenticated, isLoading, errors }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
