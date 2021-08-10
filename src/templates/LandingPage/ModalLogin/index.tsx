import { FiX } from 'react-icons/fi'

import { Button } from 'components/atoms/Button'
import { Input } from 'components/atoms/Input'
import Modal from 'components/atoms/Modal'

import * as S from './styles'

import { FormEvent } from 'react'
import { useMediaQuery } from 'react-responsive'

type Props = {
  isOpen: boolean
  onRequestClose: () => void
}

export const ModalLogin = ({ isOpen, onRequestClose }: Props) => {
  const isMobileOrTabled = useMediaQuery({ maxWidth: 767 })

  function onRequestSignIn(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <S.Wrapper>
        <div className="wrapper__header">
          <h1>
            Get Started
            <br /> <span>Just Login</span>
          </h1>

          {isMobileOrTabled && (
            <div>
              <button type="button" onClick={onRequestClose}>
                <FiX size="24px" color="#fff" />
              </button>
            </div>
          )}
        </div>

        <S.Form onSubmit={onRequestSignIn}>
          <div className="form__input">
            <Input label="Username:" />
          </div>

          <div className="form__input">
            <Input label="Password:" isPassword />
          </div>

          <div className="form__button">
            <Button type="submit">LOGIN</Button>
          </div>
        </S.Form>
      </S.Wrapper>
    </Modal>
  )
}
