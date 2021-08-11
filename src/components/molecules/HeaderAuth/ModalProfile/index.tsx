import React from 'react'
import Modal from 'components/atoms/Modal'
import { useSession } from 'next-auth/client'

import * as S from './styles'
import { Avatar } from 'components/atoms/Avatar'
import { Button } from 'components/atoms/Button'
import { useAuth } from 'services/hooks/useAuth'

type Props = {
  isOpen: boolean
  onRequestClose: () => void
}

export const ModalProfile = ({ isOpen, onRequestClose }: Props) => {
  const [session] = useSession()
  const { signOut } = useAuth()
  const [user, setUser] = React.useState<any>({})

  React.useEffect(() => {
    if (session !== undefined) {
      setUser(session?.user)
    }
  }, [session])

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <S.Wrapper>
        <Avatar size="large" src={user?.image} />

        <h2>{user?.name || 'Student'}</h2>

        <div className="wrapper__button">
          <Button type="button" themeButton="danger" onClick={() => signOut()}>
            Logout
          </Button>
        </div>
      </S.Wrapper>
    </Modal>
  )
}
