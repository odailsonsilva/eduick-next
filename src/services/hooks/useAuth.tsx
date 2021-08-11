import router from 'next/router'
import { useSession } from 'next-auth/client'
import { createContext, ReactNode, useContext, useState } from 'react'

import { setCookie, parseCookies } from 'nookies'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { api } from 'services/api'

type Props = {
  children: ReactNode
}

type User = {
  email: string
  permissions: string[]
  roles: string[]
}

type SignInCredentials = {
  email: string
  password: string
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>
  isAuthenticated: boolean
}

const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: Props) {
  const [session] = useSession()

  const [user, setUsers] = useState<User>()
  const [isLoading, setIsLoading] = useState(false)
  const isAuthenticated = !!user

  async function signIn({ email, password }: SignInCredentials) {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    if (email === 'username' && password === 'Teste123@') {
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
    }

    setIsLoading(false)
  }

  useEffect(() => {
    console.log('session', session)
  }, [session])

  useEffect(() => {
    const { 'eduick.token': token } = parseCookies()

    if (token) {
      // buscar as info atualizadas do usuario
      // salvar as informacoes atualizadas
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
