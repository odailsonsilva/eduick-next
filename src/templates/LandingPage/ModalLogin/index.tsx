import { useRouter } from 'next/router'
import { FiX } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import { signIn as signInNextAuth } from 'next-auth/client'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAuth } from 'services/hooks/useAuth'

import { Button } from 'components/atoms/Button'
import { Input } from 'components/atoms/Input'
import Modal from 'components/atoms/Modal'

import * as S from './styles'

import { FormEvent } from 'react'

import MediaMatch from 'components/molecules/MediaMatch'

type Props = {
  isOpen: boolean
  onRequestClose: () => void
}

type SignInData = {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail is required').email('Invalid e-mail'),
  password: yup
    .string()
    .min(8)
    .max(20)
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
      'Password must have at least 8 characters, one uppercase, one lowercase and one number'
    )
})

export const ModalLogin = ({ isOpen, onRequestClose }: Props) => {
  const router = useRouter()
  const { isLoading, signIn, errors } = useAuth()
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const onRequestSignIn: SubmitHandler<SignInData> = async (values) => {
    const { email, password } = values

    await signIn({
      email,
      password
    })
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <S.Wrapper>
        <div className="wrapper__header">
          <h1>
            Get Started
            <br /> <span>Just Login</span>
          </h1>

          <MediaMatch lessThan="medium">
            <button type="button" onClick={onRequestClose}>
              <FiX size="24px" color="#fff" />
            </button>
          </MediaMatch>
        </div>

        <S.Form onSubmit={handleSubmit(onRequestSignIn)}>
          <div className="form__input">
            <Input
              label="Username:"
              placeholder="user@eduick.com"
              errors={formState.errors?.email?.message || errors.email}
              {...register('email')}
            />
          </div>

          <div className="form__input">
            <Input
              label="Password:"
              placeholder="Teste123@"
              isPassword
              errors={formState.errors?.password?.message || errors.password}
              {...register('password')}
            />
          </div>

          <div className="form__button">
            <Button type="submit" disabled={isLoading && !!formState.errors}>
              LOGIN
            </Button>
          </div>
        </S.Form>

        <S.Divider>
          <p>or</p>
        </S.Divider>

        <S.BTNGitHub type="button" onClick={() => signInNextAuth()}>
          <FaGithub size="24px" />
          <span>LOGIN WITH GITHUB</span>
        </S.BTNGitHub>
      </S.Wrapper>
    </Modal>
  )
}
